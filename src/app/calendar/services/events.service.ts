import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Calendar } from '../models/calendar.model';
import { EventSeverity } from '../models/eventSeverity.enum';
import { Event } from '../models/event.model';
import {environment} from '../../../environments/environment';
import {DayEvents} from '../models/dayEvents.model';

@Injectable({
    providedIn: 'root'
})
export class EventsService {

    constructor(private http: HttpClient) { }

    private static yyyymmddDate(date: Date) {
        const month = date.getMonth() + 1;
        const day = date.getDate();

        return [date.getFullYear(), '-', (month > 9 ? '' : '0') + month, '-', (day > 9 ? '' : '0') + day].join('');
    }

    getEvents(groupAlias: string, date: Date): Observable<Calendar> {
        let params = new HttpParams();
        params = params.append('groupAlias', groupAlias);
        params = params.append('date', EventsService.yyyymmddDate(date));
        return this.http.get<Calendar>( `${environment.APIUrl}/api/events`, {params});
    }

    getUpcomingEvents(groupAlias: string): Observable<Array<DayEvents>> {
      let params = new HttpParams();
      params = params.append('groupAlias', groupAlias);
      return this.http.get<Array<DayEvents>>( `${environment.APIUrl}/api/events/upcoming`, {params});
    }

    deleteEvent(id: string) {
        return this.http.delete(`${environment.APIUrl}/api/events/${id}`);
    }

    addEvent(date: Date, groupAlias: string, message: string, severity: EventSeverity) {
        return this.http.post(`${environment.APIUrl}/api/events`, {
            date: EventsService.yyyymmddDate(date),
            groupAlias,
            message,
            severity
        });
    }

    updateEvent(event: Event) {
        return this.http.put(`${environment.APIUrl}/api/events`, event);
    }
}
