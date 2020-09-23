import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../../models/event.model';
import { EventSeverity } from '../../models/eventSeverity.enum';
import {MatDialog} from '@angular/material/dialog';
import { CreateEditEventFormComponent } from '../create-edit-event-form/create-edit-event-form.component';
import {News} from '../../../news/models/news.model';
import {Permission} from '../../../group/models/permission.enum';
import {PermissionsHelper} from '../../../group/helpers/permissions.helper';

@Component({
  selector: 'app-event-tile',
  templateUrl: './event-tile.component.html',
  styleUrls: ['./event-tile.component.scss']
})
export class EventTileComponent implements OnInit {

  @Input() event: Event;
  @Input() permissions: Array<Permission> = [];
  @Output() onEdit = new EventEmitter<Event>();
  @Output() onDelete = new EventEmitter<string>();

  Permission = Permission;
  EventSeverity: EventSeverity;

  constructor(public dialog: MatDialog,
              public permissionsHelper: PermissionsHelper) { }

  onDeleteClick() {
    this.onDelete.emit(this.event.id);
  }

  onEditClick() {
    const dialog = this.dialog.open(CreateEditEventFormComponent, {
      width: '450px',
      data: Object.assign({}, this.event)
    });

    dialog.afterClosed().subscribe(event => {
      this.onEdit.emit(event);
    });


  }

  ngOnInit(): void {
  }

}
