import {Component, OnInit} from '@angular/core';
import {Event} from '../../models/event.model';
import {Calendar} from '../../models/calendar.model';
import {EventsService} from '../../services/events.service';
import {ActivatedRoute} from '@angular/router';
import {Permission} from '../../../group/models/permission.enum';
import {GroupsService} from '../../../group/services/groups.service';
import {PermissionService} from '../../../permission/services/PermissionService';
import {Group} from '../../../group/models/group.model';
import {PageLoadProperties} from '../../../core/models/pageLoadProperties';
import {UserGroupStatus} from '../../../group/models/userGroupStatus.enum';
import {NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.scss']
})
export class CalendarPageComponent implements OnInit {

  pageLoadProperties = new PageLoadProperties(true);
  date: Date;
  calendar: Calendar = new Calendar();
  groupAlias: string;
  group: Group;
  permission = Permission;
  permissions: Array<Permission> = [];

  constructor(private activatedRoute: ActivatedRoute,
              private modal: NzModalService,
              private eventsService: EventsService,
              private groupsService: GroupsService,
              private permissionService: PermissionService) {
    this.date = new Date();
    this.groupAlias = this.activatedRoute.snapshot.params.alias;
    this.refreshCalendarEvents();
  }

  onDateSelected(date: Date) {
    this.date = date;
    this.refreshCalendarEvents();
  }

  createUpdateEvent(event: Event) {
    if (event.id == null) {
      this.eventsService.addEvent(this.date, this.groupAlias, event.message, event.severity)
        .subscribe(_ => this.refreshCalendarEvents());
      return;
    }

    this.eventsService.updateEvent(event).subscribe(_ => this.refreshCalendarEvents());
  }

  deleteEvent(id: string){
    this.modal.confirm({
      nzTitle: 'Do you really want to delete this event?',
      nzOkText: 'Yes, delete',
      nzOkType: 'danger',
      nzOnOk: () => this.eventsService.deleteEvent(id).subscribe(_ => this.refreshCalendarEvents()),
      nzCancelText: 'No, keep'
    });
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
        }
        this.pageLoadProperties.DataLoaded();
      });
  }

  refreshCalendarEvents(){
    this.eventsService.getEvents(this.groupAlias, this.date).subscribe(data => this.calendar = data);
  }
}
