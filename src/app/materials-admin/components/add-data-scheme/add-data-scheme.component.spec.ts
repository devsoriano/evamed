import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDataSchemeComponent } from './add-data-scheme.component';

describe('AddDataSchemeComponent', () => {
  let component: AddDataSchemeComponent;
  let fixture: ComponentFixture<AddDataSchemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDataSchemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDataSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
