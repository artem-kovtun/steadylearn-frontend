import {Component, OnInit, Output, Input, EventEmitter, Inject} from '@angular/core';
import { SchedulesFilter } from '../../models/schedulesFilter.model';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {NewsFiltersDialogModel} from '../../../news/models/newsFiltersDialogModel.model';
import {NewsFiltersModalComponent} from '../../../news/components/news-filters/news-filters.component';
import {Permission} from '../../../group/models/permission.enum';
import {PermissionsHelper} from '../../../group/helpers/permissions.helper';
import {NewsMobileMenuComponent} from '../../../news/components/news-mobile-menu/news-mobile-menu.component';
import {ScheduleMobileMenuComponent} from '../schedule-mobile-menu/schedule-mobile-menu.component';

@Component({
  selector: 'app-schedules-filters',
  templateUrl: './schedules-filters.component.html',
  styleUrls: ['./schedules-filters.component.scss']
})
export class SchedulesFiltersComponent implements OnInit {

  @Output() onFiltersChange = new EventEmitter<SchedulesFilter>();
  @Output() onAddNewSchedule = new EventEmitter();
  @Output() onCollapseAll = new EventEmitter();
  @Input() filters: SchedulesFilter = new SchedulesFilter();
  @Input() permissions: Array<Permission> = [];

  statusString: string;
  permission = Permission;

  constructor(public dialog: MatDialog, public permissionsHelper: PermissionsHelper) { }

  onAddNewScheduleClick(){
    this.onAddNewSchedule.emit();
  }

  onCollapseAllClick(){
    this.onCollapseAll.emit();
  }

  filtersChanged() {
    this.onFiltersChange.emit(this.filters);
  }

  onFilterButtonClick() {
    const dialog = this.dialog.open(SchedulesFiltersModalComponent, {
      width: '450px',
      data: this.filters
    });

    dialog.afterClosed().subscribe(event => {
      if (event == null) return;
      this.onFiltersChange.emit(event);
    });
  }

  openMobileMenu() {
    const dialog = this.dialog.open(ScheduleMobileMenuComponent, {
      width: '300px',
      data: this.permissions
    });

    dialog.afterClosed().subscribe(event => {
      if (event === 'AddSchedule') {
        this.onAddNewSchedule.emit();
      }
      if (event === 'OpenFilters') {
        this.onFilterButtonClick();
      }
    });
  }

  ngOnInit(): void {
    this.statusString = this.filters.status.toString();
  }

}

@Component({
  selector: 'app-schedules-filters-modal',
  templateUrl: './schedules-filters-modal.component.html',
  styleUrls: ['./schedules-filters.component.scss']
})
export class SchedulesFiltersModalComponent {

  statusString: string;

  constructor(
    public dialogRef: MatDialogRef<SchedulesFiltersModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SchedulesFilter) {}

    onOkClick(): void {
      this.data.status = +this.statusString;

      this.dialogRef.close(this.data);
    }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.statusString = this.data.status.toString();
  }

}

