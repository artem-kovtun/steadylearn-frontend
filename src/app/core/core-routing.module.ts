import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderSiderLayoutComponent } from './containers/header-sider-layout/header-sider-layout.component';
import { NoLayoutComponent } from './containers/no-layout/no-layout.component';
import {AuthGuard} from '../auth/guards/auth.guard';
import {HeaderLayoutComponent} from './containers/header-layout/header-layout.component';


const routes: Routes = [
  {
    path: '',
    component: HeaderLayoutComponent,
    children: [
      {
        path: 'group',
        loadChildren: '../group/group.module#GroupModule',
        canActivate: [AuthGuard]
      },
      {
        path: '',
        loadChildren: '../profile/profile.module#ProfileModule',
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: '',
    component: NoLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: '../auth/auth.module#AuthModule'
      },
    ]
  },
  {
    path: ':alias',
    component: HeaderSiderLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: '../home/home.module#HomeModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'news',
        loadChildren: '../news/news.module#NewsModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'schedule',
        loadChildren: '../schedule/schedule.module#ScheduleModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'calendar',
        loadChildren: '../calendar/calendar.module#CalendarModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'subjects',
        loadChildren: '../subject/subject.module#SubjectModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'members',
        loadChildren: '../members/members.module#MembersModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'associated-people',
        loadChildren: '../associated-people/associated-people.module#AssociatedPeopleModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'files',
        loadChildren: '../file/file.module#FileModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'settings',
        loadChildren: '../settings/settings.module#SettingsModule',
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
