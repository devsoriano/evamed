import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportAdminComponent } from './transport-admin.component';

describe('TransportAdminComponent', () => {
  let component: TransportAdminComponent;
  let fixture: ComponentFixture<TransportAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
