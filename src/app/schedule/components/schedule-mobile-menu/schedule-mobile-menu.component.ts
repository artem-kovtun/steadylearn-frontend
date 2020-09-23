import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PermissionsHelper} from '../../../group/helpers/permissions.helper';
import {Permission} from '../../../group/models/permission.enum';

@Component({
  selector: 'app-schedule-mobile-menu',
  templateUrl: './schedule-mobile-menu.component.html',
  styleUrls: ['./schedule-mobile-menu.component.scss']
})
export class ScheduleMobileMenuComponent implements OnInit {

  Permission = Permission;

  constructor(public dialogReference: MatDialogRef<ScheduleMobileMenuComponent>,
              @Inject(MAT_DIALOG_DATA) public permissions: Array<Permission>,
              public permissionsHelper: PermissionsHelper) { }

  ngOnInit(): void {
  }

  onAddScheduleButtonClick() {
    this.dialogReference.close('AddSchedule');
  }

  onOpenFiltersButtonClick() {
    this.dialogReference.close('OpenFilters');
  }
}
