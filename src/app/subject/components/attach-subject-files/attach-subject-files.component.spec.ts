import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachSubjectFilesComponent } from './attach-subject-files.component';

describe('AttachSubjectFilesComponent', () => {
  let component: AttachSubjectFilesComponent;
  let fixture: ComponentFixture<AttachSubjectFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttachSubjectFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachSubjectFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
