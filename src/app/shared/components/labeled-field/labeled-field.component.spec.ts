import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeledFieldComponent } from './labeled-field.component';

describe('LabeledFieldComponent', () => {
  let component: LabeledFieldComponent;
  let fixture: ComponentFixture<LabeledFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabeledFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabeledFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
