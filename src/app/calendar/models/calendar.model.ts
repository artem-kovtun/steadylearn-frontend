import { Event } from './event.model';
import { CalendarDateMetadata } from './calendarDateMetadata.model';

export class Calendar {
    dateEvents: Array<Event>;
    eventsMetadata: CalendarDateMetadata[] = [];
}
