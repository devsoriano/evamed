import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotentialTransportComponent } from './potential-transport.component';

describe('PotentialTransportComponent', () => {
  let component: PotentialTransportComponent;
  let fixture: ComponentFixture<PotentialTransportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotentialTransportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotentialTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
