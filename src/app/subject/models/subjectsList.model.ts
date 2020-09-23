import { Subject } from './subject.model';

export class SubjectsList {
    constructor(){
        this.subjects = [];
        this.isMore = false;
    }

    subjects: Array<Subject>;
    isMore: boolean;
}