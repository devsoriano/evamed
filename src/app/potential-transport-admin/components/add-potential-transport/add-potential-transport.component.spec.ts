import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPotentialTransportComponent } from './add-potential-transport.component';

describe('AddPotentialTransportComponent', () => {
  let component: AddPotentialTransportComponent;
  let fixture: ComponentFixture<AddPotentialTransportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPotentialTransportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPotentialTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
