import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectCreateEditComponent } from './subject-create-edit.component';

describe('SubjectCreateEditComponent', () => {
  let component: SubjectCreateEditComponent;
  let fixture: ComponentFixture<SubjectCreateEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectCreateEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
