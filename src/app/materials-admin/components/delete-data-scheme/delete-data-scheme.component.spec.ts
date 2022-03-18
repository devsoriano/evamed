import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDataSchemeComponent } from './delete-data-scheme.component';

describe('DeleteDataSchemeComponent', () => {
  let component: DeleteDataSchemeComponent;
  let fixture: ComponentFixture<DeleteDataSchemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDataSchemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDataSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
