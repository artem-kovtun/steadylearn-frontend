import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzListModule } from 'ng-zorro-antd/list';
import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectsListComponent } from './containers/subjects-list/subjects-list.component';
import {SubjectsFiltersComponent, SubjectsFiltersModalComponent} from './components/subjects-filters/subjects-filters.component';
import { SubjectCreateEditFormComponent } from './components/subject-create-edit-form/subject-create-edit-form.component';
import { SubjectCreateEditComponent } from './containers/subject-create-edit/subject-create-edit.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { SubjectPageComponent } from './containers/subject-page/subject-page.component';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { SharedModule } from '../shared/shared.module';
import { MatMenuModule } from '@angular/material/menu';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { SubjectPersonButtonComponent } from './components/subject-person-button/subject-person-button.component';
import { SubjectFileComponent } from './components/subject-file/subject-file.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { AttachSubjectFilesComponent } from './components/attach-subject-files/attach-subject-files.component';
import { ManageSubjectPeopleComponent } from './components/manage-subject-people/manage-subject-people.component';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SubjectsListRecordComponent } from './components/subjects-list-record/subjects-list-record.component';
import { SubjectMobileMenuComponent } from './components/subject-mobile-menu/subject-mobile-menu.component';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  declarations: [
    SubjectsListComponent,
    SubjectsFiltersComponent,
    SubjectCreateEditFormComponent,
    SubjectCreateEditComponent,
    SubjectPageComponent,
    SubjectPersonButtonComponent,
    SubjectFileComponent,
    AttachSubjectFilesComponent,
    ManageSubjectPeopleComponent,
    SubjectsListRecordComponent,
    SubjectsFiltersModalComponent,
    SubjectMobileMenuComponent
  ],
  imports: [
    CommonModule,
    SubjectRoutingModule,
    NzListModule,
    NzIconModule,
    NzButtonModule,
    FormsModule,
    NzInputModule,
    NzRadioModule,
    NzFormModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzBadgeModule,
    NzMessageModule,
    NzAvatarModule,
    NzToolTipModule,
    SharedModule,
    NzSpinModule,
    NzCheckboxModule,
    InfiniteScrollModule,
    MatMenuModule,
    NzMenuModule,
    NzModalModule
  ]
})
export class SubjectModule { }
