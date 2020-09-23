import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsFiltersComponent } from './subjects-filters.component';

describe('SubjectsFiltersComponent', () => {
  let component: SubjectsFiltersComponent;
  let fixture: ComponentFixture<SubjectsFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
