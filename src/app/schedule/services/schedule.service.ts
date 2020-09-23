import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Schedule } from '../models/schedule.model';
import { SchedulesList } from '../models/schedulesList.model';
import { SchedulesFilter } from '../models/schedulesFilter.model';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ScheduleService {

    constructor(private http: HttpClient) { }

    getSchedules(groupAlias: string, filters: SchedulesFilter): Observable<SchedulesList> {
        let params = new HttpParams();
        params = params.append('search', filters.search);
        params = params.append('status', filters.status.toString());
        return this.http.get<SchedulesList>(`${environment.APIUrl}/api/groups/${groupAlias}/schedules`,{params});
    }

    addSchedule(groupAlias: string, schedule: Schedule) {
        return this.http.post(`${environment.APIUrl}/api/schedules`, {
            name: schedule.name,
            groupAlias,
            subjects: schedule.subjects
        });
    }

    updateSchedule(schedule: Schedule) {
        return this.http.put(`${environment.APIUrl}/api/schedules`, schedule);
    }

    deleteSchedule(id: string) {
        return this.http.delete(`${environment.APIUrl}/api/schedules/${id}`);
    }

    toggleScheduleActiveStatus(id: string) {
        return this.http.post(`${environment.APIUrl}/api/schedules/${id}/toggleActiveStatus`, {});
    }
}
