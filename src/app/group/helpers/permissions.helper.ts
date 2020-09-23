import { Injectable } from '@angular/core';
import {Permission} from '../models/permission.enum';

@Injectable({
  providedIn: 'root'
})
export class PermissionsHelper {

  hasPermissions(permissions: Array<Permission>, allowedPermissions: Array<Permission>){
    return permissions.filter(value => allowedPermissions.includes(value)).length !== 0;
  }
}
