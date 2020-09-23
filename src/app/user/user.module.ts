import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { UserRoutingModule } from './user-routing.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { SignupPageComponent } from './containers/signup-page/signup-page.component';
import { UserProfilePageComponent } from './containers/user-profile-page/user-profile-page.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  declarations: [
    SignupPageComponent,
    UserProfilePageComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NzAvatarModule,
    NzButtonModule,
    NzSwitchModule,
    NzIconModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzGridModule,
    NzInputModule,
    NzCheckboxModule,
    NzDividerModule
  ]
})
export class UserModule { }
