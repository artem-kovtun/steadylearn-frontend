import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './containers/news-list/news-list.component';
import { NewsRoutingModule } from './news-routing.module';
import { NewsFiltersComponent, NewsFiltersModalComponent } from './components/news-filters/news-filters.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { CreateEditNewsModalComponent } from './components/create-edit-news-modal/create-edit-news-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NgxFileDropModule } from 'ngx-file-drop';
import { CreateEditNewsComponent } from './containers/create-edit-news/create-edit-news.component';
import { CreateEditNewsFormComponent } from './components/create-edit-news-form/create-edit-news-form.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import {SharedModule} from '../shared/shared.module';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NewsMobileMenuComponent } from './components/news-mobile-menu/news-mobile-menu.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

@NgModule({
  declarations: [
    NewsListComponent,
    NewsFiltersComponent,
    NewsFiltersModalComponent,
    NewsCardComponent,
    CreateEditNewsModalComponent, CreateEditNewsComponent, CreateEditNewsFormComponent, NewsMobileMenuComponent
  ],
  exports: [
    NewsCardComponent
  ],
    imports: [
        CommonModule,
        NewsRoutingModule,
        NzInputModule,
        NzButtonModule,
        NzCardModule,
        NzDatePickerModule,
        FormsModule,
        ReactiveFormsModule,
        NzSelectModule,
        NzRadioModule,
        NzIconModule,
        NzModalModule,
        InfiniteScrollModule,
        NzBackTopModule,
        MatDialogModule,
        MatMenuModule,
        NzListModule,
        NzMenuModule,
        NzPopconfirmModule,
        NzDropDownModule,
        NzFormModule,
        NgxFileDropModule,
        NzSpinModule,
        SharedModule,
        NzTabsModule,
        NzBreadCrumbModule
    ]
})
export class NewsModule { }
