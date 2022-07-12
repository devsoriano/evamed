import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDataBaseComponent } from './add-data-base.component';

describe('AddDataBaseComponent', () => {
  let component: AddDataBaseComponent;
  let fixture: ComponentFixture<AddDataBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDataBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDataBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
