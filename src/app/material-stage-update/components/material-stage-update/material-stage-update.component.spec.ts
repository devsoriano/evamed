import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialStageUpdateComponent } from './material-stage-update.component';

describe('MaterialStageUpdateComponent', () => {
  let component: MaterialStageUpdateComponent;
  let fixture: ComponentFixture<MaterialStageUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialStageUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialStageUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
