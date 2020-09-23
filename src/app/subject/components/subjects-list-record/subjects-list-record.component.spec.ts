import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsListRecordComponent } from './subjects-list-record.component';

describe('SubjectsListRecordComponent', () => {
  let component: SubjectsListRecordComponent;
  let fixture: ComponentFixture<SubjectsListRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsListRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsListRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
