import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePreviewPageComponent } from './profile-preview-page.component';

describe('ProfilePreviewPageComponent', () => {
  let component: ProfilePreviewPageComponent;
  let fixture: ComponentFixture<ProfilePreviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePreviewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePreviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
