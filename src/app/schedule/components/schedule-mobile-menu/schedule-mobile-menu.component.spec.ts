import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleMobileMenuComponent } from './schedule-mobile-menu.component';

describe('ScheduleMobileMenuComponent', () => {
  let component: ScheduleMobileMenuComponent;
  let fixture: ComponentFixture<ScheduleMobileMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleMobileMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleMobileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
