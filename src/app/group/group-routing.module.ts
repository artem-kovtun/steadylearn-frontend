import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JoinGroupPageComponent} from './containers/join-group-page/join-group-page.component';
import {CreateGroupPageComponent} from './containers/create-group-page/create-group-page.component';

const routes: Routes = [
  {
    path: 'join',
    component: JoinGroupPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: CreateGroupPageComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
