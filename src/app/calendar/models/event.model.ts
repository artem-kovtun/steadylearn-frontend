import { EventSeverity } from './eventSeverity.enum';

export class Event {
    constructor(){
        this.severity = EventSeverity.Low;
    }

    id: string;
    message: string;
    severity: EventSeverity;
}
