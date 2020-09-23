import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersMobileMenuComponent } from './members-mobile-menu.component';

describe('MembersMobileMenuComponent', () => {
  let component: MembersMobileMenuComponent;
  let fixture: ComponentFixture<MembersMobileMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembersMobileMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersMobileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
