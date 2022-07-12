import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassStepComponent } from './pass-step.component';

describe('PassStepComponent', () => {
  let component: PassStepComponent;
  let fixture: ComponentFixture<PassStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
