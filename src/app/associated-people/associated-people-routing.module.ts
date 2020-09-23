import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssociatedPeoplePageComponent } from './containers/associated-people-page/associated-people-page.component';
import { AssociatedPersonPageComponent } from './containers/associated-person-page/associated-person-page.component';


const routes: Routes = [
  {
    path: '',
    component: AssociatedPeoplePageComponent
  },
  {
    path: 'new',
    component: AssociatedPersonPageComponent
  },
  {
    path: ':personId',
    component: AssociatedPersonPageComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssociatedPeopleRoutingModule { }
