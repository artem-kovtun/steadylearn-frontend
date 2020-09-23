import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinGroupPageComponent } from './join-group-page.component';

describe('JoinGroupPageComponent', () => {
  let component: JoinGroupPageComponent;
  let fixture: ComponentFixture<JoinGroupPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinGroupPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinGroupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
