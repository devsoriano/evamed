import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPotentialEnergyComponent } from './add-potential-energy.component';

describe('AddPotentialEnergyComponent', () => {
  let component: AddPotentialEnergyComponent;
  let fixture: ComponentFixture<AddPotentialEnergyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPotentialEnergyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPotentialEnergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
