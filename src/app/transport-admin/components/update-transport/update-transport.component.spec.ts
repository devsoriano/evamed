import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTransportComponent } from './update-transport.component';

describe('UpdateTransportComponent', () => {
  let component: UpdateTransportComponent;
  let fixture: ComponentFixture<UpdateTransportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTransportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
