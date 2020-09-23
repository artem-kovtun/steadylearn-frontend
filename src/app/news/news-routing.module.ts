import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { NewsListComponent } from './containers/news-list/news-list.component';
import { CreateEditNewsComponent } from './containers/create-edit-news/create-edit-news.component';

const routes: Routes = [
    {
        path: '',
        component: NewsListComponent
    },
    {
        path: 'new',
        component: CreateEditNewsComponent
    },
    {
        path: ':newsId',
        component: CreateEditNewsComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewsRoutingModule { }