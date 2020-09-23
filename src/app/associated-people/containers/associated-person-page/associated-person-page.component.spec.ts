import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatedPersonPageComponent } from './associated-person-page.component';

describe('AssociatedPersonPageComponent', () => {
  let component: AssociatedPersonPageComponent;
  let fixture: ComponentFixture<AssociatedPersonPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociatedPersonPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociatedPersonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
