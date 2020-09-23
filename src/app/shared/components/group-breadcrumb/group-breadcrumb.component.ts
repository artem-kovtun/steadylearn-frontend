import {Component, Input, OnInit} from '@angular/core';
import {Group} from '../../../group/models/group.model';

@Component({
  selector: 'app-group-breadcrumb',
  templateUrl: './group-breadcrumb.component.html',
  styleUrls: ['./group-breadcrumb.component.scss']
})
export class GroupBreadcrumbComponent implements OnInit {

  @Input() group: Group;
  @Input() items: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
