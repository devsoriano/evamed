import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConstructiveElementComponent } from './add-constructive-element.component';

describe('AddConstructiveElementComponent', () => {
  let component: AddConstructiveElementComponent;
  let fixture: ComponentFixture<AddConstructiveElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddConstructiveElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConstructiveElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
