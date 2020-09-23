import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CreateEditEventFormComponent } from '../create-edit-event-form/create-edit-event-form.component';
import { Event } from '../../models/event.model';
import {Permission} from '../../../group/models/permission.enum';
import {PermissionsHelper} from '../../../group/helpers/permissions.helper';
import {Schedule} from '../../../schedule/models/schedule.model';


@Component({
  selector: 'app-calendar-sider',
  templateUrl: './calendar-sider.component.html',
  styleUrls: ['./calendar-sider.component.scss']
})
export class CalendarSiderComponent implements OnInit {

  @Input() date: Date;
  @Input() events: Array<Event>;
  @Input() schedule = [];
  @Input() permissions: Array<Permission> = [];
  @Output() onEventDelete = new EventEmitter<string>();
  @Output() onEventCreateUpdate = new EventEmitter<Event>();

  permission = Permission;

  constructor(public dialog: MatDialog, public permissionsHelper: PermissionsHelper) {}

  ngOnInit(): void {
    const a = this.permissions;
  }

  onAddEventClick() {
    const dialog = this.dialog.open(CreateEditEventFormComponent, {
      width: '450px',
      data: new Event()
    });

    dialog.afterClosed().subscribe(event => {
      this.onEventCreateUpdate.emit(event);
    });
  }

  onDeleteEvent(id: string){
    this.onEventDelete.emit(id);
  }

  onEditEvent(event: Event){
    this.onEventCreateUpdate.emit(event);
  }
}
