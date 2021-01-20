import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionStageUpdateComponent } from './construction-stage-update.component';

describe('ConstructionStageUpdateComponent', () => {
  let component: ConstructionStageUpdateComponent;
  let fixture: ComponentFixture<ConstructionStageUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructionStageUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionStageUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
