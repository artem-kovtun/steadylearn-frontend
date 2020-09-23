import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges} from '@angular/core';
import { News } from '../../models/news.model';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { NgxFileDropEntry, FileSystemFileEntry } from 'ngx-file-drop';
import { StringTools } from 'src/app/shared/tools/string.tool';
import { UploadFile } from 'src/app/file/models/uploadFile.model';

@Component({
  selector: 'app-create-edit-news-form',
  templateUrl: './create-edit-news-form.component.html',
  styleUrls: ['./create-edit-news-form.component.scss']
})
export class CreateEditNewsFormComponent implements OnInit {

  @Input() news: News;
  @Input() attachments: Array<UploadFile>;
  @Output() onNewsCreateEdit = new EventEmitter<News>();
  @Output() onUploadAttachment = new EventEmitter<{key: string, file: File}>();
  @Output() onDeleteAttachment = new EventEmitter<string>();
  @Output() onDeleteAttachmentUploadRequest = new EventEmitter<UploadFile>();

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, public stringTools: StringTools) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      message: [this.news.message, [Validators.required]]
    });
  }

  submitForm(): void {
    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
    }

    this.onNewsCreateEdit.emit(Object.assign(this.news, this.form.getRawValue()));
  }

  removeAttachment(attachment: UploadFile) {
    if (attachment.id == null) {
      this.onDeleteAttachmentUploadRequest.emit(attachment);
      return;
    }

    this.onDeleteAttachment.emit(attachment.id);
  }

  removeFile(i: number): void {
    this.attachments.splice(i, 1);
  }

  public dropped(files: NgxFileDropEntry[]) {
    for (const [i, file] of files.entries()) {
      const fileEntry = file.fileEntry as FileSystemFileEntry;
      fileEntry.file((file: File) => {
        const key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        this.onUploadAttachment.emit({ key: key, file: file});
      });
    }
  }

}
