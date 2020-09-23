import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesListPageComponent } from './containers/files-list-page/files-list-page.component';
import { FileRoutingModule } from './file-routing.module';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { FilesFiltersComponent } from './components/files-filters/files-filters.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { FileMobileMenuComponent } from './components/file-mobile-menu/file-mobile-menu.component';
import { SharedModule } from '../shared/shared.module';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  declarations: [FilesListPageComponent, FilesFiltersComponent, FileMobileMenuComponent],
    imports: [
        CommonModule,
        FileRoutingModule,
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
        InfiniteScrollModule,
        NzBadgeModule,
        SharedModule,
        NzModalModule
    ]
})
export class FileModule { }
