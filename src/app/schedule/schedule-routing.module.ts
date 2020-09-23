import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { SchedulesComponent } from './containers/schedules/schedules.component';

const routes: Routes = [
    {
        path: '',
        component: SchedulesComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ScheduleRoutingModule { }