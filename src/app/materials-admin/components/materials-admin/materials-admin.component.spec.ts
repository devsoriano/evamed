import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsAdminComponent } from './materials-admin.component';

describe('MaterialsAdminComponent', () => {
  let component: MaterialsAdminComponent;
  let fixture: ComponentFixture<MaterialsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
