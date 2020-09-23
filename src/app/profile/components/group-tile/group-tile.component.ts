import {Component, Input, OnInit} from '@angular/core';
import {Group} from '../../../group/models/group.model';

@Component({
  selector: 'app-group-tile',
  templateUrl: './group-tile.component.html',
  styleUrls: ['./group-tile.component.scss']
})
export class GroupTileComponent implements OnInit {

  @Input() group: Group;

  constructor() { }

  ngOnInit(): void {
  }


}
