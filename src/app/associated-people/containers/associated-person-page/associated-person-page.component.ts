import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ClipboardService} from 'ngx-clipboard';
import {NzMessageService} from 'ng-zorro-antd/message';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Person} from '../../models/person.model';
import {PageView} from '../../models/pageView.enum';
import {AssociatedPeopleService} from '../../services/associatedPeople.service';
import {MatDialog} from '@angular/material/dialog';
import {ManageSubjectsComponent} from '../../components/manage-subjects/manage-subjects.component';
import {Permission} from '../../../group/models/permission.enum';
import {PermissionService} from '../../../permission/services/PermissionService';
import {PermissionsHelper} from '../../../group/helpers/permissions.helper';
import {Group} from '../../../group/models/group.model';
import {GroupsService} from '../../../group/services/groups.service';
import {PageLoadProperties} from '../../../core/models/pageLoadProperties';
import {UserGroupStatus} from '../../../group/models/userGroupStatus.enum';
import {NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-associated-person-page',
  templateUrl: './associated-person-page.component.html',
  styleUrls: ['./associated-person-page.component.scss']
})
export class AssociatedPersonPageComponent implements OnInit {

  pageLoadProperties = new PageLoadProperties(true);
  groupAlias: string;
  route: ActivatedRoute;
  group: Group;
  returnUrl: string;
  personImageURL: string | ArrayBuffer;
  emailsForm!: FormGroup;
  emailControls: Array<{ id: number; controlInstance: string }> = [];
  personId: string;
  PageView = PageView;
  view: PageView;
  person: Person = new Person();
  Permission = Permission;
  permissions: Array<Permission> = [];


  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private modal: NzModalService,
              private clipboardService: ClipboardService,
              private message: NzMessageService,
              private groupsService: GroupsService,
              private fb: FormBuilder,
              private peopleService: AssociatedPeopleService,
              public dialog: MatDialog,
              private permissionService: PermissionService,
              public permissionsHelper: PermissionsHelper) {
      this.route = this.activatedRoute;
      this.groupAlias = this.activatedRoute.snapshot.params.alias;
      this.personId = this.activatedRoute.snapshot.params.personId;
      this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
    }


  getPerson() {
    this.peopleService.getPerson(this.personId)
      .subscribe(person => {
        this.person = person;
        this.personImageURL = this.person.imageUrl;
        this.view = PageView.Read;
        this.emailControls = [];
        this.person.emails?.forEach(email => {
          this.addEmailField(null, email);
        });
      });
  }

  addEmailField(e?: MouseEvent, value?: string) {
    if (e) { e.preventDefault(); }

    const id = this.emailControls.length > 0 ? this.emailControls[this.emailControls.length - 1].id + 1 : 0;

    const control = {
      id,
      controlInstance: `email${id}`
    };
    const index = this.emailControls.push(control);
    this.emailsForm.addControl(this.emailControls[index - 1].controlInstance, new FormControl(value));
  }

  onEdit() {
    this.emailsForm = this.fb.group({});
    this.emailControls = [];
    this.person.emails?.forEach(email => {
      this.addEmailField(null, email);
    });
    this.view = PageView.Edit;
  }

  getAbbreviation(fullname: string) {
    if (fullname == null) { return '?'; }

    return fullname.split(' ').map(e => e[0]).join('');
  }

  onCancel() {
    this.getPerson();
    this.view = PageView.Read;
  }

  backClick() {
    if (this.returnUrl == null) {
      this.router.navigate(['/', this.groupAlias, 'associated-people']);
      return;
    }
    this.router.navigateByUrl(this.returnUrl);
    return;
  }

  removeEmailField(i: { id: number; controlInstance: string }, e: MouseEvent): void {
    e.preventDefault();
    if (this.emailControls.length > 0) {
      const index = this.emailControls.indexOf(i);
      this.emailControls.splice(index, 1);
      this.emailsForm.removeControl(i.controlInstance);
    }
  }

  onDelete(){
    this.modal.confirm({
      nzTitle: `Do you really want to delete ${this.person.fullname}?`,
      nzOkText: 'Yes, delete',
      nzOkType: 'danger',
      nzOnOk: () => this.peopleService.deletePerson(this.person.id)
        .subscribe(_ => {
          this.router.navigate([this.groupAlias, 'associated-people']);
          this.message.success('Person has been deleted successfully');
        }),
      nzCancelText: 'No, keep'
    });
  }

  onUpdate() {
    this.person.emails = Object.values(this.emailsForm.value).filter(email => email != null) as string[];
    this.peopleService.updatePerson(this.person)
    .subscribe(_ => {
      this.getPerson();
      this.view = PageView.Read;
    });
  }

  onCreate() {
    this.person.emails = Object.values(this.emailsForm.value).filter(email => email != null) as string[];
    this.peopleService.addPerson(this.groupAlias, this.person)
      .subscribe(id => {
        this.router.navigate([this.groupAlias, 'associated-people', id]);
      });
  }

  copyEmail(email: string) {
    this.clipboardService.copyFromContent(email);
    this.message.success('Successfully copied to clipboard!');
  }

  imageSelected(image: File){
    if (image.type.match(/image\/*/) == null) {
      this.message.error('Only images are allowed');
      return;
    }

    this.person.image = image;

    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = _ => {
      this.personImageURL = reader.result;
    };
  }

  ngOnInit(): void {
    this.groupsService.getGroup(this.groupAlias)
      .subscribe(group => {
        if (group?.status !== UserGroupStatus.Active) {
          this.pageLoadProperties.AccessDenied();
          this.pageLoadProperties.DataLoaded();
        }
        else {
          this.group = group;
          if (this.personId != null) { this.getPerson(); }
          else { this.view = PageView.Edit; }
          this.permissionService.getUserGroupPermissionPools(this.groupAlias)
            .subscribe(permissions => {
              if (this.view === PageView.Edit &&
                  !this.permissionsHelper.hasPermissions(permissions, [Permission.Admin, Permission.AssociatedPeopleManager])) {
                this.pageLoadProperties.AccessDenied();
              }
              this.permissions = permissions;
              this.emailsForm = this.fb.group({});
              this.pageLoadProperties.DataLoaded();
            });

        }
      });

  }

  manageSubjectsClick() {
    const dialog = this.dialog.open(ManageSubjectsComponent, {
      width: '550px',
      data: {
        id: this.personId,
        groupAlias: this.groupAlias,
        selected: this.person.subjects
      }
    });

    dialog.afterClosed().subscribe(event => {
      if (event) {
        this.getPerson();
      }
    });
  }

}
