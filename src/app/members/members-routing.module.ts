import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersPageComponent } from './containers/members-page/members-page.component';
import {MemberViewPageComponent} from './containers/member-view-page/member-view-page.component';


const routes: Routes = [
  {
    path: '',
    component: MembersPageComponent
  },
  {
    path: ':username',
    component: MemberViewPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
