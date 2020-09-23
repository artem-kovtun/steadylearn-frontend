import {Component, OnInit} from '@angular/core';
import {Schedule} from '../../models/schedule.model';
import {SchedulesFilter} from '../../models/schedulesFilter.model';
import {ScheduleService} from '../../services/schedule.service';
import {SchedulesList} from '../../models/schedulesList.model';
import {ActivatedRoute} from '@angular/router';
import {Permission} from '../../../group/models/permission.enum';
import {PermissionService} from '../../../permission/services/PermissionService';
import {GroupsService} from '../../../group/services/groups.service';
import {Group} from '../../../group/models/group.model';
import {PageLoadProperties} from '../../../core/models/pageLoadProperties';
import {UserGroupStatus} from '../../../group/models/userGroupStatus.enum';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements OnInit {

  pageLoadProperties: PageLoadProperties = new PageLoadProperties(true);
  schedulesList: SchedulesList = new SchedulesList();
  groupAlias: string;
  group: Group;
  schedulesFilters: SchedulesFilter = new SchedulesFilter();
  permission = Permission;
  permissions: Array<Permission> = [];

  constructor(private activatedRoute: ActivatedRoute,
              private scheduleService: ScheduleService,
              private groupsService: GroupsService,
              private permissionService: PermissionService) {
    this.groupAlias = this.activatedRoute.snapshot.params.alias;
  }

  onScheduleDelete(id: string){
    this.scheduleService.deleteSchedule(id).subscribe(_ => this.getSchedules());
  }

  onFiltersChange(filters: SchedulesFilter) {
    this.schedulesFilters = filters;
    this.getSchedules();
  }

  onScheduleEditConfirm(schedule: Schedule){
    if (schedule.id == null){
      this.scheduleService.addSchedule(this.groupAlias, schedule).subscribe(_ => this.getSchedules());
      return;
    }

    this.scheduleService.updateSchedule(schedule).subscribe(_ => this.getSchedules());
  }

  onCollapseAll() {
    this.schedulesList.schedules.map(s => s.isCollapsed = true);
  }

  onAddNewSchedule(){
    this.schedulesList.schedules.push(new Schedule());
  }

  onScheduleEditCancel(){
    this.getSchedules();
  }

  onToggleScheduleStatus(id: string) {
    this.scheduleService.toggleScheduleActiveStatus(id).subscribe(_ => this.getSchedules());
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
          this.getSchedules();
        }
        this.pageLoadProperties.DataLoaded();
      });
  }

  getSchedules(){
    this.scheduleService.getSchedules(this.groupAlias, this.schedulesFilters).subscribe(schedules => this.schedulesList = schedules);
  }

}
