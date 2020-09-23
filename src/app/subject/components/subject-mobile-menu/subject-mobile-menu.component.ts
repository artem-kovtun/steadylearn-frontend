import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PermissionsHelper} from '../../../group/helpers/permissions.helper';
import {Permission} from '../../../group/models/permission.enum';

@Component({
  selector: 'app-subject-mobile-menu',
  templateUrl: './subject-mobile-menu.component.html',
  styleUrls: ['./subject-mobile-menu.component.scss']
})
export class SubjectMobileMenuComponent implements OnInit {

  Permission = Permission;

  constructor(public dialogReference: MatDialogRef<SubjectMobileMenuComponent>,
              @Inject(MAT_DIALOG_DATA) public permissions: Array<Permission>,
              public permissionsHelper: PermissionsHelper) { }

  ngOnInit(): void {
  }

  onAddSubjectButtonClick() {
    this.dialogReference.close('AddSubject');
  }

  onOpenFiltersButtonClick() {
    this.dialogReference.close('OpenFilters');
  }
}
