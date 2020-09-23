import { Component } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';

export enum Layouts {
  HeaderSider,
  NoLayout
}

export enum Tabs {
  Home,
  News,
  Schedule,
  Calendar,
  Subjects,
  Participants,
  Settings
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'SteadylearnNg';
  layout: Layouts;
  currentTab: Tabs;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.layout = data.state.root.firstChild.data.layout;
        this.currentTab = data.state.root.firstChild.data.tab;
      }
    });
  }
}
