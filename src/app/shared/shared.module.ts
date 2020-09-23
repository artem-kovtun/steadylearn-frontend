import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './components/section/section.component';
import { LabeledFieldComponent } from './components/labeled-field/labeled-field.component';
import { ShadowContainerComponent } from './components/shadow-container/shadow-container.component';
import { GroupBreadcrumbComponent } from './components/group-breadcrumb/group-breadcrumb.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [SectionComponent, LabeledFieldComponent, ShadowContainerComponent, GroupBreadcrumbComponent, AccessDeniedComponent],
  imports: [
    CommonModule,
    NzBreadCrumbModule,
    NzButtonModule,
    NzIconModule,
    RouterModule
  ],
  exports: [
    SectionComponent,
    LabeledFieldComponent,
    ShadowContainerComponent,
    GroupBreadcrumbComponent,
    AccessDeniedComponent
  ]
})
export class SharedModule { }
