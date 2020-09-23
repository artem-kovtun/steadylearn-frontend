import {Component, OnInit, Inject} from '@angular/core';
import {File} from '../../../file/models/file.model';
import {StringTools} from '../../../shared/tools/string.tool';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FileService} from '../../../file/services/file.service';
import {FilesFilter} from '../../../file/models/filesFilters.model';
import {ActivatedRoute} from '@angular/router';
import {ManageSubjectItemsModalModel} from '../../models/manageSubjectItemsModal.model';
import {SubjectsService} from '../../services/subjects.service';

@Component({
  selector: 'app-attach-subject-files',
  templateUrl: './attach-subject-files.component.html',
  styleUrls: ['./attach-subject-files.component.scss']
})
export class AttachSubjectFilesComponent implements OnInit {

  filesFilters: FilesFilter;
  files: Array<File> = [];
  isMoreFiles: boolean;
  subjectFiles: Array<string> = [];
  untouchedFiles: Array<string> = [];


  constructor(public stringTools: StringTools,
              private fileService: FileService,
              private subjectService: SubjectsService,
              public dialogRef: MatDialogRef<AttachSubjectFilesComponent>,
              @Inject(MAT_DIALOG_DATA) public model: ManageSubjectItemsModalModel<File>) {
    this.filesFilters = new FilesFilter(1, 30);
    this.subjectFiles = this.model.selected.map(f => f.id);
    this.untouchedFiles = this.subjectFiles;
  }

  onCancelClick(): void {
    this.dialogRef.close(false);
  }

  onSaveClick() {
    this.subjectService.updateSubjectFiles(this.model.subjectId, this.untouchedFiles.concat(this.subjectFiles))
      .subscribe(_ => this.dialogRef.close(true));
  }

  isSelected(id: string): boolean {
    if (this.subjectFiles.includes(id) || this.untouchedFiles.includes(id)) {
      this.untouchedFiles = this.untouchedFiles.filter(fileId => fileId !== id);
      return true;
    }
    return false;
  }

  onScroll() {
    if (this.isMoreFiles) {
      this.filesFilters.page++;
      this.getFiles();
    }
  }

  onSelectChange(selected: string[]) {
    this.subjectFiles = selected;
  }

  ngOnInit(): void {
    this.getFiles();
  }

  getFiles(){
    this.fileService.getGroupFiles(this.model.groupAlias, this.filesFilters)
      .subscribe(data => {
        if (this.filesFilters.page === 1) {
          this.files = data.items;
        }
        else {
          this.files = this.files.concat(data.items);
        }
        this.isMoreFiles = data.isMore;
      });
  }
}
