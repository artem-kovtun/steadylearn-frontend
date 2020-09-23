import {File} from '../../file/models/file.model';
import {Person} from '../../associated-people/models/person.model';

export class Subject {
    id: string;
    name: string;
    description: string;
    isActive: boolean;
    files: Array<File>;
    people: Array<Person>;
}
