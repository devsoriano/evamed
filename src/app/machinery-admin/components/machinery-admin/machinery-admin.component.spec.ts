import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineryAdminComponent } from './machinery-admin.component';

describe('MachineryAdminComponent', () => {
  let component: MachineryAdminComponent;
  let fixture: ComponentFixture<MachineryAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineryAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
