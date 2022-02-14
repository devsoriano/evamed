import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePotentialMachineryComponent } from './update-potential-machinery.component';

describe('UpdatePotentialMachineryComponent', () => {
  let component: UpdatePotentialMachineryComponent;
  let fixture: ComponentFixture<UpdatePotentialMachineryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePotentialMachineryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePotentialMachineryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
