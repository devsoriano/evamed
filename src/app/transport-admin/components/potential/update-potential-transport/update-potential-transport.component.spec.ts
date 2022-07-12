import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePotentialTransportComponent } from './update-potential-transport.component';

describe('UpdatePotentialTransportComponent', () => {
  let component: UpdatePotentialTransportComponent;
  let fixture: ComponentFixture<UpdatePotentialTransportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePotentialTransportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePotentialTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
