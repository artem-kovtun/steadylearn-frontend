import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Schedule } from '../../models/schedule.model';
import { ScheduleMode } from '../../models/scheduleMode.enum';
import { NzModalService } from 'ng-zorro-antd/modal';
import {NzCarouselComponent} from 'ng-zorro-antd';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  @Input() schedule: Schedule = null;
  @Input() scheduleMode: ScheduleMode = ScheduleMode.ReadOnly;
  @Output() onScheduleDelete = new EventEmitter<string>();
  @Output() onScheduleEditConfirm = new EventEmitter<Schedule>();
  @Output() onScheduleEditCancel = new EventEmitter();
  @Output() onToggleScheduleStatus = new EventEmitter<string>();

  ScheduleMode = ScheduleMode;
  weekDays = [{property: 'monday', display: 'Monday'},
              {property: 'tuesday', display: 'Tuesday'},
              {property: 'wednesday', display: 'Wednesday'},
              {property: 'thursday', display: 'Thursday'},
              {property: 'friday', display: 'Friday'},
              {property: 'saturday', display: 'Saturday'}];

  constructor(private modal: NzModalService) { }

  ngOnInit() {
  }

  onCollapseClick(){
    this.schedule.isCollapsed = !this.schedule.isCollapsed;
  }

  onEditClick() {
    this.scheduleMode = ScheduleMode.Edit;
  }

  onEditCancelClick() {
    this.scheduleMode = ScheduleMode.ReadOnly;
    this.onScheduleEditCancel.emit();
  }

  onEditConfirmClick() {
    this.scheduleMode = ScheduleMode.ReadOnly;
    this.onScheduleEditConfirm.emit(this.schedule);
  }

  onDeleteClick() {
    this.showScheduleDeleteConfirmModal();
  }

  onAddRowClick() {
    this.schedule.subjects.push({
      order: this.schedule.subjects.length,
      time: null,
      monday: null,
      tuesday: null,
      wednesday: null,
      thursday: null,
      friday: null,
      saturday: null
    });
  }

  showScheduleDeleteConfirmModal(): void {
    this.modal.confirm({
      nzTitle: `Do you really want to delete '${this.schedule.name}' ?`,
      nzOkText: 'Yes',
      nzOkType: 'danger',
      nzOnOk: () => this.onScheduleDelete.emit(this.schedule.id),
      nzCancelText: 'No',
    });
  }

  onToggleScheduleStatusClick() {
    this.onToggleScheduleStatus.emit(this.schedule.id);
  }

  onRemoveRowClick(i: number){
    this.schedule.subjects.splice(i, 1);
  }

}
