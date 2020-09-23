import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersListRecordComponent } from './members-list-record.component';

describe('MembersListRecordComponent', () => {
  let component: MembersListRecordComponent;
  let fixture: ComponentFixture<MembersListRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembersListRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersListRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
