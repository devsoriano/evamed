import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeNameProjectComponent } from './change-name-project.component';

describe('ChangeNameProjectComponent', () => {
  let component: ChangeNameProjectComponent;
  let fixture: ComponentFixture<ChangeNameProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeNameProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeNameProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
