import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PermissionsHelper} from '../../../group/helpers/permissions.helper';
import {Permission} from '../../../group/models/permission.enum';

@Component({
  selector: 'app-members-mobile-menu',
  templateUrl: './members-mobile-menu.component.html',
  styleUrls: ['./members-mobile-menu.component.scss']
})
export class MembersMobileMenuComponent implements OnInit {

  Permission = Permission;

  constructor(public dialogReference: MatDialogRef<MembersMobileMenuComponent>,
              @Inject(MAT_DIALOG_DATA) public permissions: Array<Permission>,
              public permissionsHelper: PermissionsHelper) { }

  onAddMemberButtonClick() {
    this.dialogReference.close('AddMember');
  }

  onOpenFiltersButtonClick() {
    this.dialogReference.close('OpenFilters');
  }

  ngOnInit(): void {
  }
}
