import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsStageComponent } from './materials-stage.component';

describe('MaterialsStageComponent', () => {
  let component: MaterialsStageComponent;
  let fixture: ComponentFixture<MaterialsStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialsStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialsStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
