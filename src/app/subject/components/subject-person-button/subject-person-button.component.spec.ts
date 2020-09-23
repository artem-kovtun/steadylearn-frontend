import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectPersonButtonComponent } from './subject-person-button.component';

describe('SubjectPersonButtonComponent', () => {
  let component: SubjectPersonButtonComponent;
  let fixture: ComponentFixture<SubjectPersonButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectPersonButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectPersonButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
