import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AssociatedPeopleFilters } from '../models/associatedPeopleFilters.model';
import { ItemsList } from 'src/app/shared/models/itemsList.model';

@Injectable({
    providedIn: 'root'
})
export class AssociatedPeopleService {

    constructor(private http: HttpClient) { }

    private static yyyymmddDate(date: Date) {
        if (date == null) return;

        const mm = date.getMonth() + 1;
        const dd = date.getDate();

        return [date.getFullYear(), '-', (mm > 9 ? '' : '0') + mm, '-', (dd > 9 ? '' : '0') + dd ].join('');
    }

    getPeople(groupAlias: string, filters: AssociatedPeopleFilters ) : Observable<ItemsList<Person>> {
        let params = new HttpParams();
        params = params.append('page', filters.page.toString());
        params = params.append('take', filters.take.toString());
        params = params.append('search', filters.search);
        params = params.append('status', filters.status.toString());
        params = params.append('orderBy', filters.orderBy.toString());
        params = params.append('order', filters.sortOrder.toString());
        return this.http.get<ItemsList<Person>>(`${environment.APIUrl}/api/groups/${groupAlias}/people`, {params: params});
    }

    addPerson(groupAlias: string, person: Person) : Observable<string>{
        const form = new FormData();
        form.append('groupAlias', groupAlias);
        form.append('fullname', person.fullname);
        if (person.birthdate != null) form.append('birthdate', AssociatedPeopleService.yyyymmddDate(person.birthdate));
        if (person.notes != null) form.append('notes', person.notes);
        if (person.image != null) form.append('image', person.image);
        if (person.emails != null && person.emails.length > 0) {
            person.emails.forEach(email => form.append('emails', email));
        }

        return this.http.post<string>(`${environment.APIUrl}/api/people`, form);
    }

    updatePerson(person: Person)  {
        const form = new FormData();
        form.append('id', person.id);
        form.append('fullname', person.fullname);
        if (person.birthdate != null) form.append("birthdate", AssociatedPeopleService.yyyymmddDate(new Date(person.birthdate)));
        if (person.notes != null) form.append("notes", person.notes);
        if (person.image != null) form.append("image", person.image);
        if (person.imageUrl != null) form.append("imageUrl", person.imageUrl);
        if (person.emails != null && person.emails.length > 0) {
            person.emails.forEach(email => form.append("emails", email))
        }

        return this.http.put<string>(`${environment.APIUrl}/api/people`, form);
    }

    deletePerson(id: string) {
        return this.http.delete(`${environment.APIUrl}/api/people/${id}`)
    }

    getPerson(id: string): Observable<Person> {
        return this.http.get<Person>(`${environment.APIUrl}/api/people/${id}`);
    }

  updatePersonSubjects(personId: string, subjects: Array<string>) {
    return this.http.put(`${environment.APIUrl}/api/people/subjects`, {
      personId,
      subjects,
    });
  }
}
