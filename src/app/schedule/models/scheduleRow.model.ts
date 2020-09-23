export class ScheduleRow {
    constructor(order: number){
        this.order = order;
    }

    order: number;
    time: string;
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
}