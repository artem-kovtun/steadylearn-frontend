import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectMobileMenuComponent } from './subject-mobile-menu.component';

describe('SubjectMobileMenuComponent', () => {
  let component: SubjectMobileMenuComponent;
  let fixture: ComponentFixture<SubjectMobileMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectMobileMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectMobileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
