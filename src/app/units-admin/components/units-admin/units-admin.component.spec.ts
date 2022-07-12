import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsAdminComponent } from './units-admin.component';

describe('UnitsAdminComponent', () => {
  let component: UnitsAdminComponent;
  let fixture: ComponentFixture<UnitsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
