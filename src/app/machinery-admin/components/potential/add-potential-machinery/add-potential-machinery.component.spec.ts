import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPotentialMachineryComponent } from './add-potential-machinery.component';

describe('AddPotentialMachineryComponent', () => {
  let component: AddPotentialMachineryComponent;
  let fixture: ComponentFixture<AddPotentialMachineryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPotentialMachineryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPotentialMachineryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
