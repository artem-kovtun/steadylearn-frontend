import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group } from '../models/group.model';
import {environment} from '../../../environments/environment';
import {Permission} from '../models/permission.enum';
import {AliasValidation} from '../models/aliasValidation.model';
import {SearchGroupFilter} from '../models/searchGroupFilter.model';
import {ItemsList} from '../../shared/models/itemsList.model';

@Injectable({
    providedIn: 'root'
})
export class GroupsService {

    constructor(private http: HttpClient) { }

    getUserGroups(): Observable<Array<Group>> {
        return this.http.get<Array<Group>>(`${environment.APIUrl}/api/groups`);
    }

    getGroup(alias: string): Observable<Group> {
        return this.http.get<Group>(`${environment.APIUrl}/api/groups/${alias}`);
    }

    createGroup(group: Group) {
        return this.http.post(`${environment.APIUrl}/api/groups`, {
          alias: group.alias,
          name: group.name,
          isPublic: group.isPublic
        });
    }

    getUserGroupPermissionPools(alias: string): Observable<Array<Permission>> {
      return this.http.get<Array<Permission>>(`${environment.APIUrl}/api/groups/${alias}/user-permission-pool`);
    }

    validateGroupAlias(alias: string): Observable<AliasValidation> {
      return this.http.get<AliasValidation>(`${environment.APIUrl}/api/groups/validate?alias=${alias}`);
    }

    searchGroups(filters: SearchGroupFilter): Observable<ItemsList<Group>> {
      let params = new HttpParams();
      params = params.append('page', filters.page.toString());
      params = params.append('take', filters.take.toString());
      params = params.append('search', filters.search);
      return this.http.get<ItemsList<Group>>(`${environment.APIUrl}/api/groups/search`, {params});
    }

    joinGroup(groupAlias: string) {
      return this.http.post(`${environment.APIUrl}/api/groups/join`, {groupAlias});
    }
}
