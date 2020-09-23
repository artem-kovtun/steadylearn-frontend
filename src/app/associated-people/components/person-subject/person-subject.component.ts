import {Component, Input, OnInit} from '@angular/core';
import {Subject} from '../../../subject/models/subject.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-person-subject',
  templateUrl: './person-subject.component.html',
  styleUrls: ['./person-subject.component.scss']
})
export class PersonSubjectComponent implements OnInit {

  @Input() subject: Subject;
  @Input() groupAlias: string;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
