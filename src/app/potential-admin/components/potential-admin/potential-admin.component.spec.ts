import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotentialAdminComponent } from './potential-admin.component';

describe('PotentialAdminComponent', () => {
  let component: PotentialAdminComponent;
  let fixture: ComponentFixture<PotentialAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotentialAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotentialAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
