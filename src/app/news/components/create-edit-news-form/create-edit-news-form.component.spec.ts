import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditNewsFormComponent } from './create-edit-news-form.component';

describe('CreateEditNewsFormComponent', () => {
  let component: CreateEditNewsFormComponent;
  let fixture: ComponentFixture<CreateEditNewsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEditNewsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditNewsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
