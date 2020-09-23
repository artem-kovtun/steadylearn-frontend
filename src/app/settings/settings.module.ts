import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './containers/settings/settings.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    NzTabsModule,
    SharedModule
  ]
})
export class SettingsModule { }
