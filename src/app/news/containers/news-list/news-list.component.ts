import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {News} from '../../models/news.model';
import {ActivatedRoute, Router} from '@angular/router';
import {NewsService} from '../../services/news.service';
import {NewsFilter} from '../../models/newsFilter.model';
import {User} from 'src/app/user/models/user.model';
import {saveAs} from 'file-saver';
import {UsersService} from 'src/app/user/services/users.service';
import {FileService} from 'src/app/file/services/file.service';
import {GroupsService} from '../../../group/services/groups.service';
import {Permission} from '../../../group/models/permission.enum';
import {PermissionsHelper} from '../../../group/helpers/permissions.helper';
import {PermissionService} from '../../../permission/services/PermissionService';
import {Group} from '../../../group/models/group.model';
import {UserGroupStatus} from '../../../group/models/userGroupStatus.enum';
import {PageLoadProperties} from '../../../core/models/pageLoadProperties';
import {NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-news-list',
  queries: {
    cardsContainer: new ViewChild( 'cardsContainer' )
  },
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  pageLoadProperties = new PageLoadProperties(true);
  groupAlias: string;
  group: Group;
  filter: NewsFilter;
  newsList: Array<News> = [];
  isMoreNews: boolean;
  cardsContainer!: ElementRef;
  senders: Array<User> = [];
  route: ActivatedRoute;
  permission = Permission;
  permissions: Array<Permission> = [];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private modal: NzModalService,
              private newsService: NewsService,
              private fileService: FileService,
              private groupService: GroupsService,
              private usersService: UsersService,
              private permissionService: PermissionService,
              public permissionsHelper: PermissionsHelper) {
    this.route = activatedRoute;
    this.groupAlias = this.activatedRoute.snapshot.params.alias;
    this.filter = new NewsFilter(1, 30);
  }

  ngOnInit(): void {
    this.groupService.getGroup(this.groupAlias)
      .subscribe(group => {
        if (group?.status !== UserGroupStatus.Active) {
          this.pageLoadProperties.AccessDenied();
        }
        else {
          this.group = group;

          this.permissionService.getUserGroupPermissionPools(this.groupAlias)
            .subscribe(permissions => this.permissions = permissions);

          this.usersService.GetNewsSenders(this.groupAlias)
            .subscribe(senders => this.senders = senders);
          this.getNews();
        }
        this.pageLoadProperties.DataLoaded();
      });
  }

  onAddNews(){
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  deleteNews(id: string) {
    this.modal.confirm({
      nzTitle: 'Do you really want to delete this news?',
      nzOkText: 'Yes, delete',
      nzOkType: 'danger',
      nzOnOk: () => this.newsService.deleteNews(id).subscribe(_ => this.newsList = this.newsList.filter(n => n.id !== id)),
      nzCancelText: 'No, keep'
    });
  }

  downloadFile(downloadInfo: {newsId: string, fileId: string, name: string}) {
    const news = this.newsList[this.newsList.findIndex(news => news.id === downloadInfo.newsId)];
    const attachmentId = news.attachments.findIndex(attachment => attachment.id === downloadInfo.fileId);
    news.attachments[attachmentId].isDownloading = true;
    this.fileService.downloadFile(downloadInfo.fileId)
      .subscribe(data => {
        saveAs(data, downloadInfo.name);
        news.attachments[attachmentId].isDownloading = false;
      });
  }

  editNews(id: string) {
    this.router.navigate([id], { relativeTo: this.route });
  }

  onFiltersChange(filters: NewsFilter){
    this.filter = filters;
    this.getNews();
    this.cardsContainer.nativeElement.scrollTo(0, 0);
  }

  onScroll() {
    if (this.isMoreNews){
      this.filter.page = this.filter.page + 1;
      this.getNews();
    }
  }

  getNews() {
    this.newsService.getNews(this.groupAlias, this.filter)
      .subscribe(data => {
        if (this.filter.page === 1) {
          this.newsList = data.news;
        }
        else {
          this.newsList = this.newsList.concat(data.news);
        }
        this.isMoreNews = data.isMore;
      });
  }

}
