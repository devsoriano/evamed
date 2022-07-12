import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDataBaseComponent } from './update-data-base.component';

describe('UpdateDataBaseComponent', () => {
  let component: UpdateDataBaseComponent;
  let fixture: ComponentFixture<UpdateDataBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDataBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDataBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
