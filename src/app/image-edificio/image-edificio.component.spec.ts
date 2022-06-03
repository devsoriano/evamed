import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageEdificioComponent } from './image-edificio.component';

describe('ImageEdificioComponent', () => {
  let component: ImageEdificioComponent;
  let fixture: ComponentFixture<ImageEdificioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageEdificioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageEdificioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
