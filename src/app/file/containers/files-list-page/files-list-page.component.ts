import {Component, OnInit} from '@angular/core';
import {File as FileModel} from '../../models/file.model';
import {ActivatedRoute, Router} from '@angular/router';
import {FileService} from '../../services/file.service';
import {FilesFilter} from '../../models/filesFilters.model';
import {StringTools} from 'src/app/shared/tools/string.tool';
import {saveAs} from 'file-saver';
import {MatDialog} from '@angular/material/dialog';
import {FilesFiltersComponent} from '../../components/files-filters/files-filters.component';
import {Permission} from '../../../group/models/permission.enum';
import {PermissionService} from '../../../permission/services/PermissionService';
import {PermissionsHelper} from '../../../group/helpers/permissions.helper';
import {FileMobileMenuComponent} from '../../components/file-mobile-menu/file-mobile-menu.component';
import {Group} from '../../../group/models/group.model';
import {GroupsService} from '../../../group/services/groups.service';
import {PageLoadProperties} from '../../../core/models/pageLoadProperties';
import {UserGroupStatus} from '../../../group/models/userGroupStatus.enum';
import {UploadFile} from '../../models/uploadFile.model';
import {HttpResponse} from '@angular/common/http';
import {NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-files-list-page',
  templateUrl: './files-list-page.component.html',
  styleUrls: ['./files-list-page.component.scss']
})
export class FilesListPageComponent implements OnInit {

  pageLoadProperties = new PageLoadProperties(true);
  filters: FilesFilter;
  route: ActivatedRoute;
  groupAlias: string;
  group: Group;
  files: Array<FileModel> = [];
  uploadingFiles: Array<UploadFile> = [];
  isMore: boolean;
  selectedFiles: Array<string> = [];
  Permission = Permission;
  permissions: Array<Permission> = [];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private filesService: FileService,
              private modal: NzModalService,
              public stringTools: StringTools,
              public dialog: MatDialog,
              private groupsService: GroupsService,
              private permissionService: PermissionService,
              public permissionsHelper: PermissionsHelper) {
    this.route = activatedRoute;
    this.groupAlias = this.activatedRoute.snapshot.params.alias;
    this.filters = new FilesFilter(1, 30);
  }

  ngOnInit() {
    this.groupsService.getGroup(this.groupAlias)
      .subscribe(group => {
        if (group?.status !== UserGroupStatus.Active) {
          this.pageLoadProperties.AccessDenied();
        }
        else {
          this.group = group;
          this.permissionService.getUserGroupPermissionPools(this.groupAlias)
            .subscribe(permissions => this.permissions = permissions);
          this.getFiles();
        }
        this.pageLoadProperties.DataLoaded();
      });

  }

  downloadSelectedFiles(){
    this.selectedFiles.forEach(id => {
      const fileIndex = this.files.findIndex(file => file.id === id);
      this.files[fileIndex].isDownloading = true;
      this.filesService.downloadFile(id).subscribe(data => {
        saveAs(data,  this.files[fileIndex].name);
        this.files[fileIndex].isDownloading = false;
      });
    });
  }

  onFiltersClick(){
    const dialog = this.dialog.open(FilesFiltersComponent, {
      width: '350px',
      data: this.filters
    });

    dialog.afterClosed().subscribe(filters => {
      if (filters == null) {
        return;
      }
      this.filters = filters;
      this.getFiles();
    });
  }

  filesSelected(files: File[]){
    for (const file of files) {
      const key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      const request = this.filesService.uploadFile(this.groupAlias, file)
        .subscribe(event => {
          if (event instanceof HttpResponse) {
            const fileId = event.body as string;
            this.uploadingFiles = this.uploadingFiles.filter(f => f.key !== key);
            this.files.unshift(new FileModel(fileId, file.name));
          }
        });
      this.uploadingFiles.push(new UploadFile(key, file.name, request));
    }
  }

  cancelFileUpload(uploadFile: UploadFile) {
    uploadFile.request.unsubscribe();
    this.uploadingFiles = this.uploadingFiles.filter(f => f.key !== uploadFile.key);
  }

  deleteSelectedFiles() {
    this.modal.confirm({
      nzTitle: 'Do you really want to delete these files?',
      nzOkText: 'Yes, delete',
      nzOkType: 'danger',
      nzOnOk: () => {
        this.selectedFiles.forEach(id => {
          this.filesService.deleteFile(id).subscribe(data => {
            this.files = this.files.filter(f => f.id !== id);
          });
        });
        this.selectedFiles = [];
      } ,
      nzCancelText: 'No, keep'
    });
  }

  onScroll() {
    if (this.isMore){
      this.filters.page = this.filters.page + 1;
      this.getFiles();
    }
  }

  filtersChanged() {
    this.getFiles();
  }

  select(selected: string[]) {
    this.selectedFiles = selected;
  }

  getFiles(){
    this.filesService.getGroupFiles(this.groupAlias, this.filters)
      .subscribe(data => {
        if (this.filters.page === 1) {
          this.files = data.items;
        }
        else {
          this.files = this.files.concat(data.items);
        }
        this.isMore = data.isMore;
    });
  }

  openMobileMenu() {
    const dialog = this.dialog.open(FileMobileMenuComponent, {
      width: '300px',
      data: {
        permissions: this.permissions,
        isFilesSelected: this.selectedFiles.length > 0
      }
    });

    dialog.afterClosed().subscribe(event => {
      if (event === 'DownloadSelectedFiles') {
        this.downloadSelectedFiles();
      }
      if (event === 'DeleteSelectedFiles') {
        this.deleteSelectedFiles();
      }
      if (event === 'OpenFilters') {
        this.onFiltersClick();
      }
      if (event === 'UploadFiles') {
        (document.querySelector('input.filesSelector') as HTMLElement).click();
      }
    });
  }
}
