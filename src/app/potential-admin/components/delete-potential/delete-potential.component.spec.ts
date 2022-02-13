import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePotentialComponent } from './delete-potential.component';

describe('DeletePotentialComponent', () => {
  let component: DeletePotentialComponent;
  let fixture: ComponentFixture<DeletePotentialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePotentialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePotentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
