import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectCreateEditFormComponent } from './subject-create-edit-form.component';

describe('SubjectCreateEditFormComponent', () => {
  let component: SubjectCreateEditFormComponent;
  let fixture: ComponentFixture<SubjectCreateEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectCreateEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectCreateEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
