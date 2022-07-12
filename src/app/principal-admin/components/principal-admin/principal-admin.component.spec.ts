import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalAdminComponent } from './principal-admin.component';

describe('PrincipalAdminComponent', () => {
  let component: PrincipalAdminComponent;
  let fixture: ComponentFixture<PrincipalAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
