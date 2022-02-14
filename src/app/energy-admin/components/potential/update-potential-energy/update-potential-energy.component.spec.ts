import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePotentialEnergyComponent } from './update-potential-energy.component';

describe('UpdatePotentialEnergyComponent', () => {
  let component: UpdatePotentialEnergyComponent;
  let fixture: ComponentFixture<UpdatePotentialEnergyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePotentialEnergyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePotentialEnergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
