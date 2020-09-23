import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subject} from '../../models/subject.model';
import {SubjectsService} from '../../services/subjects.service';
import {Group} from '../../../group/models/group.model';
import {GroupsService} from '../../../group/services/groups.service';
import {Permission} from '../../../group/models/permission.enum';
import {PermissionService} from '../../../permission/services/PermissionService';
import {PermissionsHelper} from '../../../group/helpers/permissions.helper';
import {UserGroupStatus} from '../../../group/models/userGroupStatus.enum';
import {PageLoadProperties} from '../../../core/models/pageLoadProperties';

@Component({
  selector: 'app-subject-create-edit',
  templateUrl: './subject-create-edit.component.html',
  styleUrls: ['./subject-create-edit.component.scss']
})
export class SubjectCreateEditComponent implements OnInit {

  pageLoadProperties = new PageLoadProperties(false);
  groupAlias: string;
  group: Group;
  subjectId: string;
  subject: Subject;
  Permission = Permission;
  returnUrl: string;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private groupsService: GroupsService,
              private subjectsService: SubjectsService,
              private permissionsService: PermissionService,
              private permissionsHelper: PermissionsHelper) {
    this.groupAlias = this.activatedRoute.snapshot.params.alias;
    this.subjectId = this.activatedRoute.snapshot.params.subjectId;
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  }

  onBackClick(){
    if (this.returnUrl == null) {
      if (this.subjectId == null) {
        this.router.navigate([this.groupAlias, 'subjects']);
      }
      this.router.navigate([this.groupAlias, 'subjects', this.subjectId]);
      return;
    }
    this.router.navigateByUrl(this.returnUrl);
    return;
  }

  createEditSubject(subject: Subject){
    if (subject.id != null){
      this.subjectsService.updateSubject(subject).subscribe(_ => this.onBackClick());
      return;
    }

    this.subjectsService.addSubject(this.groupAlias, subject)
      .subscribe(id => this.router.navigate([this.groupAlias, 'subjects', id]));
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
          this.permissionsService.getUserGroupPermissionPools(this.groupAlias)
            .subscribe(permissions => {
              if (this.permissionsHelper.hasPermissions(permissions, [Permission.Admin, Permission.SubjectsManager])) {
                this.pageLoadProperties.AccessAllowed();
                if (this.subjectId != null) {
                  this.subjectsService.getSubject(this.subjectId)
                    .subscribe(subject => this.subject = subject);
                }
                else {
                  this.subject = new Subject();
                }
              }
              this.pageLoadProperties.DataLoaded();
            });
        }
      });
  }

}
