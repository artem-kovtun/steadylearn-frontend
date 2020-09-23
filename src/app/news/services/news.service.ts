import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../models/news.model';
import { GetNewResponse } from '../models/getNewsResponse.model';
import { NewsFilter } from '../models/newsFilter.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class NewsService {

    constructor(private http: HttpClient) { }

    getNews(groupAlias: string, filter: NewsFilter): Observable<GetNewResponse> {
        let params = new HttpParams();
        params = params.append('page', filter.page.toString());
        params = params.append('take', filter.take.toString());
        params = params.append('search', filter.search)
        params = params.append('order', filter.order.toString())

        if (filter.startDate != null){
            params = params.append('startDate', filter.startDate?.toISOString().slice(0,10))
        }
        if (filter.endDate != null){
            params = params.append('endDate', filter.endDate?.toISOString().slice(0,10))
        }
        filter.senders?.forEach(sender => {
            params = params.append('senders', sender);
        });

        return this.http.get<GetNewResponse>(`${environment.APIUrl}/api/groups/${groupAlias}/news`, {params: params});
    }

    getNewsById(id: string) : Observable<News> {
        return this.http.get<News>(`${environment.APIUrl}/api/news/${id}`);
    }

    addNews(groupAlias: string, news: News): Observable<string> {
        return this.http.post<string>(`${environment.APIUrl}/api/news`, {
            groupAlias,
            message: news.message,
            attachments: news.attachments.map(attachment => attachment.id)
        });
    }

    updateNews(news: News) {
        return this.http.put(`${environment.APIUrl}/api/news`, {
            id: news.id,
            message: news.message,
            attachments: news.attachments.map(attachment => attachment.id)
        });
    }

    deleteNews(id: string) {
        return this.http.delete(`${environment.APIUrl}/api/news/${id}`);
    }

}
