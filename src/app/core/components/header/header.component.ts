import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GroupsService } from 'src/app/group/services/groups.service';
import { Group } from 'src/app/group/models/group.model';
import {User} from '../../../user/models/user.model';
import {UsersService} from '../../../user/services/users.service';
import {StringTools} from '../../../shared/tools/string.tool';
import {AuthService} from '../../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser: User = new User();

  @Output() onSiderToggle = new EventEmitter();
  @Input() group: Group;

  toggleSider() {
    this.onSiderToggle.emit();
  }

  constructor(private router: Router,
              private authService: AuthService,
              private usersService: UsersService,
              public stringTools: StringTools) {

  }

  logoutUser() {
    this.authService.logout().subscribe(_ => this.router.navigate(['/', 'login']));
  }

  ngOnInit(): void {
    this.usersService.WhoIAm()
      .subscribe(user => this.currentUser = user);
  }

}
