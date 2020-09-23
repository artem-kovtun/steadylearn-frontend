import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupBreadcrumbComponent } from './group-breadcrumb.component';

describe('GroupBreadcrumbComponent', () => {
  let component: GroupBreadcrumbComponent;
  let fixture: ComponentFixture<GroupBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
