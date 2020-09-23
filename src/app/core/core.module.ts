import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoLayoutComponent } from './containers/no-layout/no-layout.component';
import { HeaderSiderLayoutComponent } from './containers/header-sider-layout/header-sider-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SiderComponent } from './components/sider/sider.component';
import { CoreRoutingModule } from './core-routing.module';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { HeaderLayoutComponent } from './containers/header-layout/header-layout.component';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  declarations: [
    NoLayoutComponent,
    HeaderSiderLayoutComponent,
    HeaderComponent,
    SiderComponent,
    HeaderLayoutComponent
  ],
    imports: [
        CommonModule,
        NzSwitchModule,
        NzLayoutModule,
        NzMenuModule,
        NzDropDownModule,
        NzButtonModule,
        NzIconModule,
        BrowserAnimationsModule,
        NzAvatarModule,
        CoreRoutingModule,
        NzToolTipModule
    ]
})
export class CoreModule { }
