import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { News } from '../../models/news.model';
import { MatDialog } from '@angular/material/dialog';
import { StringTools } from 'src/app/shared/tools/string.tool';
import {Permission} from '../../../group/models/permission.enum';
import {PermissionsHelper} from '../../../group/helpers/permissions.helper';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {

  @Input() news: News;
  @Input() permissions: Array<Permission> = [];
  @Output() onDelete = new EventEmitter<string>();
  @Output() onEdit = new EventEmitter<string>();
  @Output() onAttachmentDownload = new EventEmitter<{newsId: string, fileId: string, name: string}>();

  isFullMessageShown = true;
  formattedMessage: string;
  permission = Permission;

  constructor(public dialog: MatDialog,
              public stringTools: StringTools,
              public permissionsHelper: PermissionsHelper) { }

  onDeleteClick() {
    this.onDelete.emit(this.news.id);
  }

  downloadFile(id: string, name: string) {
    this.onAttachmentDownload.emit({newsId: this.news.id, fileId: id, name: name});
  }

  showFullMessage(){
    this.isFullMessageShown = true;
    this.formattedMessage = this.news.message;
  }

  onEditClick() {
    this.onEdit.emit(this.news.id);
  }

  ngOnInit(): void {
    if (this.news.message.length > 400){
      this.isFullMessageShown = false;
      this.formattedMessage = this.news.message.substring(0, 400) + '...';
    }
    else {
      this.formattedMessage = this.news.message;
    }
  }

}
