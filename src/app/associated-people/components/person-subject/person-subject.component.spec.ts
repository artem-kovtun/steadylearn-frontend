import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonSubjectComponent } from './person-subject.component';

describe('PersonSubjectComponent', () => {
  let component: PersonSubjectComponent;
  let fixture: ComponentFixture<PersonSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
