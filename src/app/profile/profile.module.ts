import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfilePageComponent } from './containers/profile-page/profile-page.component';
import { ProfilePreviewPageComponent } from './containers/profile-preview-page/profile-preview-page.component';

import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { GroupTileComponent } from './components/group-tile/group-tile.component';
import {SharedModule} from '../shared/shared.module';
import {NzInputModule, NzListModule} from 'ng-zorro-antd';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  declarations: [ProfilePageComponent, ProfilePreviewPageComponent, GroupTileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NzSwitchModule,
    NzIconModule,
    NzAvatarModule,
    NzButtonModule,
    SharedModule,
    NzInputModule,
    NzListModule,
    NzToolTipModule,
    NzModalModule
  ]
})
export class ProfileModule { }
