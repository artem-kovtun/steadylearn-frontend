import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersHeaderComponent } from './members-header.component';

describe('MembersHeaderComponent', () => {
  let component: MembersHeaderComponent;
  let fixture: ComponentFixture<MembersHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembersHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
