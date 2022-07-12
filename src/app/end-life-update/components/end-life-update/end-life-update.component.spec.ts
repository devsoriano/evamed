import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndLifeUpdateComponent } from './end-life-update.component';

describe('EndLifeUpdateComponent', () => {
  let component: EndLifeUpdateComponent;
  let fixture: ComponentFixture<EndLifeUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndLifeUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndLifeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
