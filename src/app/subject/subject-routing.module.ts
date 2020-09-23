import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectsListComponent } from './containers/subjects-list/subjects-list.component';
import { SubjectCreateEditComponent } from './containers/subject-create-edit/subject-create-edit.component';
import { SubjectPageComponent } from './containers/subject-page/subject-page.component';


const routes: Routes = [
  {
      path: '',
      component: SubjectsListComponent
  },
  {
      path: 'new',
      component: SubjectCreateEditComponent
  },
  {
    path: ':subjectId/edit',
    component: SubjectCreateEditComponent
  },
  {
    path: ':subjectId',
    component: SubjectPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }
