import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectFileComponent } from './subject-file.component';

describe('SubjectFileComponent', () => {
  let component: SubjectFileComponent;
  let fixture: ComponentFixture<SubjectFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
