import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTransportComponent } from './delete-transport.component';

describe('DeleteTransportComponent', () => {
  let component: DeleteTransportComponent;
  let fixture: ComponentFixture<DeleteTransportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTransportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
