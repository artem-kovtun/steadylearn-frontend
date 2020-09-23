import { Subscription } from 'rxjs';

export class UploadFile {

    constructor(key: string, name: string, request: Subscription, id: string = null) {
        this.id = id;
        this.key = key;
        this.name = name;
        this.request = request;
    }

    id: string;
    name: string;
    key: string;
    request: Subscription;
}
