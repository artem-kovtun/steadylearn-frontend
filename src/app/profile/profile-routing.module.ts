import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfilePageComponent} from './containers/profile-page/profile-page.component';
import {ProfilePreviewPageComponent} from './containers/profile-preview-page/profile-preview-page.component';


const routes: Routes = [
  {
    path: 'profile',
    component: ProfilePageComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    component: ProfilePreviewPageComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
