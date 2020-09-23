import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupPageComponent } from './containers/signup-page/signup-page.component';
import { UserProfilePageComponent } from './containers/user-profile-page/user-profile-page.component';


const routes: Routes = [
    {
        path: 'signup',
        component: SignupPageComponent
    },
    {
        path: 'profile',
        component: UserProfilePageComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
