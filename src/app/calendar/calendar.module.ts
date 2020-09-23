import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarRoutingModule } from './calendar-routing.module';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule } from '@angular/forms';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CalendarSiderComponent } from './components/calendar-sider/calendar-sider.component';
import { CalendarPageComponent } from './containers/calendar-page/calendar-page.component';
import { CalendarViewComponent } from './components/calendar-view/calendar-view.component';
import { CreateEditEventFormComponent } from './components/create-edit-event-form/create-edit-event-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EventTileComponent } from './components/event-tile/event-tile.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { MatMenuModule } from '@angular/material/menu';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { DateSwitcherComponent } from './components/date-switcher/date-switcher.component';
import {SharedModule} from '../shared/shared.module';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  declarations: [
    CalendarViewComponent,
    CalendarSiderComponent,
    CalendarPageComponent,
    CreateEditEventFormComponent,
    EventTileComponent,
    DateSwitcherComponent
  ],
  exports: [
    EventTileComponent
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    NzInputModule,
    NzListModule,
    NzTableModule,
    NzCalendarModule,
    NzBadgeModule,
    NzSelectModule,
    FormsModule,
    NzRadioModule,
    NzButtonModule,
    NzIconModule,
    MatDialogModule,
    NzDropDownModule,
    MatMenuModule,
    NzTagModule,
    NzDatePickerModule,
    SharedModule,
    NzModalModule
  ]
})
export class CalendarModule { }
