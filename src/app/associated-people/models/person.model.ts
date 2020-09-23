import { Subject } from 'src/app/subject/models/subject.model';

export class Person {
    id: string;
    fullname: string;
    birthdate: Date;
    phone: string;
    notes: string;
    imageUrl: string;
    image: File;
    emails: Array<string>;
    subjects: Array<Subject>;
}