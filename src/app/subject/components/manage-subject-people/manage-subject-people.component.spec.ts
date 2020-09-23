import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSubjectPeopleComponent } from './manage-subject-people.component';

describe('ManageSubjectPeopleComponent', () => {
  let component: ManageSubjectPeopleComponent;
  let fixture: ComponentFixture<ManageSubjectPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSubjectPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSubjectPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
