import {Component, Input, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Permission} from '../../../group/models/permission.enum';
import {PermissionsHelper} from '../../../group/helpers/permissions.helper';
import {Group} from '../../../group/models/group.model';


@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.scss']
})
export class SiderComponent implements OnInit {

  Permission = Permission;
  @Input() isVisible: boolean;
  @Input() permissions: Array<Permission> = [];
  @Input() group: Group;

  constructor(private router: Router,
              public permissionsHelper: PermissionsHelper) {
  }

  ngOnInit(): void {
  }

  isActive(url: string): boolean {
    return this.router.isActive(url, false);
  }

}
