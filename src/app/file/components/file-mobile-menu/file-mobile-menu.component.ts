import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PermissionsHelper} from '../../../group/helpers/permissions.helper';
import {Permission} from '../../../group/models/permission.enum';

@Component({
  selector: 'app-file-mobile-menu',
  templateUrl: './file-mobile-menu.component.html',
  styleUrls: ['./file-mobile-menu.component.scss']
})
export class FileMobileMenuComponent implements OnInit {

  Permission = Permission;

  constructor(public dialogReference: MatDialogRef<FileMobileMenuComponent>,
              @Inject(MAT_DIALOG_DATA) public model: {permissions: Array<Permission>, isFilesSelected: boolean},
              public permissionsHelper: PermissionsHelper) { }

  ngOnInit(): void {
  }

  onDownloadSelectedButtonClick() {
    this.dialogReference.close('DownloadSelectedFiles');
  }

  onOpenFiltersButtonClick() {
    this.dialogReference.close('OpenFilters');
  }

  onUploadFilesButtonClick() {
    this.dialogReference.close('UploadFiles');
  }

  onDeleteSelectedButtonClick() {
    this.dialogReference.close('DeleteSelectedFiles');
  }
}
