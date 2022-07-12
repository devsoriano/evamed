import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePotentialComponent } from './update-potential.component';

describe('UpdatePotentialComponent', () => {
  let component: UpdatePotentialComponent;
  let fixture: ComponentFixture<UpdatePotentialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePotentialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePotentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
