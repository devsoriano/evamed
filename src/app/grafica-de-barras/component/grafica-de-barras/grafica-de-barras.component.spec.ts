import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaDeBarrasComponent } from './grafica-de-barras.component';

describe('GraficaDeBarrasComponent', () => {
  let component: GraficaDeBarrasComponent;
  let fixture: ComponentFixture<GraficaDeBarrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaDeBarrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaDeBarrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
