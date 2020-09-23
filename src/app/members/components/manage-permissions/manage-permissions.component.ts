import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ManagePermissionsModalModel} from '../../models/managePermissionsModalModel';
import {PermissionService} from '../../../permission/services/PermissionService';
import {Permission} from '../../../group/models/permission.enum';

@Component({
  selector: 'app-manage-permissions',
  templateUrl: './manage-permissions.component.html',
  styleUrls: ['./manage-permissions.component.scss']
})
export class ManagePermissionsComponent implements OnInit {

  userPermissions: Array<Permission> = [];
  permissions: Array<Permission> = [];

  constructor(public dialogRef: MatDialogRef<ManagePermissionsComponent>,
              @Inject(MAT_DIALOG_DATA) public model: ManagePermissionsModalModel,
              public permissionService: PermissionService) { }

  ngOnInit(): void {
    this.permissionService.getPermissions()
      .subscribe(permissions => this.permissions = permissions);
    this.permissionService.getUserGroupPermissionPools(this.model.groupAlias, this.model.username)
      .subscribe(permissions => this.userPermissions = permissions);
  }

  isSelected(permission: Permission): boolean {
    return this.userPermissions.includes(permission);
  }

  onCancelClick(): void {
    this.dialogRef.close(false);
  }

  onSaveClick(){
    this.permissionService.savePermissions(this.model.groupAlias, this.model.username, this.userPermissions)
      .subscribe(_ => this.dialogRef.close(true));
  }

  onSelectChange(selected: Permission[]) {
    this.userPermissions = selected;
  }
}
