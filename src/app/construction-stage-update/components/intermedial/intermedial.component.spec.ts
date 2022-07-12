import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermedialComponent } from './intermedial.component';

describe('IntermedialComponent', () => {
  let component: IntermedialComponent;
  let fixture: ComponentFixture<IntermedialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntermedialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntermedialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
