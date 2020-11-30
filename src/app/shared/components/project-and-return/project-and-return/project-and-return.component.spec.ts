import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAndReturnComponent } from './project-and-return.component';

describe('ProjectAndReturnComponent', () => {
  let component: ProjectAndReturnComponent;
  let fixture: ComponentFixture<ProjectAndReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectAndReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectAndReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
