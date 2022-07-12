import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEnergyComponent } from './update-energy.component';

describe('UpdateEnergyComponent', () => {
  let component: UpdateEnergyComponent;
  let fixture: ComponentFixture<UpdateEnergyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEnergyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEnergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
