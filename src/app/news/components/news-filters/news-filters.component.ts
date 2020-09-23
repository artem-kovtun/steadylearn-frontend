import { Component, OnInit, EventEmitter, Output, Input, Inject } from '@angular/core';
import { NewsFilter } from '../../models/newsFilter.model';
import { User } from 'src/app/user/models/user.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NewsFiltersDialogModel } from '../../models/newsFiltersDialogModel.model';
import {Permission} from '../../../group/models/permission.enum';
import {PermissionsHelper} from '../../../group/helpers/permissions.helper';
import {NewsMobileMenuComponent} from '../news-mobile-menu/news-mobile-menu.component';

@Component({
  selector: 'app-news-filters',
  templateUrl: './news-filters.component.html',
  styleUrls: ['./news-filters.component.scss']
})
export class NewsFiltersComponent implements OnInit {

  @Output() onAddNews = new EventEmitter();
  @Output() onFiltersChange = new EventEmitter<NewsFilter>();
  @Input() filters: NewsFilter = new NewsFilter(1, 30);
  @Input() senders: Array<User>;
  @Input() permissions: Array<Permission> = [];

  sortOrder: string;
  dateRange = [];
  permission = Permission;

  constructor(public dialog: MatDialog,
              public permissionsHelper: PermissionsHelper) { }

  onAddNewsButtonClick() {
    this.onAddNews.emit();
  }

  onFilterButtonClick() {
    const dialog = this.dialog.open(NewsFiltersModalComponent, {
      width: '450px',
      data: {
        filters: this.filters,
        senders: this.senders
      }
    });

    dialog.afterClosed().subscribe(event => {
      if (event == null) return;
      this.onFiltersChange.emit(event);
    });
  }

  filtersChanged() {
    this.filters.order = +this.sortOrder;

    const isDateRangeNotEmpty = this.dateRange.length !== 0;
    this.filters.startDate = isDateRangeNotEmpty ? this.dateRange[0] : null;
    this.filters.endDate = isDateRangeNotEmpty ? this.dateRange[1] : null;

    this.onFiltersChange.emit(this.filters);
  }

  openMobileMenu() {
    const dialog = this.dialog.open(NewsMobileMenuComponent, {
      width: '300px',
      data: this.permissions
    });

    dialog.afterClosed().subscribe(event => {
      if (event === 'AddNews') {
        this.onAddNews.emit();
      }
      if (event === 'OpenFilters') {
        this.onFilterButtonClick();
      }
    });
  }


  ngOnInit(): void {
    this.sortOrder = this.filters.order.toString();
  }

}


@Component({
  selector: 'app-news-filters-modal',
  templateUrl: './news-filters-modal.component.html',
  styleUrls: ['./news-filters.component.scss']
})
export class NewsFiltersModalComponent implements OnInit {

  sortOrder: string;

  constructor(
    public dialogRef: MatDialogRef<NewsFiltersModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: NewsFiltersDialogModel) {}

  onOkClick(): void {
    this.data.filters.order = +this.sortOrder;
    this.dialogRef.close(this.data.filters);
  }


  disabledStartDate = (startValue: Date): boolean => {
    if (!startValue || !this.data.filters.endDate) {
      return false;
    }
    return startValue.getTime() > this.data.filters.endDate.getTime();
  }

  disabledEndDate = (endValue: Date): boolean => {
    if (!endValue || !this.data.filters.startDate) {
      return false;
    }
    return endValue.getTime() <= this.data.filters.startDate.getTime();
  }

  onStartChange(date: Date): void {
    this.data.filters.startDate = date;
  }

  onEndChange(date: Date): void {
    this.data.filters.endDate = date;
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.sortOrder = this.data.filters.order.toString();
  }



}
