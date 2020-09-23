import { Component, OnInit } from '@angular/core';
import {Group} from '../../../group/models/group.model';
import {User} from '../../../user/models/user.model';
import {GroupsService} from '../../../group/services/groups.service';
import {UsersService} from '../../../user/services/users.service';
import {AuthService} from '../../../auth/services/auth.service';
import {Router} from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-profile-preview-page',
  templateUrl: './profile-preview-page.component.html',
  styleUrls: ['./profile-preview-page.component.scss']
})
export class ProfilePreviewPageComponent implements OnInit {

  isInDarkMode = false;
  groups: Array<Group>;
  currentUser: User = new User();

  constructor(private groupsService: GroupsService,
              private usersService: UsersService,
              private router: Router,
              private authService: AuthService,
              private modal: NzModalService) {
    this.groupsService.getUserGroups()
      .subscribe(groups => this.groups = groups);
    this.usersService.WhoIAm()
      .subscribe(user => this.currentUser = user);
  }

  getAbbreviation(fullname: string) {
    if (fullname == null) return '?';

    return fullname.split(' ').map(e => e[0]).join('');
  }

  leaveGroupConfirm(alias: string) {
    const groupName = this.groups.filter(g => g.alias === alias)[0].name;
    this.modal.confirm({
      nzTitle: `Do you really want to leave '${groupName}' group?`,
      nzOkText: 'Yes, leave',
      nzOkType: 'danger',
      nzOnOk: () => alert('leave group'),
      nzCancelText: 'No, stay'
    });
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/', 'login']);
  }

}
