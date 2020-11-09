import { Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-grafica-de-barras',
  templateUrl: './grafica-de-barras.component.html',
  styleUrls: ['./grafica-de-barras.component.scss']
})
export class GraficaDeBarrasComponent implements OnInit {
  public porcentaje = false;
  public datos = [
    {
      Nombre : 'Proyecto 1',
      Datos : {
        'Indicador X' : {
          Producción : Math.random(),
          Construccion : Math.random(),
          Uso : Math.random(),
          FinDeVida : Math.random(),
        },
        'Indicador 2' : {
          Producción : Math.random(),
          Construccion : Math.random(),
          Uso : Math.random(),
          FinDeVida : Math.random(),
        },
        'Indicador 3' : {
          Producción : Math.random(),
          Construccion : Math.random(),
          Uso : Math.random(),
          FinDeVida : Math.random(),
        },
        'Indicador 4' : {
          Producción : Math.random(),
          Construccion : Math.random(),
          Uso : Math.random(),
          FinDeVida : Math.random(),
        },
        'Indicador 5' : {
          Producción : Math.random(),
          Construccion : Math.random(),
          Uso : Math.random(),
          FinDeVida : Math.random(),
        },
        'Indicador 6' : {
          Producción : Math.random(),
          Construccion : Math.random(),
          Uso : Math.random(),
          FinDeVida : Math.random(),
        },
        'Indicador 7' : {
          Producción : Math.random(),
          Construccion : Math.random(),
          Uso : Math.random(),
          FinDeVida : Math.random(),
        }
      }
    },
    {
      Nombre : 'Proyecto 2',
      Datos : {
        'Indicador X' : {
          Producción : Math.random(),
          Construccion : Math.random(),
          Uso : Math.random(),
          FinDeVida : Math.random(),
        },
        'Indicador 3' : {
          Producción : Math.random(),
          Construccion : Math.random(),
          Uso : Math.random(),
          FinDeVida : Math.random(),
        },
        'Indicador 4' : {
          Producción : Math.random(),
          Construccion : Math.random(),
          Uso : Math.random(),
          FinDeVida : Math.random(),
        },
        'Indicador 5' : {
          Producción : Math.random(),
          Construccion : Math.random(),
          Uso : Math.random(),
          FinDeVida : Math.random(),
        },
        'Indicador 6' : {
          Producción : Math.random(),
          Construccion : Math.random(),
          Uso : Math.random(),
          FinDeVida : Math.random(),
        },
        'Indicador 7' : {
          Producción : Math.random(),
          Construccion : Math.random(),
          Uso : Math.random(),
          FinDeVida : Math.random(),
        }
      }
    }
  ];

  constructor() {}

  ngOnInit(): void {}

}
