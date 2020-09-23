import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../../user/models/user.model';
import {StringTools} from '../../../shared/tools/string.tool';
import {PermissionsHelper} from '../../../group/helpers/permissions.helper';
import {Permission} from '../../../group/models/permission.enum';

@Component({
  selector: 'app-members-list-record',
  templateUrl: './members-list-record.component.html',
  styleUrls: ['./members-list-record.component.scss']
})
export class MembersListRecordComponent implements OnInit {

  @Input() member: User;
  @Output() onAccept = new EventEmitter<string>();
  @Output() onReject = new EventEmitter<string>();
  @Output() onRemove = new EventEmitter<string>();
  @Output() onBan = new EventEmitter<string>();
  @Output() onManagePermissions = new EventEmitter<string>();

  @Input() permissions: Array<Permission> = [];
  Permission = Permission;

  constructor(public stringTool: StringTools,
              public permissionsHelper: PermissionsHelper) { }

  acceptClick() {
    this.onAccept.emit(this.member.username);
  }

  managePermissions() {
    this.onManagePermissions.emit(this.member.username);
  }

  rejectClick() {
    this.onReject.emit(this.member.username);
  }

  removeClick() {
    this.onRemove.emit(this.member.username);
  }

  banClick() {
    this.onBan.emit(this.member.username);
  }

  ngOnInit(): void {
  }

}
