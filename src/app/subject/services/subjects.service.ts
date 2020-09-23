import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubjectsFilters } from '../models/subjectsFilters.model';
import { SubjectsList } from '../models/subjectsList.model';
import { environment } from 'src/environments/environment';
import { Subject } from '../models/subject.model';

@Injectable({
    providedIn: 'root'
})
export class SubjectsService {

    constructor(private http: HttpClient) { }

    getSubjects(groupAlias: string, filters: SubjectsFilters): Observable<SubjectsList> {
        let params = new HttpParams();
        params = params.append('page', filters.page.toString());
        params = params.append('take', filters.take.toString());
        params = params.append('search', filters.search);
        params = params.append('status', filters.status.toString());
        params = params.append('orderBy', filters.orderBy.toString());
        params = params.append('order', filters.sortOrder.toString());
        return this.http.get<SubjectsList>(`${environment.APIUrl}/api/groups/${groupAlias}/subjects`, {params});
    }

    addSubject(groupAlias: string, subject: Subject): Observable<string>{
        return this.http.post<string>(`${environment.APIUrl}/api/subjects`, {
            groupAlias,
            name: subject.name,
            description: subject.description
        });
    }

    getSubject(id: string): Observable<Subject> {
        return this.http.get<Subject>(`${environment.APIUrl}/api/subjects/${id}`);
    }

    updateSubject(subject: Subject) {
        return this.http.put(`${environment.APIUrl}/api/subjects`, {
            id: subject.id,
            name: subject.name,
            description: subject.description,
            isActive: subject.isActive
        });
    }

    updateSubjectFiles(subjectId: string, files: Array<string>) {
      return this.http.put(`${environment.APIUrl}/api/subjects/files`, {
        subjectId,
        files,
      });
    }

  updateSubjectPeople(subjectId: string, people: Array<string>) {
    return this.http.put(`${environment.APIUrl}/api/subjects/people`, {
      subjectId,
      people,
    });
  }

    deleteSubject(id: string) {
        return this.http.delete(`${environment.APIUrl}/api/subjects/${id}`);
    }
}
