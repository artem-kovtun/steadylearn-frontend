import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsMobileMenuComponent } from './news-mobile-menu.component';

describe('NewsMobileMenuComponent', () => {
  let component: NewsMobileMenuComponent;
  let fixture: ComponentFixture<NewsMobileMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsMobileMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsMobileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
