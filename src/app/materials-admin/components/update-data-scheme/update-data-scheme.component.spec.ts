import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDataSchemeComponent } from './update-data-scheme.component';

describe('UpdateDataSchemeComponent', () => {
  let component: UpdateDataSchemeComponent;
  let fixture: ComponentFixture<UpdateDataSchemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDataSchemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDataSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
