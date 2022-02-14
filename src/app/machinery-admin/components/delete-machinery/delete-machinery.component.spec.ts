import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMachineryComponent } from './delete-machinery.component';

describe('DeleteMachineryComponent', () => {
  let component: DeleteMachineryComponent;
  let fixture: ComponentFixture<DeleteMachineryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteMachineryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMachineryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
