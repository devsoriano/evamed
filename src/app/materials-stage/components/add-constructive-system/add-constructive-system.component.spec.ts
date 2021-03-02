import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConstructiveSystemComponent } from './add-constructive-system.component';

describe('AddConstructiveSystemComponent', () => {
  let component: AddConstructiveSystemComponent;
  let fixture: ComponentFixture<AddConstructiveSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddConstructiveSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConstructiveSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
