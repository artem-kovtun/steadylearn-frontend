import { Component, OnInit } from '@angular/core';
import {Group} from '../../../group/models/group.model';
import {PageLoadProperties} from '../../../core/models/pageLoadProperties';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupsService} from '../../../group/services/groups.service';
import {PermissionService} from '../../../permission/services/PermissionService';
import {UserGroupStatus} from '../../../group/models/userGroupStatus.enum';
import {PermissionsHelper} from '../../../group/helpers/permissions.helper';
import {Permission} from '../../../group/models/permission.enum';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  pageLoadProperties = new PageLoadProperties(false);
  groupAlias: string;
  group: Group;
  Permission = Permission;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private groupsService: GroupsService,
              private permissionService: PermissionService,
              private permissionsHelper: PermissionsHelper) {
    this.groupAlias = this.activatedRoute.snapshot.params.alias;
  }

  ngOnInit(): void {
    this.groupsService.getGroup(this.groupAlias)
      .subscribe(group => {
        if (group?.status !== UserGroupStatus.Active) {
          this.pageLoadProperties.AccessDenied();
          this.pageLoadProperties.DataLoaded();
        }
        else {
          this.group = group;
          this.permissionService.getUserGroupPermissionPools(this.groupAlias)
            .subscribe(permissions => {
              if (this.permissionsHelper.hasPermissions(permissions, [Permission.Admin])) {
                this.pageLoadProperties.AccessAllowed();
              }
              this.pageLoadProperties.DataLoaded();
            });
        }
      });
  }

}
