import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFiltersComponent } from './news-filters.component';

describe('NewsFiltersComponent', () => {
  let component: NewsFiltersComponent;
  let fixture: ComponentFixture<NewsFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
