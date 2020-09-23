import {Component, OnInit} from '@angular/core';
import {Group} from '../../models/group.model';
import {UserGroupStatus} from '../../models/userGroupStatus.enum';
import {GroupsService} from '../../services/groups.service';
import {SearchGroupFilter} from '../../models/searchGroupFilter.model';

@Component({
  selector: 'app-join-group-page',
  templateUrl: './join-group-page.component.html',
  styleUrls: ['./join-group-page.component.scss']
})
export class JoinGroupPageComponent implements OnInit {

  groups: Array<Group> = [];
  filters: SearchGroupFilter = new SearchGroupFilter(1, 30);
  isMore: boolean;

  constructor(private groupsService: GroupsService) { }

  ngOnInit(): void {
    this.getGroups();
  }

  joinGroup(alias: string) {
    this.groupsService.joinGroup(alias)
      .subscribe(_ => this.getGroups());
  }

  getGroups() {
    if (this.filters.search?.length < 3) {
      this.groups = [];
      return;
    }

    this.groupsService.searchGroups(this.filters)
      .subscribe(data => {
        if (this.filters.page === 1) {
          this.groups = data.items ?? [];
        }
        else {
          this.groups = this.groups.concat(data.items);
        }
        this.isMore = data.isMore;
      });
  }

}
