import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subject} from '../../models/subject.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-subjects-list-record',
  templateUrl: './subjects-list-record.component.html',
  styleUrls: ['./subjects-list-record.component.scss']
})
export class SubjectsListRecordComponent implements OnInit {

  @Input() subject: Subject;
  @Output() onClick = new EventEmitter<string>();
  @Output() onEdit = new EventEmitter<string>();
  @Output() onDelete = new EventEmitter<string>();

  route: ActivatedRoute;

  constructor() {}

  ngOnInit(): void {
  }

  subjectClick(){
    this.onClick.emit(this.subject.id);
  }

  editClick() {
    this.onEdit.emit(this.subject.id);
  }

  deleteClick() {
    this.onDelete.emit(this.subject.id);
  }

}
