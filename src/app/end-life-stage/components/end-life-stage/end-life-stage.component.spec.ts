import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndLifeStageComponent } from './end-life-stage.component';

describe('EndLifeStageComponent', () => {
  let component: EndLifeStageComponent;
  let fixture: ComponentFixture<EndLifeStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndLifeStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndLifeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
