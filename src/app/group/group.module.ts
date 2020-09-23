import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingModule } from './group-routing.module';
import { JoinGroupPageComponent } from './containers/join-group-page/join-group-page.component';
import { CreateGroupPageComponent } from './containers/create-group-page/create-group-page.component';
import {SharedModule} from '../shared/shared.module';

import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzTagModule } from 'ng-zorro-antd/tag';

@NgModule({
  declarations: [JoinGroupPageComponent, CreateGroupPageComponent],
    imports: [
      CommonModule,
      GroupRoutingModule,
      SharedModule,
      NzCheckboxModule,
      InfiniteScrollModule,
      NzAvatarModule,
      NzListModule,
      NzIconModule,
      NzButtonModule,
      FormsModule,
      ReactiveFormsModule,
      NzInputModule,
      NzRadioModule,
      NzFormModule,
      NzToolTipModule,
      NzBadgeModule,
      NzTagModule
    ]
})
export class GroupModule { }
