import {Component, Inject, OnInit} from '@angular/core';
import {AssociatedPeopleFilters} from '../../../associated-people/models/associatedPeopleFilters.model';
import {Person} from '../../../associated-people/models/person.model';
import {SubjectsService} from '../../services/subjects.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ManageSubjectItemsModalModel} from '../../models/manageSubjectItemsModal.model';
import {AssociatedPeopleService} from '../../../associated-people/services/associatedPeople.service';

@Component({
  selector: 'app-manage-subject-people',
  templateUrl: './manage-subject-people.component.html',
  styleUrls: ['./manage-subject-people.component.scss']
})
export class ManageSubjectPeopleComponent implements OnInit {

  filters: AssociatedPeopleFilters;
  people: Array<Person> = [];
  isMore: boolean;
  subjectPeople: Array<string> = [];
  untouchedPeople: Array<string> = [];

  constructor(private subjectService: SubjectsService,
              private peopleService: AssociatedPeopleService,
              public dialogRef: MatDialogRef<ManageSubjectPeopleComponent>,
              @Inject(MAT_DIALOG_DATA) public model: ManageSubjectItemsModalModel<Person>) {
    this.filters = new AssociatedPeopleFilters(1, 30);
    this.subjectPeople = this.model.selected.map(f => f.id);
    this.untouchedPeople = this.subjectPeople;
  }

  ngOnInit(): void {
    this.getPeople();
  }

  onCancelClick(): void {
    this.dialogRef.close(false);
  }

  isSelected(id: string): boolean {
    if (this.subjectPeople.includes(id)) {
      this.untouchedPeople = this.untouchedPeople.filter(fileId => fileId !== id);
      return true;
    }
    return false;
  }

  onSaveClick(){
    this.subjectService.updateSubjectPeople(this.model.subjectId, this.untouchedPeople.concat(this.subjectPeople))
      .subscribe(_ => this.dialogRef.close(true));
  }

  getAbbreviation(fullname: string) {
    if (fullname == null) return '?';

    return fullname.split(' ').map(e => e[0]).join('');
  }

  onScroll() {
    if (this.isMore) {
      this.filters.page++;
      this.getPeople();
    }
  }

  onSelectChange(selected: string[]) {
    this.subjectPeople = selected;
  }

  getPeople(){
    this.peopleService.getPeople(this.model.groupAlias, this.filters)
      .subscribe(data => {
        this.people = data.items;
        this.isMore = data.isMore;
      });
  }

}
