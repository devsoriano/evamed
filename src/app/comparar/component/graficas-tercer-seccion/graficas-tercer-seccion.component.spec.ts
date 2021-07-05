import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasTercerSeccionComponent } from './graficas-tercer-seccion.component';

describe('GraficasTercerSeccionComponent', () => {
  let component: GraficasTercerSeccionComponent;
  let fixture: ComponentFixture<GraficasTercerSeccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficasTercerSeccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficasTercerSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
