import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseTypeOfProjectComponent } from './choose-type-of-project.component';

describe('ChooseTypeOfProjectComponent', () => {
  let component: ChooseTypeOfProjectComponent;
  let fixture: ComponentFixture<ChooseTypeOfProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseTypeOfProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseTypeOfProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
