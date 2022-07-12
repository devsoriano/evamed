import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEnergyComponent } from './add-energy.component';

describe('AddEnergyComponent', () => {
  let component: AddEnergyComponent;
  let fixture: ComponentFixture<AddEnergyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEnergyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEnergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
