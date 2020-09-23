import {Component, OnInit} from '@angular/core';
import {SubjectsFilters} from '../../models/subjectsFilters.model';
import {SubjectsList} from '../../models/subjectsList.model';
import {SubjectsService} from '../../services/subjects.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Permission} from '../../../group/models/permission.enum';
import {GroupsService} from '../../../group/services/groups.service';
import {PermissionService} from '../../../permission/services/PermissionService';
import {Group} from '../../../group/models/group.model';
import {PageLoadProperties} from '../../../core/models/pageLoadProperties';
import {UserGroupStatus} from '../../../group/models/userGroupStatus.enum';
import {NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-subjects-list',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.scss']
})
export class SubjectsListComponent implements OnInit {

  pageLoadProperties = new PageLoadProperties(true);
  groupAlias: string;
  group: Group;
  route: ActivatedRoute;
  subjectsFilters: SubjectsFilters;
  subjectsList: SubjectsList = new SubjectsList();
  permission = Permission;
  permissions: Array<Permission> = [];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private modal: NzModalService,
              private subjectsService: SubjectsService,
              private groupsService: GroupsService,
              private permissionService: PermissionService) {
    this.route = this.activatedRoute;
    this.groupAlias = this.activatedRoute.snapshot.params.alias;
    this.subjectsFilters = this.getFilters();
  }

  getFilters() {
    const filters = new SubjectsFilters(1, 30);
    filters.sortOrder = this.route.snapshot.queryParams.sortOrder ?? 2;
    filters.orderBy = this.route.snapshot.queryParams.orderBy ?? 2;
    filters.search = this.route.snapshot.queryParams.search ?? '';
    filters.status = this.route.snapshot.queryParams.status ?? 2;

    return filters;
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
          this.getSubjects();
        }
        this.pageLoadProperties.DataLoaded();
      });
  }

  onFiltersChange(filters: SubjectsFilters){
    this.subjectsFilters = filters;
    this.subjectsFilters.page = 1;

    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: this.subjectsFilters,
        queryParamsHandling: 'merge',
      });

    this.getSubjects();
  }

  onAddNewSubject() {
    this.router.navigate(['/', this.groupAlias, 'subjects', 'new'], { queryParams: {returnUrl: this.router.url} });
  }

  navigateToSubject(id: string) {
    this.router.navigate(['/', this.groupAlias, 'subjects', id ], { queryParams: {returnUrl: this.router.url} });
  }

  editSubject(id: string) {
    this.router.navigate(['/', this.groupAlias, 'subjects', id , 'edit'], { queryParams: {returnUrl: this.router.url} });
  }

  deleteSubject(id: string){
    const subjectName = this.subjectsList.subjects.filter(s => s.id === id)[0].name;
    this.modal.confirm({
      nzTitle: `Do you really want to delete '${subjectName}'?`,
      nzOkText: 'Yes, delete',
      nzOkType: 'danger',
      nzOnOk: () => this.subjectsService.deleteSubject(id).subscribe(_ => this.getSubjects()),
      nzCancelText: 'No, keep'
    });
  }

  getSubjects() {
    this.subjectsService.getSubjects(this.groupAlias, this.subjectsFilters)
      .subscribe(data => {
        if (this.subjectsFilters.page === 1) {
          this.subjectsList = data;
        }
        else {
          this.subjectsList.subjects = this.subjectsList.subjects.concat(data.subjects);
          this.subjectsList.isMore = data.isMore;
        }
      });
  }
}
