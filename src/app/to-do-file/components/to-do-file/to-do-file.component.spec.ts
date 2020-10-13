import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoFileComponent } from './to-do-file.component';

describe('ToDoFileComponent', () => {
  let component: ToDoFileComponent;
  let fixture: ComponentFixture<ToDoFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
