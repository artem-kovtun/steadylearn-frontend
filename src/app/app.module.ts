import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { NewsModule } from './news/news.module';
import { CalendarModule } from './calendar/calendar.module';
import { ScheduleModule } from './schedule/schedule.module';
import { UserModule } from './user/user.module';
import { SubjectModule } from './subject/subject.module';
import { SettingsModule } from './settings/settings.module';
import { FileModule } from './file/file.module';
import { SharedModule } from './shared/shared.module';
import { MembersModule } from './members/members.module';
import { AssociatedPeopleModule } from './associated-people/associated-people.module';
import { AuthModule } from './auth/auth.module';
import { GroupModule } from './group/group.module';
import { ProfileModule } from './profile/profile.module';
import { PermissionModule } from './permission/permission.module';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    HomeModule,
    NewsModule,
    CalendarModule,
    ScheduleModule,
    UserModule,
    SubjectModule,
    SettingsModule,
    FileModule,
    SharedModule,
    MembersModule,
    AssociatedPeopleModule,
    AuthModule,
    GroupModule,
    ProfileModule,
    PermissionModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
