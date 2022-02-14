import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMachineryComponent } from './add-machinery.component';

describe('AddMachineryComponent', () => {
  let component: AddMachineryComponent;
  let fixture: ComponentFixture<AddMachineryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMachineryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMachineryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
