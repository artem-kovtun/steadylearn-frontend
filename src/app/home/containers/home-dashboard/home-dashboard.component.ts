import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Event} from '../../../calendar/models/event.model';
import {EventSeverity} from '../../../calendar/models/eventSeverity.enum';
import {NewsFilter} from '../../../news/models/newsFilter.model';
import {News} from '../../../news/models/news.model';
import {NewsService} from '../../../news/services/news.service';
import {Group} from '../../../group/models/group.model';
import {GroupsService} from '../../../group/services/groups.service';
import {UserGroupStatus} from '../../../group/models/userGroupStatus.enum';
import {DayEvents} from '../../../calendar/models/dayEvents.model';
import {EventsService} from '../../../calendar/services/events.service';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss']
})
export class HomeDashboardComponent implements OnInit {

  isDataLoaded = false;
  isAccessAllowed = true;
  groupAlias: string;
  group: Group;
  route: ActivatedRoute;
  filter: NewsFilter;
  newsList: Array<News> = [];
  upcomingEvents: Array<DayEvents> = [];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private groupsService: GroupsService,
              private eventsService: EventsService,
              private newsService: NewsService) {
    this.route = activatedRoute;
    this.groupAlias = this.activatedRoute.snapshot.params.alias;
    this.filter = new NewsFilter(1, 3);
  }

  events: Array<Event> = [
    {
      id: 'a4c26d51-339a-4035-ab41-382503dabccf',
      message: 'День рождения: Иван Иванов',
      severity: EventSeverity.High
    },
    {
      id: 'a4c26d51-339a-4035-ab41-382503dabccf',
      message: 'Контрольная работа по математическому анализну на 20 баллов',
      severity: EventSeverity.Medium
    }
  ];

  ngOnInit(): void {
    this.groupsService.getGroup(this.groupAlias)
      .subscribe(group => {
        if (group?.status !== UserGroupStatus.Active) {
          this.isAccessAllowed = false;
        }
        else {
          this.group = group;
          this.newsService.getNews(this.groupAlias, this.filter)
            .subscribe(data => this.newsList = data.news );
          this.eventsService.getUpcomingEvents(this.groupAlias)
            .subscribe(events => this.upcomingEvents = events);
        }
        this.isDataLoaded = true;
      });
  }

}
