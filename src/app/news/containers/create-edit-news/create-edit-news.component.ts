import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {News} from '../../models/news.model';
import {NewsService} from '../../services/news.service';
import {FileService} from 'src/app/file/services/file.service';
import {UploadFile} from 'src/app/file/models/uploadFile.model';
import {File as Attachment} from 'src/app/file/models/file.model';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {Group} from '../../../group/models/group.model';
import {GroupsService} from '../../../group/services/groups.service';
import {UserGroupStatus} from '../../../group/models/userGroupStatus.enum';
import {Permission} from '../../../group/models/permission.enum';
import {PermissionService} from '../../../permission/services/PermissionService';
import {PermissionsHelper} from '../../../group/helpers/permissions.helper';
import {PageLoadProperties} from '../../../core/models/pageLoadProperties';

@Component({
  selector: 'app-create-edit-news',
  templateUrl: './create-edit-news.component.html',
  styleUrls: ['./create-edit-news.component.scss']
})
export class CreateEditNewsComponent implements OnInit {

  pageLoadProperties = new PageLoadProperties(false);
  isAccessAllowed = false;
  groupAlias: string;
  group: Group;
  newsId: string;
  news: News;
  attachments: Array<UploadFile> = [];
  Permission = Permission;
  permissions: Array<Permission> = [];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private newsService: NewsService,
              private filesService: FileService,
              private groupsService: GroupsService,
              private permissionService: PermissionService,
              private permissionsHelper: PermissionsHelper) {
    this.groupAlias = this.activatedRoute.snapshot.params.alias;
    this.newsId = this.activatedRoute.snapshot.params.newsId;
  }

  ngOnInit(): void {
    this.groupsService.getGroup(this.groupAlias)
      .subscribe(group => {
        if (group.status !== UserGroupStatus.Active) {
          this.pageLoadProperties.AccessDenied();
          this.pageLoadProperties.DataLoaded();
        }
        else {
          this.group = group;
          this.permissionService.getUserGroupPermissionPools(this.groupAlias)
            .subscribe(permissions => {
              this.permissions = permissions;
              if (this.permissionsHelper.hasPermissions(this.permissions, [Permission.Admin, Permission.NewsManager])) {
                this.pageLoadProperties.AccessAllowed();
                if (this.newsId != null) {
                  this.newsService.getNewsById(this.newsId).subscribe(data => {
                    this.news = data;
                    this.news.attachments.forEach(attachment => {
                      this.attachments.push(new UploadFile(null, attachment.name, null, attachment.id));
                    });
                  });
                }
                else {
                  this.news = new News();
                }
              }
              this.pageLoadProperties.DataLoaded();
            });
        }
      });
  }

  onBackClick(){
    this.router.navigate([this.groupAlias, 'news']);
  }

  createEditNews(news: News){
    if (news.id != null){
      this.newsService.updateNews(news)
        .subscribe(_ => this.router.navigate([this.groupAlias, 'news']));
      return;
    }

    this.newsService.addNews(this.groupAlias, news)
      .subscribe(_ => this.router.navigate([this.groupAlias, 'news']))
  }

  deleteAttachment(id: string){
    if (this.news.id != null) {
      this.news.attachments = this.news.attachments.filter(attachment => attachment.id != id);
      this.attachments = this.attachments.filter(file => file.id != id);
      return;
    }

    this.filesService.deleteFile(id)
      .subscribe(_ => {
        this.news.attachments = this.news.attachments.filter(attachment => attachment.id !== id);
        this.attachments = this.attachments.filter(file => file.id !== id);
      });
  }

  deleteFileUploadRequest(upload: UploadFile) {
    if (upload.id == null) {
      upload.request.unsubscribe();
      this.attachments = this.attachments.filter(file => file.key !== upload.key);
      return;
    }

    this.deleteAttachment(upload.id);
  }

  addAttachment(fileData: {key: string, file: File}) {
    const request = this.filesService.uploadFile(this.groupAlias, fileData.file)
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          // let loaded = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          const fileId = event.body as string;
          this.news.attachments.push(new Attachment(fileId, fileData.file.name));
          const attachmentIndex = this.attachments.findIndex(file => file.key === fileData.key);
          this.attachments[attachmentIndex].id = fileId;
        }
      });
    this.attachments.push(new UploadFile(fileData.key, fileData.file.name, request));
  }

}
