import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileMobileMenuComponent } from './file-mobile-menu.component';

describe('FileMobileMenuComponent', () => {
  let component: FileMobileMenuComponent;
  let fixture: ComponentFixture<FileMobileMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileMobileMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileMobileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
