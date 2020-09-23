import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { FilesListPageComponent } from './containers/files-list-page/files-list-page.component';

const routes: Routes = [
    {
        path: '',
        component: FilesListPageComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FileRoutingModule { }