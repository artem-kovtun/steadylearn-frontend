import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FilesFilter} from '../../models/filesFilters.model';

@Component({
  selector: 'app-files-filter',
  templateUrl: './files-filters.component.html',
  styleUrls: ['./files-filters.component.scss']
})
export class FilesFiltersComponent implements OnInit {

  statusString: string;
  orderByString: string;
  sortOrderString: string;

  constructor(public dialogRef: MatDialogRef<FilesFiltersComponent>,
              @Inject(MAT_DIALOG_DATA) public filters: FilesFilter) { }

  ngOnInit(): void {
    this.statusString = this.filters.status.toString();
    this.orderByString = this.filters.orderBy.toString();
    this.sortOrderString = this.filters.sortOrder.toString();
  }

  onApplyClick(){
    this.filters.status = +this.statusString;
    this.filters.orderBy = +this.orderByString;
    this.filters.sortOrder = +this.sortOrderString;

    this.dialogRef.close(this.filters);
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
