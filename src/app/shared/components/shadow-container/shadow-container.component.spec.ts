import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowContainerComponent } from './shadow-container.component';

describe('ShadowContainerComponent', () => {
  let component: ShadowContainerComponent;
  let fixture: ComponentFixture<ShadowContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadowContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
