import { Component, EventEmitter, OnInit, Output} from '@angular/core';
@Component({
  selector: 'app-grafica-de-barras',
  templateUrl: './grafica-de-barras.component.html',
  styleUrls: ['./grafica-de-barras.component.scss']
})
export class GraficaDeBarrasComponent implements OnInit {
  selector:string;
  @Output() selectorEvent = new EventEmitter<string>();
  public datos_bar = [
    {
      Nombre : 'Proyecto 1',
      id:0,
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
      Nombre: 'Proyecto 2',
      id:1,
      Datos: {
        'Indicador X': {
          Producción: Math.random(),
          Construccion: Math.random(),
          Uso: Math.random(),
          FinDeVida: Math.random(),
        },
        'Indicador 2': {
          Producción: Math.random(),
          Construccion: Math.random(),
          Uso: Math.random(),
          FinDeVida: Math.random(),
        },
        'Indicador 3': {
          Producción: Math.random(),
          Construccion: Math.random(),
          Uso: Math.random(),
          FinDeVida: Math.random(),
        },
        'Indicador 4': {
          Producción: Math.random(),
          Construccion: Math.random(),
          Uso: Math.random(),
          FinDeVida: Math.random(),
        },
        'Indicador 5': {
          Producción: Math.random(),
          Construccion: Math.random(),
          Uso: Math.random(),
          FinDeVida: Math.random(),
        },
        'Indicador 6': {
          Producción: Math.random(),
          Construccion: Math.random(),
          Uso: Math.random(),
          FinDeVida: Math.random(),
        },
        'Indicador 7': {
          Producción: Math.random(),
          Construccion: Math.random(),
          Uso: Math.random(),
          FinDeVida: Math.random(),
        }
      }
    },
    {
      Nombre : 'Proyecto 3',
      id:2,
      Datos : {
        'Indicador X' : {
          Producción : Math.random(),
          Construccion : Math.random(),
          Uso : Math.random(),
          FinDeVida : Math.random(),
        },
        'Indicador 2': {
          Producción: Math.random(),
          Construccion: Math.random(),
          Uso: Math.random(),
          FinDeVida: Math.random(),
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

  datos_radar=[
    {
      Nombre: 'Proyecto 1',
      id: 0,
      Datos: {
        'Producción': {
          'Indicador X': Math.random(),
          'Indicador 2': Math.random(),
          'Indicador 3': Math.random(),
          'Indicador 4': Math.random(),
          'Indicador 5': Math.random(),
          'Indicador 6': Math.random(),
          'Indicador 7': Math.random(),
        },
        'Construccion': {
          'Indicador X': Math.random(),
          'Indicador 2': Math.random(),
          'Indicador 3': Math.random(),
          'Indicador 4': Math.random(),
          'Indicador 5': Math.random(),
          'Indicador 6': Math.random(),
          'Indicador 7': Math.random(),
        },
        'Uso': {
          'Indicador X': Math.random(),
          'Indicador 2': Math.random(),
          'Indicador 3': Math.random(),
          'Indicador 4': Math.random(),
          'Indicador 5': Math.random(),
          'Indicador 6': Math.random(),
          'Indicador 7': Math.random(),
        },
        'FinDeVida': {
          'Indicador X': Math.random(),
          'Indicador 2': Math.random(),
          'Indicador 3': Math.random(),
          'Indicador 4': Math.random(),
          'Indicador 5': Math.random(),
          'Indicador 6': Math.random(),
          'Indicador 7': Math.random(),
        },
      }
    },
    {
      Nombre: 'Proyecto 2',
      id: 1,
      Datos: {
        'Producción': {
          'Indicador X': Math.random(),
          'Indicador 2': Math.random(),
          'Indicador 3': Math.random(),
          'Indicador 4': Math.random(),
          'Indicador 5': Math.random(),
          'Indicador 6': Math.random(),
          'Indicador 7': Math.random(),
        },
        'Construccion': {
          'Indicador X': Math.random(),
          'Indicador 2': Math.random(),
          'Indicador 3': Math.random(),
          'Indicador 4': Math.random(),
          'Indicador 5': Math.random(),
          'Indicador 6': Math.random(),
          'Indicador 7': Math.random(),
        },
        'Uso': {
          'Indicador X': Math.random(),
          'Indicador 2': Math.random(),
          'Indicador 3': Math.random(),
          'Indicador 4': Math.random(),
          'Indicador 5': Math.random(),
          'Indicador 6': Math.random(),
          'Indicador 7': Math.random(),
        },
        'FinDeVida': {
          'Indicador X': Math.random(),
          'Indicador 2': Math.random(),
          'Indicador 3': Math.random(),
          'Indicador 4': Math.random(),
          'Indicador 5': Math.random(),
          'Indicador 6': Math.random(),
          'Indicador 7': Math.random(),
        },
      }
    },
    {
      Nombre: 'Proyecto 3',
      id: 2,
      Datos: {
        'Producción': {
          'Indicador X': Math.random(),
          'Indicador 2': Math.random(),
          'Indicador 3': Math.random(),
          'Indicador 4': Math.random(),
          'Indicador 5': Math.random(),
          'Indicador 6': Math.random(),
          'Indicador 7': Math.random(),
        },
        'Construccion': {
          'Indicador X': Math.random(),
          'Indicador 2': Math.random(),
          'Indicador 3': Math.random(),
          'Indicador 4': Math.random(),
          'Indicador 5': Math.random(),
          'Indicador 6': Math.random(),
          'Indicador 7': Math.random(),
        },
        'Uso': {
          'Indicador X': Math.random(),
          'Indicador 2': Math.random(),
          'Indicador 3': Math.random(),
          'Indicador 4': Math.random(),
          'Indicador 5': Math.random(),
          'Indicador 6': Math.random(),
          'Indicador 7': Math.random(),
        },
        'FinDeVida': {
          'Indicador X': Math.random(),
          'Indicador 2': Math.random(),
          'Indicador 3': Math.random(),
          'Indicador 4': Math.random(),
          'Indicador 5': Math.random(),
          'Indicador 6': Math.random(),
          'Indicador 7': Math.random(),
        },
      }
    }
  ];

  datos_pie=[
    {
      Nombre: 'Proyecto 1',
      id: 0,
      Datos:{
        'Indicador X':{
          'Producción':{
            'Subproceso 1':Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Construccion': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Uso': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'FinDeVida': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          }
        },
        'Indicador 2': {
          'Producción': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Construccion': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Uso': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'FinDeVida': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          }
        },
        'Indicador 3': {
          'Producción': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Construccion': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Uso': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'FinDeVida': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          }
         },
        'Indicador 4': {
          'Producción': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Construccion': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Uso': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'FinDeVida': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          }
         },
        'Indicador 5': {
          'Producción': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Construccion': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Uso': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'FinDeVida': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          }
         },
        'Indicador 6': {
          'Producción': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Construccion': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Uso': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'FinDeVida': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          }
         },
        'Indicador 7': {
          'Producción': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Construccion': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Uso': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'FinDeVida': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          }
         }
      }
    },
    {
      Nombre: 'Proyecto 2',
      id: 1,
      Datos: {
        'Indicador X': {
          'Producción': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Construccion': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Uso': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'FinDeVida': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          }
        },
        'Indicador 2': {
          'Producción': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Construccion': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Uso': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'FinDeVida': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          }
        },
        'Indicador 3': {
          'Producción': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Construccion': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Uso': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'FinDeVida': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          }
        },
        'Indicador 4': {
          'Producción': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Construccion': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Uso': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'FinDeVida': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          }
        },
        'Indicador 5': {
          'Producción': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Construccion': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Uso': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'FinDeVida': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          }
        },
        'Indicador 6': {
          'Producción': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Construccion': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Uso': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'FinDeVida': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          }
        },
        'Indicador 7': {
          'Producción': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Construccion': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Uso': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'FinDeVida': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          }
        }
      }
    },
    {
      Nombre: 'Proyecto 3',
      id: 2,
      Datos: {
        'Indicador X': {
          'Producción': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Construccion': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Uso': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'FinDeVida': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          }
        },
        'Indicador 2': {
          'Producción': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Construccion': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Uso': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'FinDeVida': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          }
        },
        'Indicador 3': {
          'Producción': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Construccion': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Uso': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'FinDeVida': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          }
        },
        'Indicador 4': {
          'Producción': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Construccion': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Uso': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'FinDeVida': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          }
        },
        'Indicador 5': {
          'Producción': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Construccion': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Uso': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'FinDeVida': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          }
        },
        'Indicador 6': {
          'Producción': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Construccion': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Uso': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'FinDeVida': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          }
        },
        'Indicador 7': {
          'Producción': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Construccion': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'Uso': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          },
          'FinDeVida': {
            'Subproceso 1': Math.random(),
            'Subproceso 2': Math.random(),
            'Subproceso 3': Math.random(),
            'Subproceso 4': Math.random()
          }
        }
      }
    }
  ];

  constructor() {}

  ngOnInit(): void {}

}
