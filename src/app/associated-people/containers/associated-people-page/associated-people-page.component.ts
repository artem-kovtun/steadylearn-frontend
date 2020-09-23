import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {AssociatedPeopleFiltersComponent} from '../../components/associated-people-filters/associated-people-filters.component';
import {AssociatedPeopleFilters} from '../../models/associatedPeopleFilters.model';
import {Person} from '../../models/person.model';
import {AssociatedPeopleService} from '../../services/associatedPeople.service';
import {Permission} from '../../../group/models/permission.enum';
import {PermissionService} from '../../../permission/services/PermissionService';
import {PermissionsHelper} from '../../../group/helpers/permissions.helper';
import {PeopleMobileMenuComponent} from '../../components/people-mobile-menu/people-mobile-menu.component';
import {Group} from '../../../group/models/group.model';
import {GroupsService} from '../../../group/services/groups.service';
import {PageLoadProperties} from '../../../core/models/pageLoadProperties';
import {UserGroupStatus} from '../../../group/models/userGroupStatus.enum';

@Component({
  selector: 'app-associated-people-page',
  templateUrl: './associated-people-page.component.html',
  styleUrls: ['./associated-people-page.component.scss']
})
export class AssociatedPeoplePageComponent implements OnInit {

  pageLoadProperties = new PageLoadProperties(true);
  filters: AssociatedPeopleFilters = new AssociatedPeopleFilters(1, 30);
  groupAlias: string;
  group: Group;
  route: ActivatedRoute;
  people: Array<Person>;
  isMore: boolean;
  Permission = Permission;
  permissions: Array<Permission> = [];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog,
              private groupsService: GroupsService,
              private peopleService: AssociatedPeopleService,
              private permissionService: PermissionService,
              public permissionsHelper: PermissionsHelper) {
    this.route = this.activatedRoute;
    this.groupAlias = this.activatedRoute.snapshot.params.alias;
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
          this.getPeople();
        }
        this.pageLoadProperties.DataLoaded();
      });
  }

  onFiltersClick(){
    const dialog = this.dialog.open(AssociatedPeopleFiltersComponent, {
      width: '350px',
      data: this.filters
    });

    dialog.afterClosed().subscribe(event => {
      if (event == null) return;
      this.filters = event;
      this.getPeople();
    });
  }

  filtersChanged() {
    this.getPeople();
  }

  onAddNew() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onPersonClick(personId: string){
    this.router.navigate([personId], { relativeTo: this.route });
  }

  getAbbreviation(fullname: string) {
    return fullname.split(' ').map(e => e[0]).join('');
  }

  getPeople(){
    this.peopleService.getPeople(this.groupAlias, this.filters)
      .subscribe(data => {
        this.people = data.items;
        this.isMore = data.isMore;
      });
  }

  openMobileMenu() {
    const dialog = this.dialog.open(PeopleMobileMenuComponent, {
      width: '300px',
      data: this.permissions
    });

    dialog.afterClosed().subscribe(event => {
      if (event === 'AddPerson') {
        this.onAddNew();
      }
      if (event === 'OpenFilters') {
        this.onFiltersClick();
      }
    });
  }

}
