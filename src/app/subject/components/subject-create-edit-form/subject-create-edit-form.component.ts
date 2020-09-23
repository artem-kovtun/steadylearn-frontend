import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import { Subject } from '../../models/subject.model';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-subject-create-edit-form',
  templateUrl: './subject-create-edit-form.component.html',
  styleUrls: ['./subject-create-edit-form.component.scss']
})
export class SubjectCreateEditFormComponent implements OnInit {

  @Input() subject: Subject;
  @Output() onSubjectCreateEdit = new EventEmitter<Subject>();

  form!: FormGroup;

  submitForm(): void {
    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
    }

    this.onSubjectCreateEdit.emit(Object.assign(this.subject, this.form.getRawValue()))
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [this.subject.name, [Validators.required]],
      description: [this.subject.description]
    });
  }

}
