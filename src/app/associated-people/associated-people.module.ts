import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssociatedPeopleRoutingModule } from './associated-people-routing.module';
import { AssociatedPeoplePageComponent } from './containers/associated-people-page/associated-people-page.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../shared/shared.module';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { AssociatedPersonPageComponent } from './containers/associated-person-page/associated-person-page.component';
import { AssociatedPeopleFiltersComponent } from './components/associated-people-filters/associated-people-filters.component';
import { ClipboardModule } from 'ngx-clipboard';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { PersonSubjectComponent } from './components/person-subject/person-subject.component';
import { ManageSubjectsComponent } from './components/manage-subjects/manage-subjects.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PeopleMobileMenuComponent } from './components/people-mobile-menu/people-mobile-menu.component';

@NgModule({
  declarations: [AssociatedPeoplePageComponent, AssociatedPersonPageComponent, AssociatedPeopleFiltersComponent, PersonSubjectComponent, ManageSubjectsComponent, PeopleMobileMenuComponent],
  imports: [
    CommonModule,
    AssociatedPeopleRoutingModule,
    NzListModule,
    NzCheckboxModule,
    NzIconModule,
    NzButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    NzRadioModule,
    NzSelectModule,
    NzSpinModule,
    NzAvatarModule,
    MatDialogModule,
    SharedModule,
    NzToolTipModule,
    ClipboardModule,
    NzMessageModule,
    NzFormModule,
    NzDatePickerModule,
    InfiniteScrollModule,
    MatMenuModule,
    NzMenuModule
  ]
})
export class AssociatedPeopleModule { }
