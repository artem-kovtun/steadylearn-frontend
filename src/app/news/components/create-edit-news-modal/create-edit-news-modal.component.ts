import { Component, EventEmitter, OnInit, Input, Output, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { News } from '../../models/news.model';

@Component({
  selector: 'app-create-edit-news-modal',
  templateUrl: './create-edit-news-modal.component.html',
  styleUrls: ['./create-edit-news-modal.component.scss']
})
export class CreateEditNewsModalComponent implements OnInit {

  constructor( public dialog: MatDialogRef<CreateEditNewsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: News) {
    }

  onCancelClick(): void {
    this.dialog.close();
  }

  ngOnInit(): void {
  }

}
