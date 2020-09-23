import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../../user/models/user.model';
import {StringTools} from '../../../shared/tools/string.tool';
import {Permission} from '../../../group/models/permission.enum';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss']
})
export class MembersListComponent implements OnInit {

  @Input() members: Array<User>;
  @Output() onMemberAccept = new EventEmitter<string>();
  @Output() onMemberReject = new EventEmitter<string>();
  @Output() onMemberRemove = new EventEmitter<string>();
  @Output() onMemberBan = new EventEmitter<string>();
  @Output() onMemberPermissionsManage = new EventEmitter<string>();

  @Input() permissions: Array<Permission> = [];
  Permission = Permission;

  memberAccept(username: string) {
    this.onMemberAccept.emit(username);
  }

  memberReject(username: string) {
    this.onMemberReject.emit(username);
  }

  memberPermissionsManage(username: string) {
    this.onMemberPermissionsManage.emit(username);
  }

  memberRemove(username: string) {
    this.onMemberRemove.emit(username);
  }

  memberBan(username: string) {
    this.onMemberBan.emit(username);
  }

  constructor(public stringTool: StringTools) { }

  ngOnInit(): void {
  }

}
