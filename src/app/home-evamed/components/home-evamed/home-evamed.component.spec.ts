import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEvamedComponent } from './home-evamed.component';

describe('HomeEvamedComponent', () => {
  let component: HomeEvamedComponent;
  let fixture: ComponentFixture<HomeEvamedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEvamedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEvamedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
