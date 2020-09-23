import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {CalendarDateMetadata} from '../../models/calendarDateMetadata.model';
import {EventSeverity} from '../../models/eventSeverity.enum';
import {StringTools} from '../../../shared/tools/string.tool';

@Component({
  selector: 'app-date-switcher',
  templateUrl: './date-switcher.component.html',
  styleUrls: ['./date-switcher.component.scss']
})
export class DateSwitcherComponent implements OnInit {

  @Input() date: Date;
  @Output() onDateChange = new EventEmitter<Date>();
  @Input() calendarMetadata: CalendarDateMetadata[] = [];

  previousDate(){
    this.date = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate() - 1);
    this.onDateChange.emit(this.date);
  }

  dateChange() {
    this.onDateChange.emit(this.date);
  }

  nextDate() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate() + 1);
    this.onDateChange.emit(this.date);
  }

  hasEventSeverity(date: Date, severity: EventSeverity): boolean {
    const dateMetadata = this.calendarMetadata.filter(cm => cm.date.toString().substring(0, 10) === this.stringTools.yyyymmddDate(date))[0];
    if (dateMetadata === undefined) return false;

    switch (severity) {
      case EventSeverity.High:
        return dateMetadata.high > 0;
      case EventSeverity.Medium:
        return dateMetadata.medium > 0;
      case EventSeverity.Low:
        return dateMetadata.low > 0;
    }
  }

  constructor(private stringTools: StringTools) { }

  ngOnInit(): void {
  }

}
