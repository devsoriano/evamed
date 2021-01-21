import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageStageUpdateComponent } from './usage-stage-update.component';

describe('UsageStageUpdateComponent', () => {
  let component: UsageStageUpdateComponent;
  let fixture: ComponentFixture<UsageStageUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsageStageUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsageStageUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
