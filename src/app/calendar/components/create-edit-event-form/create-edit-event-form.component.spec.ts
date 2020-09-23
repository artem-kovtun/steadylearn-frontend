import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditEventFormComponent } from './create-edit-event-form.component';

describe('CreateEditEventFormComponent', () => {
  let component: CreateEditEventFormComponent;
  let fixture: ComponentFixture<CreateEditEventFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEditEventFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditEventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
