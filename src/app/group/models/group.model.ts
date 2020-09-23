import {UserGroupStatus} from './userGroupStatus.enum';

export class Group {
    imageUrl: string;
    name: string;
    alias: string;
    isPublic: boolean;
    status?: UserGroupStatus;
    isAdmin: boolean;
}
