import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBaseAdminComponent } from './data-base-admin.component';

describe('DataBaseAdminComponent', () => {
  let component: DataBaseAdminComponent;
  let fixture: ComponentFixture<DataBaseAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBaseAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBaseAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
