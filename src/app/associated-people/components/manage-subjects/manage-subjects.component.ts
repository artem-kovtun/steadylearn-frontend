import {Component, Inject, OnInit} from '@angular/core';
import {SubjectsFilters} from '../../../subject/models/subjectsFilters.model';
import {Subject} from '../../../subject/models/subject.model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ManageSubjectPeopleComponent} from '../../../subject/components/manage-subject-people/manage-subject-people.component';
import {SubjectsService} from '../../../subject/services/subjects.service';
import {AssociatedPeopleService} from '../../services/associatedPeople.service';
import {ManageItemsModalModel} from '../../models/ManageItemsModalModel';

@Component({
  selector: 'app-manage-subjects',
  templateUrl: './manage-subjects.component.html',
  styleUrls: ['./manage-subjects.component.scss']
})
export class ManageSubjectsComponent implements OnInit {

  filters: SubjectsFilters;
  subjects: Array<Subject> = [];
  isMore: boolean;
  personSubjects: Array<string> = [];

  constructor(private subjectService: SubjectsService,
              private peopleService: AssociatedPeopleService,
              public dialogRef: MatDialogRef<ManageSubjectPeopleComponent>,
              @Inject(MAT_DIALOG_DATA) public model: ManageItemsModalModel<Subject>) {
    this.filters = new SubjectsFilters(1, 30);
    this.personSubjects = model.selected.map(s => s.id);
  }

  ngOnInit(): void {
    this.getSubjects();
  }

  onCancelClick(): void {
    this.dialogRef.close(false);
  }

  isSelected(id: string): boolean {
    if (this.personSubjects.includes(id)) {
      return true;
    }
    return false;
  }

  onSaveClick(){
    this.peopleService.updatePersonSubjects(this.model.id, this.personSubjects)
      .subscribe(_ => this.dialogRef.close(true));
  }
  onScroll() {
    if (this.isMore) {
      this.filters.page++;
      this.getSubjects();
    }
  }

  onSelectChange(selected: string[]) {
    this.personSubjects = selected;
  }

  getSubjects(){
    this.subjectService.getSubjects(this.model.groupAlias, this.filters)
      .subscribe(data => {
        this.subjects = data.subjects;
        this.isMore = data.isMore;
      });
  }

}
