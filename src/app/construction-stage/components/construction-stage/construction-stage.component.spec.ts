import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionStageComponent } from './construction-stage.component';

describe('ConstructionStageComponent', () => {
  let component: ConstructionStageComponent;
  let fixture: ComponentFixture<ConstructionStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructionStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
