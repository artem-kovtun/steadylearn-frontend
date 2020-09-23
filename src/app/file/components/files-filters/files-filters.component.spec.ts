import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesFiltersComponent } from './files-filters.component';

describe('FilesFilterComponent', () => {
  let component: FilesFiltersComponent;
  let fixture: ComponentFixture<FilesFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
