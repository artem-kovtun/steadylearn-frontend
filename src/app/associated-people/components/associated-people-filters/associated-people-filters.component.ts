import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AssociatedPeopleFilters } from '../../models/associatedPeopleFilters.model';

@Component({
  selector: 'app-associated-people-filters',
  templateUrl: './associated-people-filters.component.html',
  styleUrls: ['./associated-people-filters.component.scss']
})
export class AssociatedPeopleFiltersComponent implements OnInit {

  statusString: string;
  orderByString: string;
  sortOrderString: string;

  constructor(
    public dialogRef: MatDialogRef<AssociatedPeopleFilters>,
    @Inject(MAT_DIALOG_DATA) public filters: AssociatedPeopleFilters) {}

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
