import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatedPeopleFiltersComponent } from './associated-people-filters.component';

describe('AssociatedPeopleFiltersComponent', () => {
  let component: AssociatedPeopleFiltersComponent;
  let fixture: ComponentFixture<AssociatedPeopleFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociatedPeopleFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociatedPeopleFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
