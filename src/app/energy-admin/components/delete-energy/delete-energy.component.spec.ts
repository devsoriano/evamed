import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEnergyComponent } from './delete-energy.component';

describe('DeleteEnergyComponent', () => {
  let component: DeleteEnergyComponent;
  let fixture: ComponentFixture<DeleteEnergyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteEnergyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEnergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
