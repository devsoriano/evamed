import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPotentialComponent } from './add-potential.component';

describe('AddPotentialComponent', () => {
  let component: AddPotentialComponent;
  let fixture: ComponentFixture<AddPotentialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPotentialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPotentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
