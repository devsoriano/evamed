import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePotentialMachineryComponent } from './delete-potential-machinery.component';

describe('DeletePotentialMachineryComponent', () => {
  let component: DeletePotentialMachineryComponent;
  let fixture: ComponentFixture<DeletePotentialMachineryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePotentialMachineryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePotentialMachineryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
