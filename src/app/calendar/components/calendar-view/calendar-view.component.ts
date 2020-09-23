import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NzCalendarMode } from 'ng-zorro-antd/calendar';
import { CalendarDateMetadata } from '../../models/calendarDateMetadata.model';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss']
})
export class CalendarViewComponent implements OnInit {

  date : Date;
  mode: NzCalendarMode = 'month';
  monthValue: string;
  yearValue: string;

  @Output() onDateSelected = new EventEmitter<Date>();
  @Input() calendarMetadata: CalendarDateMetadata[];

  constructor() {
    this.date = new Date();
    this.monthValue = this.date.getMonth().toString();
    this.yearValue = this.date.getFullYear().toString();
  }

  yyyymmddDate(date: Date): string {
    const formattedDate = new Date(date);

    const mm = formattedDate.getMonth() + 1;
    const dd = formattedDate.getDate();

    return [formattedDate.getFullYear(), '-', (mm > 9 ? '' : '0') + mm, '-', (dd > 9 ? '' : '0') + dd ].join('');
  }


  getEventMetadataLabel(eventsQuantity: number) {
    if (eventsQuantity < 1) return;

    if (eventsQuantity > 1){
      return `${eventsQuantity} events`;
    }

    return `${eventsQuantity} event`;
  }

  getDateMetadata(date: Date) : CalendarDateMetadata{
    return this.calendarMetadata.find(c => c.date === date);
  }

  monthChange() {
    this.date = new Date(this.date.getFullYear(), parseInt(this.monthValue), this.date.getDate());
    this.onDateSelected.emit(this.date);
  }

  yearChange() {
    this.date = new Date(parseInt(this.yearValue), this.date.getMonth(), this.date.getDate());
    this.onDateSelected.emit(this.date);
  }

  dateChange() {
    this.monthValue = this.date.getMonth().toString();
    this.yearValue = this.date.getFullYear().toString();
    this.onDateSelected.emit(this.date);
  }

  ngOnInit(): void { }

}
