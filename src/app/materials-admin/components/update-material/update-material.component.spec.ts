import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMaterialComponent } from './update-material.component';

describe('UpdateMaterialComponent', () => {
  let component: UpdateMaterialComponent;
  let fixture: ComponentFixture<UpdateMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
