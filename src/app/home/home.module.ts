import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDashboardComponent } from './containers/home-dashboard/home-dashboard.component';
import { HomeRoutingModule } from './home-routing.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ClockComponent } from './components/clock/clock.component';
import {SharedModule} from '../shared/shared.module';
import {CalendarModule} from '../calendar/calendar.module';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import {NewsModule} from '../news/news.module';

@NgModule({
  declarations: [
    HomeDashboardComponent,
    ClockComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzIconModule,
    SharedModule,
    NzBadgeModule,
    CalendarModule,
    NewsModule
  ]
})
export class HomeModule { }
