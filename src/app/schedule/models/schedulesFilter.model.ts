import { SchedulesFilterStatus } from './schedulesFilterStatus.enum';

export class SchedulesFilter {
    constructor(){
        this.search = "";
        this.status = SchedulesFilterStatus.ActiveOnly
    }

    search: string;
    status: SchedulesFilterStatus;
}