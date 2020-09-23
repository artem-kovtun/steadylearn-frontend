import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditNewsModalComponent } from './create-edit-news-modal.component';

describe('CreateEditNewsModalComponent', () => {
  let component: CreateEditNewsModalComponent;
  let fixture: ComponentFixture<CreateEditNewsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEditNewsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditNewsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
