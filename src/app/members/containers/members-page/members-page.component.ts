import {Component, OnInit} from '@angular/core';
import {User} from '../../../user/models/user.model';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../../../user/services/users.service';
import {MatDialog} from '@angular/material/dialog';
import {AddMembersComponent} from '../../components/add-members/add-members.component';
import {ManagePermissionsComponent} from '../../components/manage-permissions/manage-permissions.component';
import {PermissionService} from '../../../permission/services/PermissionService';
import {Group} from '../../../group/models/group.model';
import {GroupsService} from '../../../group/services/groups.service';
import {PageLoadProperties} from '../../../core/models/pageLoadProperties';
import {UserGroupStatus} from '../../../group/models/userGroupStatus.enum';
import {NzModalService} from 'ng-zorro-antd';

class Permission {
}

@Component({
  selector: 'app-members-page',
  templateUrl: './members-page.component.html',
  styleUrls: ['./members-page.component.scss']
})
export class MembersPageComponent implements OnInit {

  pageLoadProperties = new PageLoadProperties(true);
  groupAlias: string;
  group: Group;
  route: ActivatedRoute;
  members: Array<User>;
  Permission: Permission;
  permissions: Array<Permission> = [];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private modal: NzModalService,
              private groupsService: GroupsService,
              private usersService: UsersService,
              public dialog: MatDialog,
              private permissionService: PermissionService) {
    this.route = this.activatedRoute;
    this.groupAlias = this.activatedRoute.snapshot.params.alias;
  }

  addMembers() {
    const dialog = this.dialog.open(AddMembersComponent, {
      width: '700px',
      data: this.groupAlias
    });

    dialog.afterClosed().subscribe(event => {
      this.usersService.GetGroupMembers(this.groupAlias)
        .subscribe(members => this.members = members);
      }
    );
  }

  manageMemberPermissions(username: string) {
    const dialog = this.dialog.open(ManagePermissionsComponent, {
      width: '400px',
      data: {
        groupAlias: this.groupAlias,
        username
      }
    });

    dialog.afterClosed().subscribe(isUpdated => {
      if (isUpdated) {
        this.usersService.GetGroupMembers(this.groupAlias)
          .subscribe(members => this.members = members);
        }
      }
    );
  }

  acceptMember(username: string) {
    this.usersService.AcceptUser(this.groupAlias, username)
      .subscribe(_ => this.getMembers());
  }

  rejectMember(username: string) {
    this.usersService.RejectUser(this.groupAlias, username)
      .subscribe(_ => this.getMembers());
  }

  removeMember(username: string) {
    const fullname = this.members.filter(m => m.username === username)[0].fullname;
    this.modal.confirm({
      nzTitle: `Do you really want to remove ${fullname} from this group?`,
      nzOkText: 'Yes, remove',
      nzOkType: 'danger',
      nzOnOk: () => this.usersService.RemoveUser(this.groupAlias, username).subscribe(_ => this.getMembers()),
      nzCancelText: 'No, keep'
    });
  }

  banMember(username: string) {
    const fullname = this.members.filter(m => m.username === username)[0].fullname;
    this.modal.confirm({
      nzTitle: `Do you really want to ban ${fullname}?`,
      nzOkText: 'Yes, ban',
      nzOkType: 'danger',
      nzOnOk: () => this.usersService.BanUser(this.groupAlias, username).subscribe(_ => this.getMembers()),
      nzCancelText: 'No, keep'
    });
  }

  ngOnInit(): void {
    this.groupsService.getGroup(this.groupAlias)
      .subscribe(group => {
        if (group?.status !== UserGroupStatus.Active) {
          this.pageLoadProperties.AccessDenied();
        }
        else {
          this.group = group;
          this.permissionService.getUserGroupPermissionPools(this.groupAlias)
            .subscribe(permissions => this.permissions = permissions);
          this.getMembers();
        }
        this.pageLoadProperties.DataLoaded();
      });

  }

  getMembers(){
    this.usersService.GetGroupMembers(this.groupAlias)
      .subscribe(members => this.members = members);
  }

}
