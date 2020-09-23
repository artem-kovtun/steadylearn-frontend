import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Permission} from '../../../group/models/permission.enum';
import {PermissionsHelper} from '../../../group/helpers/permissions.helper';
import {MatDialog} from '@angular/material/dialog';
import {MembersMobileMenuComponent} from '../members-mobile-menu/members-mobile-menu.component';

@Component({
  selector: 'app-members-header',
  templateUrl: './members-header.component.html',
  styleUrls: ['./members-header.component.scss']
})
export class MembersHeaderComponent implements OnInit {

  @Output() onAddMember = new EventEmitter();
  @Output() onFiltersChange = new EventEmitter();
  @Input() permissions: Array<Permission> = [];
  Permission = Permission;

  constructor(public dialog: MatDialog, public permissionsHelper: PermissionsHelper) { }

  onFiltersClick() {
    this.onFiltersChange.emit();
  }

  onAddMemberClick() {
    this.onAddMember.emit();
  }

  openMobileMenu() {
    const dialog = this.dialog.open(MembersMobileMenuComponent, {
      width: '300px',
      data: this.permissions
    });

    dialog.afterClosed().subscribe(event => {
      if (event === 'AddMember') {
        this.onAddMemberClick();
      }
      if (event === 'OpenFilters') {
        this.onFiltersClick();
      }
    });
  }

  ngOnInit(): void {
  }

}
