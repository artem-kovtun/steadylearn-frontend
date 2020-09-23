import { File } from 'src/app/file/models/file.model';

export class News {
    id: string;
    message: string;
    attachments: Array<File> = [];
    createdBy: string;
    createdOn: Date;
}