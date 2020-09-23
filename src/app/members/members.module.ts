import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { MembersPageComponent } from './containers/members-page/members-page.component';
import { MembersHeaderComponent } from './components/members-header/members-header.component';
import { MembersListComponent } from './components/members-list/members-list.component';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { MatMenuModule } from '@angular/material/menu';
import { MembersListRecordComponent } from './components/members-list-record/members-list-record.component';
import { MemberViewPageComponent } from './containers/member-view-page/member-view-page.component';
import { AddMembersComponent } from './components/add-members/add-members.component';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { ManagePermissionsComponent } from './components/manage-permissions/manage-permissions.component';
import { SharedModule } from '../shared/shared.module';
import { MembersMobileMenuComponent } from './components/members-mobile-menu/members-mobile-menu.component';


@NgModule({
  declarations: [MembersPageComponent, MembersHeaderComponent, MembersListComponent, MembersListRecordComponent, MemberViewPageComponent, AddMembersComponent, ManagePermissionsComponent, MembersMobileMenuComponent],
    imports: [
        CommonModule,
        MembersRoutingModule,
        NzInputModule,
        NzButtonModule,
        NzDatePickerModule,
        FormsModule,
        ReactiveFormsModule,
        NzSelectModule,
        NzRadioModule,
        NzIconModule,
        NzModalModule,
        InfiniteScrollModule,
        NzListModule,
        NzMenuModule,
        NzFormModule,
        NzAvatarModule,
        NzBadgeModule,
        MatMenuModule,
        NzCheckboxModule,
        SharedModule
    ]
})
export class MembersModule { }
