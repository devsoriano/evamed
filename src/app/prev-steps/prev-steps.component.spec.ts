import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevStepsComponent } from './prev-steps.component';

describe('PrevStepsComponent', () => {
  let component: PrevStepsComponent;
  let fixture: ComponentFixture<PrevStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
