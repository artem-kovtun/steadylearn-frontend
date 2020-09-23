import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PermissionsHelper} from '../../../group/helpers/permissions.helper';
import {Permission} from '../../../group/models/permission.enum';

@Component({
  selector: 'app-people-mobile-menu',
  templateUrl: './people-mobile-menu.component.html',
  styleUrls: ['./people-mobile-menu.component.scss']
})
export class PeopleMobileMenuComponent implements OnInit {

  Permission = Permission;

  constructor(public dialogReference: MatDialogRef<PeopleMobileMenuComponent>,
              @Inject(MAT_DIALOG_DATA) public permissions: Array<Permission>,
              public permissionsHelper: PermissionsHelper) { }

  ngOnInit(): void {
  }

  onAddPersonButtonClick() {
    this.dialogReference.close('AddPerson');
  }

  onOpenFiltersButtonClick() {

    this.dialogReference.close('OpenFilters');
  }
}
