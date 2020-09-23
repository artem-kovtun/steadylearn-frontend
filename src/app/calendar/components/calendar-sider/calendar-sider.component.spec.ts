import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarSiderComponent } from './calendar-sider.component';

describe('CalendarSiderComponent', () => {
  let component: CalendarSiderComponent;
  let fixture: ComponentFixture<CalendarSiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarSiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarSiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
