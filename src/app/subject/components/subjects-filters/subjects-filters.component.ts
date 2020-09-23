import {Component, OnInit, Input, Output, EventEmitter, Inject} from '@angular/core';
import { SubjectsFilters } from '../../models/subjectsFilters.model';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Permission} from '../../../group/models/permission.enum';
import {PermissionsHelper} from '../../../group/helpers/permissions.helper';
import {SubjectMobileMenuComponent} from '../subject-mobile-menu/subject-mobile-menu.component';

@Component({
  selector: 'app-subjects-filters',
  templateUrl: './subjects-filters.component.html',
  styleUrls: ['./subjects-filters.component.scss']
})
export class SubjectsFiltersComponent implements OnInit {

  @Output() onFiltersChange = new EventEmitter<SubjectsFilters>();
  @Output() onAddNewSubject = new EventEmitter();
  @Input() filters: SubjectsFilters;
  @Input() permissions: Array<Permission>;

  permission = Permission;

  constructor(public dialog: MatDialog,
              public permissionsHelper: PermissionsHelper) { }

  filtersChanged() {
    this.onFiltersChange.emit(this.filters);
  }

  onFilterButtonClick() {
    const dialog = this.dialog.open(SubjectsFiltersModalComponent, {
      width: '450px',
      data: this.filters
    });

    dialog.afterClosed().subscribe(event => {
      if (event == null) return;
      this.onFiltersChange.emit(event);
    });
  }

  onAddNewSubjectClick(){
    this.onAddNewSubject.emit();
  }

  openMobileMenu() {
    const dialog = this.dialog.open(SubjectMobileMenuComponent, {
      width: '300px',
      data: this.permissions
    });

    dialog.afterClosed().subscribe(event => {
      if (event === 'AddSubject') {
        this.onAddNewSubject.emit();
      }
      if (event === 'OpenFilters') {
        this.onFilterButtonClick();
      }
    });
  }

  ngOnInit(): void {

  }

}

@Component({
  selector: 'app-subjects-filters-modal',
  templateUrl: './subjects-filters-modal.component.html',
  styleUrls: ['./subjects-filters.component.scss']
})
export class SubjectsFiltersModalComponent {

  statusString: string;
  orderByString: string;
  sortOrderString: string;

  constructor(
    public dialogRef: MatDialogRef<SubjectsFiltersModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SubjectsFilters) {}

  onOkClick(): void {
    this.data.status = +this.statusString;
    this.data.orderBy = +this.orderByString;
    this.data.sortOrder = +this.sortOrderString;

    this.dialogRef.close(this.data);
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.statusString = this.data.status.toString();
    this.orderByString = this.data.orderBy.toString();
    this.sortOrderString = this.data.sortOrder.toString();
  }

}

