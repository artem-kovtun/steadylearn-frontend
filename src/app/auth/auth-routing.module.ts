import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupPageComponent} from './containers/signup-page/signup-page.component';
import {LoginPageComponent} from './containers/login-page/login-page.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupPageComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
