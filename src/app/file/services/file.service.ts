import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FilesFilter } from '../models/filesFilters.model';
import { SubjectsList } from 'src/app/subject/models/subjectsList.model';
import { ItemsList } from 'src/app/shared/models/itemsList.model';
import { File as FileModel } from '../models/file.model';

@Injectable({
    providedIn: 'root'
  })
export class FileService {

    constructor(private http: HttpClient) { }

    uploadFile(groupAlias: string, file: File)  {
        const form = new FormData();
        form.append('groupAlias', groupAlias);
        form.append('file', file);

        const request = new HttpRequest('POST', `${environment.APIUrl}/api/files`, form, {
          reportProgress: true,
          responseType: 'json'
        });

        return this.http.request(request);
    }

    downloadFile(id: string): Observable<Blob> {
        return this.http.get(`${environment.APIUrl}/api/files/${id}/download`, {
          responseType: 'blob'
        });
    }

    deleteFile(id: string) {
      return this.http.delete(`${environment.APIUrl}/api/files/${id}`);
    }

    getGroupFiles(groupAlias: string, filters: FilesFilter): Observable<ItemsList<FileModel>> {
      let params = new HttpParams();
      params = params.append('page', filters.page.toString());
      params = params.append('take', filters.take.toString());
      params = params.append('search', filters.search);
      params = params.append('status', filters.status.toString());
      params = params.append('orderBy', filters.orderBy.toString());
      params = params.append('order', filters.sortOrder.toString());
      return this.http.get<ItemsList<FileModel>>(`${environment.APIUrl}/api/groups/${groupAlias}/files`, {params});
    }
}
