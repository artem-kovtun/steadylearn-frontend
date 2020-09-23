import { ScheduleRow } from './scheduleRow.model';

export class Schedule {

    constructor(){
        this.isActive = false;
        this.isNewlyCreated = true;
        this.subjects = [new ScheduleRow(1)]
    }

    id: string;
    name: string;
    isActive: boolean;
    subjects: ScheduleRow[];
    isNewlyCreated: boolean = false;
    isCollapsed: boolean = false;
}