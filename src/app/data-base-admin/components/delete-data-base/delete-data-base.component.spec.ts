import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDataBaseComponent } from './delete-data-base.component';

describe('DeleteDataBaseComponent', () => {
  let component: DeleteDataBaseComponent;
  let fixture: ComponentFixture<DeleteDataBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDataBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDataBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
