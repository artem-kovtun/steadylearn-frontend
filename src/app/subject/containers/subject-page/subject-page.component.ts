import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subject} from '../../models/subject.model';
import {SubjectsService} from '../../services/subjects.service';
import {NzMessageService} from 'ng-zorro-antd/message';
import {FileService} from '../../../file/services/file.service';
import {saveAs} from 'file-saver';
import {MatDialog} from '@angular/material/dialog';
import {ManageSubjectPeopleComponent} from '../../components/manage-subject-people/manage-subject-people.component';
import {AttachSubjectFilesComponent} from '../../components/attach-subject-files/attach-subject-files.component';
import {Person} from '../../../associated-people/models/person.model';
import {Permission} from '../../../group/models/permission.enum';
import {GroupsService} from '../../../group/services/groups.service';
import {PermissionsHelper} from '../../../group/helpers/permissions.helper';
import {PermissionService} from '../../../permission/services/PermissionService';
import {Group} from '../../../group/models/group.model';
import {PageLoadProperties} from '../../../core/models/pageLoadProperties';
import {UserGroupStatus} from '../../../group/models/userGroupStatus.enum';
import {NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-subject-page',
  templateUrl: './subject-page.component.html',
  styleUrls: ['./subject-page.component.scss']
})
export class SubjectPageComponent implements OnInit {

  pageLoadProperties = new PageLoadProperties(true);
  groupAlias: string;
  group: Group;
  subjectId: string;
  subject: Subject = new Subject();
  returnUrl: string;
  permission = Permission;
  permissions: Array<Permission> = [];
  people: Array<Person> = [];
  isMorePeople: boolean;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private modal: NzModalService,
              private subjectsService: SubjectsService,
              private permissionService: PermissionService,
              private message: NzMessageService,
              private groupsService: GroupsService,
              private fileService: FileService,
              public permissionsHelper: PermissionsHelper,
              public dialog: MatDialog) {
    this.groupAlias = this.activatedRoute.snapshot.params.alias;
    this.subjectId = this.activatedRoute.snapshot.params.subjectId;
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  }

  ngOnInit(): void {
    this.groupsService.getGroup(this.groupAlias)
      .subscribe(group => {
        if (group?.status !== UserGroupStatus.Active) {
          this.pageLoadProperties.AccessDenied();
        }
        else {
          this.group = group;
          this.permissionService.getUserGroupPermissionPools(this.groupAlias)
            .subscribe(permissions => this.permissions = permissions);
          this.getSubject();
        }
        this.pageLoadProperties.DataLoaded();
      });

  }

  managePeopleClick() {
    const dialog = this.dialog.open(ManageSubjectPeopleComponent, {
      width: '550px',
      data: {
        subjectId: this.subjectId,
        groupAlias: this.groupAlias,
        selected: this.subject.people
      }
    });

    dialog.afterClosed().subscribe(event => {
      if (event) {
        this.getSubject();
      }
    });
  }

  onBackClick() {
    if (this.returnUrl == null) {
      this.router.navigate(['/', this.groupAlias, 'subjects']);
      return;
    }
    this.router.navigateByUrl(this.returnUrl);
    return;
  }

  attachFilesClick() {
    const dialog = this.dialog.open(AttachSubjectFilesComponent, {
      width: '550px',
      data: {
        subjectId: this.subjectId,
        groupAlias: this.groupAlias,
        selected: this.subject.files
      }
    });

    dialog.afterClosed().subscribe(event => {
      if (event) {
        this.getSubject();
      }
    });
  }

  toggleSubjectStatus(){
    this.subject.isActive = !this.subject.isActive;
    this.subjectsService.updateSubject(this.subject)
      .subscribe(_ => this.getSubject());
  }

  deleteSubject(){
    this.modal.confirm({
      nzTitle: `Do you really want to delete '${this.subject.name}'?`,
      nzOkText: 'Yes, delete',
      nzOkType: 'danger',
      nzOnOk: () => this.subjectsService.deleteSubject(this.subject.id)
        .subscribe(_ => {
          this.message.success('Subject has been successfully deleted!');
          this.router.navigate([this.groupAlias, 'subjects']);
        }),
      nzCancelText: 'No, keep'
    });


  }

  downloadFile(id: string) {
    const fileIndex = this.subject.files.findIndex(file => file.id === id);
    this.subject.files[fileIndex].isDownloading = true;

    this.fileService.downloadFile(id)
      .subscribe(data => {
        saveAs(data,  this.subject.files[fileIndex].name);
        this.subject.files[fileIndex].isDownloading = false;
      });

  }

  getSubject(){
    this.subjectsService.getSubject(this.subjectId).subscribe(data => {
      this.subject = data;
    });
  }

}
