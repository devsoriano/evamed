import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMachineryComponent } from './update-machinery.component';

describe('UpdateMachineryComponent', () => {
  let component: UpdateMachineryComponent;
  let fixture: ComponentFixture<UpdateMachineryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMachineryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMachineryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
