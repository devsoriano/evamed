import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageStageComponent } from './usage-stage.component';

describe('UsageStageComponent', () => {
  let component: UsageStageComponent;
  let fixture: ComponentFixture<UsageStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsageStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsageStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
