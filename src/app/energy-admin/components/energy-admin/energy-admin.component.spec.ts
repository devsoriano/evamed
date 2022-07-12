import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyAdminComponent } from './energy-admin.component';

describe('EnergyAdminComponent', () => {
  let component: EnergyAdminComponent;
  let fixture: ComponentFixture<EnergyAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnergyAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
