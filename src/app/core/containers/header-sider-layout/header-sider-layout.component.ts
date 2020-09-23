import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {PermissionService} from '../../../permission/services/PermissionService';
import {Permission} from '../../../group/models/permission.enum';
import {GroupsService} from '../../../group/services/groups.service';
import {Group} from '../../../group/models/group.model';
import {UserGroupStatus} from '../../../group/models/userGroupStatus.enum';

@Component({
  selector: 'app-header-sider-layout',
  templateUrl: './header-sider-layout.component.html',
  styleUrls: ['./header-sider-layout.component.scss']
})
export class HeaderSiderLayoutComponent implements OnInit {

  isSiderVisible = false;
  groupAlias: string;
  permissions: Array<Permission> = [];
  group: Group;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private permissionService: PermissionService,
              private groupService: GroupsService) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd){
        this.isSiderVisible = false;
      }
    });
    this.groupAlias = this.activatedRoute.snapshot.params.alias;
  }

  toggleMenuSider() {
    this.isSiderVisible = !this.isSiderVisible;
  }

  ngOnInit(): void {
    this.groupService.getGroup(this.groupAlias)
      .subscribe(group => {
        if (group?.status !== UserGroupStatus.Active) {
          this.isSiderVisible = false;
          return;
        }
        this.group = group;
        this.permissionService.getUserGroupPermissionPools(this.groupAlias)
          .subscribe(permissions => this.permissions = permissions);
      });

  }
}
