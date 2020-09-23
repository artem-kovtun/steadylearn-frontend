import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesListPageComponent } from './files-list-page.component';

describe('FilesListPageComponent', () => {
  let component: FilesListPageComponent;
  let fixture: ComponentFixture<FilesListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
