import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulesComponent } from './containers/schedules/schedules.component';
import { ScheduleRoutingModule } from './schedule-routing.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import {SchedulesFiltersComponent, SchedulesFiltersModalComponent} from './components/schedules-filters/schedules-filters.component';
import { ScheduleMobileMenuComponent } from './components/schedule-mobile-menu/schedule-mobile-menu.component';
import {SharedModule} from '../shared/shared.module';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzListModule } from 'ng-zorro-antd/list';

@NgModule({
  declarations: [
    SchedulesComponent,
    ScheduleComponent,
    SchedulesFiltersComponent,
    SchedulesFiltersModalComponent,
    ScheduleMobileMenuComponent
  ],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    NzTableModule,
    NzInputModule,
    FormsModule,
    NzPageHeaderModule,
    NzButtonModule,
    NzTagModule,
    NzRadioModule,
    NzIconModule,
    NzModalModule,
    SharedModule,
    NzCarouselModule,
    NzListModule
  ]
})
export class ScheduleModule { }
