import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePotentialTransportComponent } from './delete-potential-transport.component';

describe('DeletePotentialTransportComponent', () => {
  let component: DeletePotentialTransportComponent;
  let fixture: ComponentFixture<DeletePotentialTransportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePotentialTransportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePotentialTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
