import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleMobileMenuComponent } from './people-mobile-menu.component';

describe('PeopleMobileMenuComponent', () => {
  let component: PeopleMobileMenuComponent;
  let fixture: ComponentFixture<PeopleMobileMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleMobileMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleMobileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
