import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberViewPageComponent } from './member-view-page.component';

describe('MemberViewPageComponent', () => {
  let component: MemberViewPageComponent;
  let fixture: ComponentFixture<MemberViewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberViewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
