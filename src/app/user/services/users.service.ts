import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import {environment} from '../../../environments/environment';
import {UsersFilters} from '../../members/models/usersFilters.model';
import {ItemsList} from '../../shared/models/itemsList.model';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor(private http: HttpClient) { }

    WhoIAm(): Observable<User> {
        return this.http.get<User>(`${environment.APIUrl}/api/users/who-i-am`);
    }

    GetNewsSenders(groupAlias: string): Observable<Array<User>> {
        return this.http.get<Array<User>>(`${environment.APIUrl}/api/groups/${groupAlias}/news/senders`);
    }

    GetGroupMembers(groupAlias: string): Observable<Array<User>> {
      return this.http.get<Array<User>>(`${environment.APIUrl}/api/groups/${groupAlias}/members`);
    }

    SearchUsers(groupAlias: string, filters: UsersFilters): Observable<ItemsList<User>> {
      let params = new HttpParams();
      params = params.append('groupAlias', groupAlias);
      params = params.append('page', filters.page.toString());
      params = params.append('take', filters.take.toString());
      params = params.append('search', filters.search);
      return this.http.get<ItemsList<User>>(`${environment.APIUrl}/api/users/search`, { params });
    }

    AddUserToGroup(groupAlias: string, username: string) {
      return this.http.post(`${environment.APIUrl}/api/groups/users`, {groupAlias, username});
    }

    AcceptUser(groupAlias: string, username: string) {
      return this.http.post(`${environment.APIUrl}/api/groups/acceptUser`, {groupAlias, username});
    }

    RejectUser(groupAlias: string, username: string) {
      return this.http.post(`${environment.APIUrl}/api/groups/rejectUser`, {groupAlias, username});
    }

  RemoveUser(groupAlias: string, username: string) {
    return this.http.post(`${environment.APIUrl}/api/groups/removeUser`, {groupAlias, username});
  }

  BanUser(groupAlias: string, username: string) {
    return this.http.post(`${environment.APIUrl}/api/groups/banUser`, {groupAlias, username});
  }
}
