import {UserGroupStatus} from '../../group/models/userGroupStatus.enum';

export class User {
    username: string;
    fullname: string;
    imageUrl: string;
    email: string;
    status: UserGroupStatus;
    isAdmin: boolean;
}
