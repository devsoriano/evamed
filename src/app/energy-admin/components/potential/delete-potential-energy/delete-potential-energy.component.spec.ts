import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePotentialEnergyComponent } from './delete-potential-energy.component';

describe('DeletePotentialEnergyComponent', () => {
  let component: DeletePotentialEnergyComponent;
  let fixture: ComponentFixture<DeletePotentialEnergyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePotentialEnergyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePotentialEnergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
