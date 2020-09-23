import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatedPeoplePageComponent } from './associated-people-page.component';

describe('AssociatedPeoplePageComponent', () => {
  let component: AssociatedPeoplePageComponent;
  let fixture: ComponentFixture<AssociatedPeoplePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociatedPeoplePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociatedPeoplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
