import {Component, Inject, Input, OnInit} from '@angular/core';
import {User} from '../../../user/models/user.model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {StringTools} from '../../../shared/tools/string.tool';
import {UsersService} from '../../../user/services/users.service';
import {UsersFilters} from '../../models/usersFilters.model';
import {UserGroupStatus} from '../../../group/models/userGroupStatus.enum';

@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.component.html',
  styleUrls: ['./add-members.component.scss']
})
export class AddMembersComponent implements OnInit {

  members: Array<User> = [];
  filters: UsersFilters;
  isMore: boolean;
  UserGroupStatus = UserGroupStatus;

  constructor(public dialogRef: MatDialogRef<AddMembersComponent>,
              @Inject(MAT_DIALOG_DATA) public groupAlias: string,
              public stringTools: StringTools,
              private usersService: UsersService) {
    this.filters = new UsersFilters(1, 30);
  }

  ngOnInit(): void {
    // this.getMembers();
  }

  onCancelClick(): void {
    this.dialogRef.close(false);
  }

  onSaveClick(){
    this.dialogRef.close(true);
  }

  addUserToGroup(username: string) {
    this.usersService.AddUserToGroup(this.groupAlias, username)
      .subscribe(_ => this.getMembers());
  }

  getMembers() {
    if (this.filters.search.length < 3) {
      this.members = [];
      return;
    }

    this.usersService.SearchUsers(this.groupAlias, this.filters)
      .subscribe(data => {
        if (this.filters.page === 1) {
          this.members = data.items;
        }
        else {
          this.members = this.members.concat(data.items);
        }
        this.isMore = data.isMore;
      });
  }

}
