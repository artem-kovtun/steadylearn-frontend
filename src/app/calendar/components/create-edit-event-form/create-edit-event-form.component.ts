import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-create-edit-event-form',
  templateUrl: './create-edit-event-form.component.html',
  styleUrls: ['./create-edit-event-form.component.scss']
})
export class CreateEditEventFormComponent implements OnInit {

  severityString: string;

  constructor( public dialog: MatDialogRef<CreateEditEventFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Event) {
      this.severityString = this.data.severity.toString()
    }

  ngOnInit(): void {}

  severityChanged(){
    this.data.severity = +this.severityString;
  }

  onCancelClick(): void {
    this.dialog.close();
  }

}
