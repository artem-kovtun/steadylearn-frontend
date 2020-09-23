import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { CalendarPageComponent } from './containers/calendar-page/calendar-page.component';

const routes: Routes = [
    {
        path: '',
        component: CalendarPageComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CalendarRoutingModule { }