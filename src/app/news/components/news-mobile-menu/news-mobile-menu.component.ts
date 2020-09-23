import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Permission} from '../../../group/models/permission.enum';
import {PermissionsHelper} from '../../../group/helpers/permissions.helper';

@Component({
  selector: 'app-news-mobile-menu',
  templateUrl: './news-mobile-menu.component.html',
  styleUrls: ['./news-mobile-menu.component.scss']
})
export class NewsMobileMenuComponent implements OnInit {

  Permission = Permission;

  constructor(public dialogReference: MatDialogRef<NewsMobileMenuComponent>,
              @Inject(MAT_DIALOG_DATA) public permissions: Array<Permission>,
              public permissionsHelper: PermissionsHelper) { }

  ngOnInit(): void {
  }

  onAddNewsButtonClick() {
    this.dialogReference.close('AddNews');
  }

  onOpenFiltersButtonClick() {
    this.dialogReference.close('OpenFilters');
  }

}
