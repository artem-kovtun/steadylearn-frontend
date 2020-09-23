import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { File } from 'src/app/file/models/file.model';
import { StringTools } from 'src/app/shared/tools/string.tool';

@Component({
  selector: 'app-subject-file',
  templateUrl: './subject-file.component.html',
  styleUrls: ['./subject-file.component.scss']
})
export class SubjectFileComponent implements OnInit {

  @Input() file: File;
  @Output() onDownload = new EventEmitter<string>();

  filenameWithoutExtension: string;

  constructor(public stringTools: StringTools) { }

  ngOnInit(): void {
    this.filenameWithoutExtension = this.file.name.split('.')[0];
  }

  onDownloadClick() {
    this.onDownload.emit(this.file.id);
  }

}
