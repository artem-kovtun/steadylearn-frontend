import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSiderLayoutComponent } from './header-sider-layout.component';

describe('HeaderSiderLayoutComponent', () => {
  let component: HeaderSiderLayoutComponent;
  let fixture: ComponentFixture<HeaderSiderLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSiderLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSiderLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
