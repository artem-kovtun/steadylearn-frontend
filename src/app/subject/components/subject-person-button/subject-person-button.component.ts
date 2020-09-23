import { Component, OnInit, Input } from '@angular/core';
import {Person} from '../../../associated-people/models/person.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-subject-person-button',
  templateUrl: './subject-person-button.component.html',
  styleUrls: ['./subject-person-button.component.scss']
})
export class SubjectPersonButtonComponent implements OnInit {

  @Input() person: Person;
  @Input() groupAlias: string;
  @Input() subjectId: string;

  abbreviation: string;

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.abbreviation = this.person.fullname.split(' ').map(e => e[0]).join('');
  }

}
