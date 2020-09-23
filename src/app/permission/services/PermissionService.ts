import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';
import {Permission} from '../../group/models/permission.enum';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(private http: HttpClient) { }

  getUserGroupPermissionPools(alias: string, username?: string): Observable<Array<Permission>> {
    let params = new HttpParams();
    params = params.append('alias', alias);
    if (username !== undefined) params = params.append('username', username);
    return this.http.get<Array<Permission>>(`${environment.APIUrl}/api/permissions/user-pools`, {params});
  }

  getPermissions(): Observable<Array<Permission>> {
    return this.http.get<Array<Permission>>(`${environment.APIUrl}/api/permissions/pools`);
  }

  savePermissions(alias: string, username: string, permissions: Permission[]) {
    return this.http.post(`${environment.APIUrl}/api/permissions/user-pools`, {groupAlias: alias, username, permissionPools: permissions});
  }
}
