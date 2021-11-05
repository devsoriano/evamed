import { Component, NgModule, OnInit } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-graficas-tercer-seccion',
  templateUrl: './graficas-tercer-seccion.component.html',
  styleUrls: ['./graficas-tercer-seccion.component.scss']
})

export class GraficasTercerSeccionComponent implements OnInit {

  @Input() inputProyect: any;
  @Input() impactoAmbientalMostrado: String;
  @Input() ElementosContructivosEliminados:any;
  @Input() FasesEliminadas:any;
  @Input() FaseSeleccionada:String;
  @Input() materiales:any;
  @Input() Secciones:any;
  @Input() EstadoSeccion:any;
  @Output() CambioEstadoTercerSeccion = new EventEmitter<any>();

  public InfoMostrada=[];
  botones_elementos_constructivos=[];
  elementoContructivoSelecionado = " ";
  private CicloColores = { FinDeVida: '#DEA961', Uso : '#8F5091', Construccion: '#148A93', Producción : '#4DBE89', General : '#a8d024',B4 : '#8F5091', A4: '#148A93', A1 : '#4DBE89', A2 : '#319F6B', A3:'#368460'};
  private CicloColoresBW = {Producción : 'rgba(77,190,137,0.2)', Construccion : 'rgba(20,136,147,0.2)', Uso : 'rgba(143,80,145,0.2)',B4 : 'rgba(143, 80, 145, 0.2)', A4: 'rgba(20, 138, 147, 0.2)', A1 : 'rgba(77, 190, 137, 0.2)', A2 : 'rgba(49, 159, 107, 0.2)', A3:'rgba(54, 132, 96, 0.2)'};
  private CicloColoresRGB = {Uso : 'rgb(143, 80, 145)', Construccion: 'rgb(20, 138, 147)', Producción : 'rgb(77, 190, 137)',B4 : 'rgb(143, 80, 145)', A4: 'rgb(20, 138, 147)', A1 : 'rgb(77, 190, 137)', A2 : 'rgb(49, 159, 107)', A3:'rgb(54, 132, 96)'};
  public displayedColumnsDispercion: string[] = ['no', 'material', 'porcentaje', 'numero'];
  public doughnutChartType = 'doughnut';
  public pieChartOptions = {
    responsive: false,
    maintainAspectRatio: false,
    layout: {
      padding: 0,
    },
    events: ['click'],
    elements: { arc: { borderWidth: 0 } },
    tooltips: { enabled: false },
    hover: { mode: null },
    plugins: {
      datalabels: {
        color: '#FFFFFF',
        font: {
          size: 8,
        },
      },
    },
  };
  public pieChartOptionsDos = {
    responsive: false,
    maintainAspectRatio: false,
    layout: {
      padding: 0,
    },
    events: ['click'],
    elements: { arc: { borderWidth: 0 } },
    tooltips: { enabled: false },
    hover: { mode: null },
    plugins: {
      datalabels: {
        formatter: (val, ctx) => {
          return ctx.chart.data.labels[ctx.dataIndex];
        },
        color: '#FFFFFF',
        font: {
          size: 8,
        },
      },
    },
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];
  public barChartOptions: ChartOptions = {
    responsive: true,
    title: { display: true },
    legend: { display: false },
    tooltips: { enabled: false, mode: 'label' },
    scales: {
      yAxes: [
        {
          display: true,
          ticks: {
            beginAtZero: true,
            fontSize: 11,
          },
        },
      ],
      xAxes: [
        {
          display: true,
          ticks: {
            beginAtZero: true,
            fontSize: 11,
          },
        },
      ],
    },
    plugins: {
      datalabels: {
        color: 'white',
        anchor: 'center',
        align: 'center',
        font: {
          size: 7,
        },
      },
    },
  };
  
  constructor() { }

  ngOnInit(): void {
    this.botones_elementos_constructivos = this.Secciones;
    this.AjusteDatos()
  }

  ngAfterViewInit():void{
    this.actualizarEstado();
  }

  AjusteDatos(){
    this.inputProyect.forEach(proyecto => { 
      let aux = {};
      aux['id']=proyecto.idproyecto;
      aux['nombre']=proyecto.nombre;
      aux['CicloGraficaPie']=true;
      aux['CicloGraficaBar']=false;
      aux['ElementosConstructivosGrafica']=false;
      aux['DispercionElementoGrafica']=false;
      aux['flagAgruparProduccion'] = this.EstadoSeccion[aux['id']]['agruparProduccion'];
      aux['textoBotonAgrupar'] = "Desagrupar"
      aux['DatosMateriales'] = proyecto.data['materiales'][this.impactoAmbientalMostrado.toString()];
      aux['DispercionElementos'] = proyecto.data['Calculos'][this.impactoAmbientalMostrado.toString()];
      if(this.FaseSeleccionada!=' ' || this.EstadoSeccion[aux['id']]['cicloSeleccionado'] != ' '){
        let seleccion = " ";
        if(this.FaseSeleccionada!=' '){
          seleccion = this.FaseSeleccionada.toString();
        }else{
          seleccion = this.EstadoSeccion[aux['id']]['cicloSeleccionado'];
        }
        aux['CicloSeleccionado'] = seleccion
        aux['Coloreslementos'] = this.ColoresElementos(aux['DispercionElementos'],seleccion,aux['flagAgruparProduccion']);
        aux['DatosElementosConstructivos']=this.GraficaElementosContructivos(aux['Coloreslementos']['valores'],aux['Coloreslementos']['colores']);
        aux['ElementosConstructivosGrafica']=true;
        aux['infoTabla'] = this.IniciarTablaMateriales(aux['DatosMateriales'], aux['CicloSeleccionado'],1,aux['flagAgruparProduccion']," ");
        let auxgrafica = this.IniciarGraficaMateriales(aux['DatosMateriales'], aux['CicloSeleccionado'], aux['CicloSeleccionado'],1,aux['flagAgruparProduccion']);
        aux['DataGraficaMateriales']=auxgrafica['grafica'];
        aux['labelsMateriales'] = auxgrafica['labels'];
        aux['iconosElementosConstrucivos']=this.AjustarElementosMostrados(proyecto.data['Calculos'][this.impactoAmbientalMostrado.toString()],seleccion.toString(),aux['flagAgruparProduccion'])
      }else{
        aux['DatosElementosConstructivos']=[];
        aux['CicloSeleccionado'] = ' '
        aux['iconosElementosConstrucivos']={};
        aux['infoTabla'] = this.IniciarTablaMateriales(aux['DatosMateriales'],"",0,aux['flagAgruparProduccion']," ");
        let auxgrafica = this.IniciarGraficaMateriales(aux['DatosMateriales'],"","General",0,aux['flagAgruparProduccion']);
        aux['DataGraficaMateriales']=auxgrafica['grafica'];
        aux['labelsMateriales'] = auxgrafica['labels'];
        aux['Coloreslementos'] = {};
      }
      aux['DatosCicloVida']=this.GraficaCicloVida(proyecto.data['Calculos'][this.impactoAmbientalMostrado.toString()],aux['CicloSeleccionado'],aux['flagAgruparProduccion']);
      aux['LabelsCicloVida'] = this.EncontrarLabels(proyecto.data['Calculos'][this.impactoAmbientalMostrado.toString()]);
      aux['LabelsElementos'] = this.EncontrarLabelsElementos(proyecto.data['Calculos'][this.impactoAmbientalMostrado.toString()],aux['CicloSeleccionado'])
      aux['CicloVida'] = proyecto.data['Calculos'][this.impactoAmbientalMostrado.toString()];
      aux['ElementoConstructivoSeleccionado'] = ' ';
      aux['nombreSeccionMostrado'] = ' ';
      aux['idsIconosElementos']=this.llenarIdsBotones(this.Secciones,proyecto.idproyecto);
      aux['coloresBotonesElementos']=this.llenarColoresBotonesElementos(this.Secciones,aux['Coloreslementos']['colores'],aux['Coloreslementos']['orden'])
      let botonesCiclo = this.llenarBotonesCiclo(aux['flagAgruparProduccion'],aux['id']);
      aux['botonesCiclo'] = botonesCiclo['botones']
      aux['ids_RespuestasBotones'] = botonesCiclo
      this.InfoMostrada.push(aux);
    })
  }
  
  actualizarEstado(){
    let auxSubetapas={'Producción':['A1','A2','A3'],'Construccion':['A4'],'Uso':['B4']}
    let etapas=['Producción','Construccion','Uso']
    this.InfoMostrada.forEach((proyecto,index) => {
      if(this.InfoMostrada[index]['CicloSeleccionado'] != ' '){
        let ciclo = this.InfoMostrada[index]['CicloSeleccionado']
        if(this.InfoMostrada[index]['flagAgruparProduccion'] && etapas.includes(ciclo)){
          auxSubetapas[ciclo].forEach(auxC => {
            document.getElementById(this.InfoMostrada[index]['id'].toString().concat(auxC.concat('botonC'))).className = 'espacio-seleccionado';
          });
        }else{
          document.getElementById(this.InfoMostrada[index]['id'].toString().concat(ciclo.concat('botonC'))).className = 'espacio-seleccionado';
        }
      }
      if(!this.InfoMostrada[index]['flagAgruparProduccion']){
        let elementoC = this.EstadoSeccion[this.InfoMostrada[index]['id']]['elementoConstructivoSeleccionado'];
        if(elementoC != " "){
          this.onChartClickElemento(elementoC,this.InfoMostrada[index]['id'])
        }
      }
    });
  }

  llenarBotonesCiclo(agrupar,idP){
    let botones = {'idsBotones' : {},'botones':[], 'respuesta':{},'colores':{}}
    if(agrupar){
      //Todas las subetapas
      let auxBotones = ['A1','A2','A3', 'A4', 'B4']
      let auxBotonesEtapa = {'A1':'Producción','A2':'Producción','A3':'Producción', 'A4':'Construccion', 'B4':'Uso'}
      auxBotones.forEach(element => {
        let bandera = true;
        this.FasesEliminadas.forEach(etapaElimanada => {
          if(auxBotonesEtapa[element] === etapaElimanada){
            bandera=false;
          }
        });
        if(bandera){
          botones['botones'].push(element);
          botones['idsBotones'][element] = idP.toString().concat(element.concat('botonC'))
          botones['respuesta'][element] = element
          botones['colores'][element] = this.CicloColores[element]
        }
      });
    }else{
      //producción agrupado
      let auxBotones = {'A1 - A3':'Producción', 'A4':'Construccion', 'B4':'Uso'}
      Object.keys(auxBotones).forEach(element => {
        let bandera = true;
        this.FasesEliminadas.forEach(etapaElimanada => {
          if(auxBotones[element] === etapaElimanada){
            bandera=false;
          }
        });
        if(bandera){
          botones['botones'].push(element);
          botones['idsBotones'][element] = idP.toString().concat(auxBotones[element].concat('botonC'))
          botones['respuesta'][element] = auxBotones[element]
          botones['colores'][element] = this.CicloColores[auxBotones[element]]
        }
      });
    }
    return botones
  }

  EncontrarLabels(data){
    let aux = [];
    Object.keys(data).forEach((etapa,index) =>{
      let bandera = true;
      this.FasesEliminadas.forEach(element => {
        if(element === etapa){
          bandera=false;
        }
      });
      if(bandera){
        aux.push(etapa);
      }
    });
    return aux;
  }

  EncontrarLabelsElementos(data,ciclo){
    let aux = [];
    Object.keys(data).forEach(fase =>{
      if(ciclo===fase){
        Object.keys(data[fase]).forEach(subetapa =>{
          Object.keys(data[fase][subetapa]).forEach(ElementoC =>{
            let banderaElemento = true;
            this.ElementosContructivosEliminados.forEach(ElementoI => {
              if(ElementoI === ElementoC){
                banderaElemento=false;
              }
            });
            if(banderaElemento){
              aux.push(ElementoC);
            }
          })
        })
      }
    })
    return aux;
  }

  GraficaElementosContructivos(data,colores){
    let aux = [];
    aux = [
      {
        data: data,
        backgroundColor: colores,
      },
    ];
    return aux;
  }

  ColoresElementos(data,ciclo,flagAgrupar){
    let auxColoresElementos = [];
    let auxcolordos = [];
    let auxcolor = [];
    let valores = [];
    let help = this.CicloColoresRGB[ciclo].match(/rgb?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
    let cambioR= help[1];
    let auxValores={};
    let suma =0;
    Object.keys(data).forEach(fase =>{
      if(ciclo===fase || flagAgrupar){
        Object.keys(data[fase]).forEach(subetapa =>{
          let flagSubetapa = false;
          if(flagAgrupar){
            if(subetapa == ciclo){
              flagSubetapa = true;
            }else{
              let auxSubetapas={'Producción':['A1','A2','A3'],'Construccion':['A4'],'Uso':['B4']}
              Object.keys(auxSubetapas).forEach(auxetapa=>{
                if(auxetapa === ciclo){
                  flagSubetapa=true;
                }
              })
            }
          }else{
            flagSubetapa = true;
          }
          if(flagSubetapa){
            Object.keys(data[fase][subetapa]).forEach(ElementoC =>{
              let banderaElemento = true;
              this.ElementosContructivosEliminados.forEach(ElementoI => {
                if(ElementoI === ElementoC){
                  banderaElemento=false;
                }
              });
              if(banderaElemento){
                suma = suma + data[fase][subetapa][ElementoC];
              }
            })
          }
        });
        let elementosExistente = [];
        Object.keys(data[fase]).forEach(subetapa =>{
          let flagSubetapa = false;
          if(flagAgrupar){
            if(subetapa == ciclo){
              flagSubetapa = true;
            }else{
              let auxSubetapas={'Producción':['A1','A2','A3'],'Construccion':['A4'],'Uso':['B4']}
              Object.keys(auxSubetapas).forEach(auxetapa=>{
                if(auxetapa === ciclo){
                  flagSubetapa=true;
                }
              })
            }
          }else{
            flagSubetapa = true;
          }
          if(flagSubetapa){
            Object.keys(data[fase][subetapa]).forEach(ElementoC =>{
              let banderaElemento = true;
              this.ElementosContructivosEliminados.forEach(ElementoI => {
                if(ElementoI === ElementoC){
                  banderaElemento=false;
                }
              });
              if(banderaElemento){
                if(!elementosExistente.includes(ElementoC)){
                  auxColoresElementos.push(ElementoC);
                  elementosExistente.push(ElementoC);
                  let auxrgbcolor='rgb(';
                  auxrgbcolor = auxrgbcolor.concat(cambioR.toString()).concat(',').concat(help[2]).concat(',').concat(help[3]).concat(')');
                  let auxrgbacolor='rgba(';
                  auxrgbacolor = auxrgbacolor.concat(cambioR.toString()).concat(',').concat(help[2]).concat(',').concat(help[3]).concat(',').concat('0.2').concat(')');
                  auxcolor.push(auxrgbcolor);
                  auxcolordos.push(auxrgbacolor);
                  cambioR = (Number(cambioR) + 50).toString();
                  auxValores[ElementoC] = 0;
                }
                auxValores[ElementoC] += data[fase][subetapa][ElementoC];
              }
            })
          }
        });
      }
    })
    Object.keys(auxValores).forEach(elementoC => {
      valores.push(((auxValores[elementoC]/suma)*100).toFixed(2))
    })
    let resultado= {'orden':auxColoresElementos,'colores':auxcolor,'coloresbtw':auxcolordos,'valores':valores}
    return resultado;
  }

  GraficaCicloVida(data,flagColor,flagAgrupar){
    let aux = [];
    let auxdata = [];
    let auxcolor = [];
    let Data={};
    let suma = 0;
    let subetpascreadas = [];
    Object.keys(data).forEach((etapa,index) =>{
      let bandera = true;
      this.FasesEliminadas.forEach(element => {
        //Asegurar que el ciclo de vida no este eliminado
        if(element === etapa){
          bandera=false;
        }
      });
      if(bandera){
        Object.keys(data[etapa]).forEach(subetapa =>{
          let subEtpaOEtapa
          Object.keys(data[etapa][subetapa]).forEach(ElementoC =>{
            if(flagAgrupar){
              subEtpaOEtapa = subetapa;
              if(!subetpascreadas.includes(subetapa)){
                Data[subEtpaOEtapa] = 0;
                subetpascreadas.push(subetapa)
              }
            }else{
              subEtpaOEtapa = etapa
              if(!subetpascreadas.includes(etapa)){
                Data[subEtpaOEtapa] = 0;
                subetpascreadas.push(etapa)
              }
            }
            let banderaElemento = true;
            this.ElementosContructivosEliminados.forEach(ElementoI => {
              //Para asegurar que el elemento constructivo no este eliminado
              if(ElementoI === ElementoC){
                banderaElemento=false;
              }
            });
            if(banderaElemento){
              Data[subEtpaOEtapa] = Data[subEtpaOEtapa] + data[etapa][subetapa][ElementoC];
              suma = suma + data[etapa][subetapa][ElementoC];
            }
          })
        });
      }
    });
    Object.keys(Data).forEach((etapa,index) =>{
      auxdata.push(((Data[etapa]/suma)*100).toFixed(2))
    })
    if(flagColor != ' '){
      let auxSubetapas={'Producción':['A1','A2','A3'],'Construccion':['A4'],'Uso':['B4']}
      let etapas=['Producción','Construccion','Uso']
      if(flagAgrupar && etapas.includes(flagColor)){
        Object.keys(auxSubetapas).forEach(auxEt =>{
          if(auxEt === flagColor){
            auxSubetapas[auxEt].forEach(auxC => {
              auxcolor.push(this.CicloColores[auxC]);
            });
          }else{
            auxSubetapas[auxEt].forEach(auxC => {
              auxcolor.push(this.CicloColoresBW[auxC]);
            });
          }
        })
      }else{
        Object.keys(Data).forEach((etapa,index) =>{
          if(etapa === flagColor){
            auxcolor.push(this.CicloColores[etapa]);
          }else{
            auxcolor.push(this.CicloColoresBW[etapa]);
          }
        })
      }
    }else{
      Object.keys(Data).forEach((etapa,index) =>{
        auxcolor.push(this.CicloColores[etapa])
      })
    }

    aux = [
      {
        data: auxdata,
        backgroundColor: auxcolor,
      },
    ];
    return aux;
  }

  cambioGrafica(flag,idP){
    if(flag==1){
      this.InfoMostrada.forEach((proyecto,index) => {
        if(proyecto.id == idP){
          this.InfoMostrada[index]['CicloGraficaPie']=true;
          this.InfoMostrada[index]['CicloGraficaBar']=false;
        }
      })
    }else{
      this.InfoMostrada.forEach((proyecto,index) => {
        if(proyecto.id == idP){
          this.InfoMostrada[index]['CicloGraficaPie']=false;
          this.InfoMostrada[index]['CicloGraficaBar']=true;
        }
      })
    }
  }

  //Selección de una etapa del ciclo de vida, en un proyecto individual
  public onChartClick(ciclo,idP): void {
    this.InfoMostrada.forEach((proyecto,index) => {
      if(proyecto.id == idP){
        let resultado = " ";
        if(proyecto['CicloSeleccionado']=== ciclo){
          document.getElementById(this.InfoMostrada[index]['id'].toString().concat(ciclo.concat('botonC'))).className = 'espacio-sin-selecciomar';
          this.InfoMostrada[index]['CicloSeleccionado']=' ';
          resultado = ' ';
          this.InfoMostrada[index]['DatosCicloVida']=this.GraficaCicloVida(this.InfoMostrada[index]['CicloVida'],this.InfoMostrada[index]['CicloSeleccionado'],this.InfoMostrada[index]['flagAgruparProduccion']);
          this.InfoMostrada[index]['ElementosConstructivosGrafica'] = false;
          this.InfoMostrada[index]['infoTabla'] = this.IniciarTablaMateriales(this.InfoMostrada[index]['DatosMateriales'],"",0,this.InfoMostrada[index]['flagAgruparProduccion']," ");
          let auxgrafica = this.IniciarGraficaMateriales(this.InfoMostrada[index]['DatosMateriales'],"","General",0,this.InfoMostrada[index]['flagAgruparProduccion']);
          this.InfoMostrada[index]['DataGraficaMateriales']=auxgrafica['grafica'];
          this.InfoMostrada[index]['labelsMateriales'] = auxgrafica['labels'];
          this.InfoMostrada[index]['iconosElementosConstrucivos'] = {}
        }else{
          if(this.InfoMostrada[index]['CicloSeleccionado'] === " "){
            document.getElementById(this.InfoMostrada[index]['id'].toString().concat(ciclo.concat('botonC'))).className = 'espacio-seleccionado';
            console.log(this.InfoMostrada[index]['id'].toString().concat(ciclo.concat('botonC')))
          }else{
            let etapas=['Producción','Construccion','Uso'];
            let auxSubetapas={'Producción':['A1','A2','A3'],'Construccion':['A4'],'Uso':['B4']};
            let auxCiclo = this.InfoMostrada[index]['CicloSeleccionado'];
            if(this.InfoMostrada[index]['flagAgruparProduccion']  && etapas.includes(auxCiclo)){
              auxSubetapas[auxCiclo].forEach(auxC => {
                if(auxC === ciclo){
                  document.getElementById(this.InfoMostrada[index]['id'].toString().concat(auxC.concat('botonC'))).className = 'espacio-seleccionado';
                }else{
                  document.getElementById(this.InfoMostrada[index]['id'].toString().concat(auxC.concat('botonC'))).className = 'espacio-sin-selecciomar';
                }
              });
            }else{
              document.getElementById(this.InfoMostrada[index]['id'].toString().concat(this.InfoMostrada[index]['CicloSeleccionado'].concat('botonC'))).className = 'espacio-sin-selecciomar';
              document.getElementById(this.InfoMostrada[index]['id'].toString().concat(ciclo.concat('botonC'))).className = 'espacio-seleccionado';
            }
          }
          if(this.InfoMostrada[index]['ElementoConstructivoSeleccionado'] != " "){
            document.getElementById(this.InfoMostrada[index]['id'].toString().concat('texto'.concat(this.InfoMostrada[index]['ElementoConstructivoSeleccionado'].toString()))).className = 'espacio-sin-selecciomar';
            this.InfoMostrada[index]['ElementoConstructivoSeleccionado']=" "
          }
          this.InfoMostrada[index]['CicloSeleccionado']=ciclo;
          resultado = ciclo
          this.InfoMostrada[index]['Coloreslementos'] = this.ColoresElementos(this.InfoMostrada[index]['DispercionElementos'],this.InfoMostrada[index]['CicloSeleccionado'],this.InfoMostrada[index]['flagAgruparProduccion']);
          this.InfoMostrada[index]['iconosElementosConstrucivos']=this.AjustarElementosMostrados(this.InfoMostrada[index]['DispercionElementos'],ciclo,this.InfoMostrada[index]['flagAgruparProduccion'])
          this.InfoMostrada[index]['DatosElementosConstructivos']=this.GraficaElementosContructivos(this.InfoMostrada[index]['Coloreslementos']['valores'],this.InfoMostrada[index]['Coloreslementos']['colores']);
          this.InfoMostrada[index]['DatosCicloVida']=this.GraficaCicloVida(this.InfoMostrada[index]['CicloVida'],this.InfoMostrada[index]['CicloSeleccionado'],this.InfoMostrada[index]['flagAgruparProduccion']);
          this.InfoMostrada[index]['ElementosConstructivosGrafica'] = true;
          this.InfoMostrada[index]['infoTabla'] = this.IniciarTablaMateriales(this.InfoMostrada[index]['DatosMateriales'], this.InfoMostrada[index]['CicloSeleccionado'],1,this.InfoMostrada[index]['flagAgruparProduccion']," ");
          let auxgrafica = this.IniciarGraficaMateriales(this.InfoMostrada[index]['DatosMateriales'], this.InfoMostrada[index]['CicloSeleccionado'], this.InfoMostrada[index]['CicloSeleccionado'],1,this.InfoMostrada[index]['flagAgruparProduccion']);
          this.InfoMostrada[index]['DataGraficaMateriales']=auxgrafica['grafica'];
          this.InfoMostrada[index]['labelsMateriales'] = auxgrafica['labels'];
          this.InfoMostrada[index]['coloresBotonesElementos']=this.llenarColoresBotonesElementos(this.Secciones,this.InfoMostrada[index]['Coloreslementos']['colores'],this.InfoMostrada[index]['Coloreslementos']['orden']);
        }
        let aux = {'idProyecto':idP,'cambioEn':'CicloVida','cambio':resultado}
        this.CambioEstadoTercerSeccion.emit(aux);
      }
    });
  }

  public AjustarColoresGraficaElementos(datacolores,elementoSeleccionado){
    let aux = [];
    let auxcolores=[];
    if(elementoSeleccionado.toString()===' '){
      datacolores['orden'].forEach((elemento,index) => {
        auxcolores.push(datacolores['colores'][index])
      });
    }else{
      datacolores['orden'].forEach((elemento,index) => {
        if(elementoSeleccionado.toString() === elemento){
          auxcolores.push(datacolores['colores'][index])
        }else{
          auxcolores.push(datacolores['coloresbtw'][index])
        }
      });
    }
    aux = [
      {
        data: datacolores['valores'],
        backgroundColor: auxcolores,
      },
    ];
    return(aux);
  }

  public onChartClickElemento(idelemento,idP): void {
    this.InfoMostrada.forEach((proyecto,index) => {
      if(proyecto.id == idP){
        let resultado =" "
        if(proyecto.ElementoConstructivoSeleccionado === ' '){
          this.InfoMostrada[index]['ElementoConstructivoSeleccionado']=idelemento;
          resultado=idelemento;
          this.InfoMostrada[index]['DatosElementosConstructivos'] = this.AjustarColoresGraficaElementos(proyecto.Coloreslementos,this.InfoMostrada[index]['ElementoConstructivoSeleccionado']);
          let ciclo=this.InfoMostrada[index]['CicloSeleccionado'];
          let auxgrafica = this.IniciarGraficaMateriales(this.InfoMostrada[index]['DatosMateriales'],this.InfoMostrada[index]['ElementoConstructivoSeleccionado'],ciclo,2,this.InfoMostrada[index]['flagAgruparProduccion']);
          this.InfoMostrada[index]['DataGraficaMateriales']=auxgrafica['grafica'];
          this.InfoMostrada[index]['labelsMateriales'] = auxgrafica['labels'];
          this.InfoMostrada[index]['infoTabla'] = this.IniciarTablaMateriales(this.InfoMostrada[index]['DatosMateriales'],this.InfoMostrada[index]['ElementoConstructivoSeleccionado'],2,this.InfoMostrada[index]['flagAgruparProduccion'],this.InfoMostrada[index]['CicloSeleccionado']);
          let seccioninfo = this.Secciones.filter((bs)=> bs['id']==idelemento);
          this.InfoMostrada[index]['nombreSeccionMostrado'] = seccioninfo[0]['name_section'];
          this.InfoMostrada[index]['DispercionElementoGrafica']=true;
          document.getElementById(this.InfoMostrada[index]['id'].toString().concat('texto'.concat(idelemento.toString()))).className = 'espacio-seleccionado';
        }else{
          if(proyecto.ElementoConstructivoSeleccionado != idelemento){
            document.getElementById(this.InfoMostrada[index]['id'].toString().concat('texto'.concat(this.InfoMostrada[index]['ElementoConstructivoSeleccionado'].toString()))).className = 'espacio-sin-selecciomar';
            this.InfoMostrada[index]['ElementoConstructivoSeleccionado']=idelemento;
            resultado=idelemento;
            this.InfoMostrada[index]['DatosElementosConstructivos'] = this.AjustarColoresGraficaElementos(proyecto.Coloreslementos,this.InfoMostrada[index]['ElementoConstructivoSeleccionado']);
            let ciclo=this.InfoMostrada[index]['CicloSeleccionado'];
            let auxgrafica = this.IniciarGraficaMateriales(this.InfoMostrada[index]['DatosMateriales'],this.InfoMostrada[index]['ElementoConstructivoSeleccionado'],ciclo,2,this.InfoMostrada[index]['flagAgruparProduccion']);
            this.InfoMostrada[index]['DataGraficaMateriales']=auxgrafica['grafica'];
            this.InfoMostrada[index]['labelsMateriales'] = auxgrafica['labels'];
            this.InfoMostrada[index]['infoTabla'] = this.IniciarTablaMateriales(this.InfoMostrada[index]['DatosMateriales'],this.InfoMostrada[index]['ElementoConstructivoSeleccionado'],2,this.InfoMostrada[index]['flagAgruparProduccion'],this.InfoMostrada[index]['CicloSeleccionado']);
            let seccioninfo = this.Secciones.filter((bs)=> bs['id']==idelemento);
            this.InfoMostrada[index]['nombreSeccionMostrado'] = seccioninfo[0]['name_section'];
            this.InfoMostrada[index]['DispercionElementoGrafica']=true;
            document.getElementById(this.InfoMostrada[index]['id'].toString().concat('texto'.concat(idelemento.toString()))).className = 'espacio-seleccionado';
          }else{
            document.getElementById(this.InfoMostrada[index]['id'].toString().concat('texto'.concat(this.InfoMostrada[index]['ElementoConstructivoSeleccionado'].toString()))).className = 'espacio-sin-selecciomar';
            this.InfoMostrada[index]['ElementoConstructivoSeleccionado']=' ';
            resultado=" ";
            this.InfoMostrada[index]['nombreSeccionMostrado'] = ' ';
            this.InfoMostrada[index]['DatosElementosConstructivos'] = this.AjustarColoresGraficaElementos(proyecto.Coloreslementos,this.InfoMostrada[index]['ElementoConstructivoSeleccionado']);
            this.InfoMostrada[index]['DispercionElementoGrafica']=false;
            this.InfoMostrada[index]['infoTabla'] = this.IniciarTablaMateriales(this.InfoMostrada[index]['DatosMateriales'], this.InfoMostrada[index]['CicloSeleccionado'],1,this.InfoMostrada[index]['flagAgruparProduccion']," ");
            let auxgrafica = this.IniciarGraficaMateriales(this.InfoMostrada[index]['DatosMateriales'], this.InfoMostrada[index]['CicloSeleccionado'], this.InfoMostrada[index]['CicloSeleccionado'],1,this.InfoMostrada[index]['flagAgruparProduccion']);
            this.InfoMostrada[index]['DataGraficaMateriales']=auxgrafica['grafica'];
            this.InfoMostrada[index]['labelsMateriales'] = auxgrafica['labels'];
          }
        }
        let aux = {'idProyecto':idP,'cambioEn':'ElementoContructivo','cambio':resultado}
        this.CambioEstadoTercerSeccion.emit(aux);
      }
    });
  }

  sumadatos(data){
    let res = 0
    Object.keys(data).forEach(material => {
      let resultado_actual = data[material];
      res=res+resultado_actual;
    });
    return res;
  }

  acomodaMayoraMenor(data){
    let auxhelp = [];
    let auxdatos = [];
    Object.keys(data).forEach(material => {
      auxhelp = [...auxhelp,data[material]]
    });
    auxdatos = auxhelp.sort((n1,n2) => {
      if (n1 > n2) {
          return 1;
      }
  
      if (n1 < n2) {
          return -1;
      }
  
      return 0;
    })

    return auxdatos.reverse()
  }

  IniciarGraficaMateriales(data,elementoSeleccionado,color,filtro,flagAgrupar){
    let aux = [];
    let auxgrafica = [];
    let auxlabel=[];
    let auxdatos = [];
    let suma=0;
    let materialesExistentes = []
    let auxmateriales = {}
    Object.keys(data).forEach(elemento =>{
      if(filtro == 0){
        //Sin seleccionar algun filtro
        Object.keys(data[elemento]).forEach(subetapa => {
          Object.keys(data[elemento][subetapa]).forEach(elementoC => {
            Object.keys(data[elemento][subetapa][elementoC]).forEach(material => {
              if(!materialesExistentes.includes(material)){
                materialesExistentes.push(material)
                auxmateriales[material] = 0;
              }
              auxmateriales[material] += data[elemento][subetapa][elementoC][material]
            })
          });
        });
        suma = this.sumadatos(auxmateriales)
        auxdatos = this.acomodaMayoraMenor(auxmateriales);
      }else if(filtro == 1){
        //Si se selecciona una fase del ciclo de vida
        if(elementoSeleccionado===elemento || flagAgrupar){
          Object.keys(data[elemento]).forEach(subetapa => {
            let flagSubetapa = false;
            if(flagAgrupar){
              if(subetapa == elementoSeleccionado){
                flagSubetapa = true;
              }else{
                let auxSubetapas={'Producción':['A1','A2','A3'],'Construccion':['A4'],'Uso':['B4']}
                Object.keys(auxSubetapas).forEach(auxetapa=>{
                  if(auxetapa === elementoSeleccionado){
                    auxSubetapas[auxetapa].forEach(auxSub => {
                      if(subetapa===auxSub){
                        flagSubetapa=true;
                      }
                    });
                  }
                })
              }
            }else{
              flagSubetapa = true;
            }
          if(flagSubetapa){
            Object.keys(data[elemento][subetapa]).forEach(elementoC => {
              Object.keys(data[elemento][subetapa][elementoC]).forEach(material => {
                if(!materialesExistentes.includes(material)){
                  materialesExistentes.push(material)
                  auxmateriales[material] = 0;
                }
                auxmateriales[material] += data[elemento][subetapa][elementoC][material]
              })
            });
          }
          });
        }
        suma = this.sumadatos(auxmateriales)
        auxdatos = this.acomodaMayoraMenor(auxmateriales);
      }else{
        //Si se selecciona un elemento constructivo
        if(color===elemento || flagAgrupar){
          Object.keys(data[elemento]).forEach(subetapa => {
            let flagSubetapa = false;
            if(flagAgrupar){
              if(subetapa == color){
                flagSubetapa = true;
              }else{
                let auxSubetapas={'Producción':['A1','A2','A3'],'Construccion':['A4'],'Uso':['B4']}
                Object.keys(auxSubetapas).forEach(auxetapa=>{
                  if(auxetapa === color){
                    flagSubetapa=true;
                  }
                })
              }
            }else{
              flagSubetapa = true;
            }
            if(flagSubetapa){
            Object.keys(data[elemento][subetapa]).forEach(elementoC => {
              if(elementoC === elementoSeleccionado.toString()){
                Object.keys(data[elemento][subetapa][elementoC]).forEach(material => {
                  if(!materialesExistentes.includes(material)){
                    materialesExistentes.push(material)
                    auxmateriales[material] = 0;
                  }
                  auxmateriales[material] += data[elemento][subetapa][elementoC][material]
                  suma += data[elemento][subetapa][elementoC][material]
                })
              }
            });
          }
          });
        }
      }
    })
    let sumaOtros = 0;
    if(filtro == 2){
      suma = this.sumadatos(auxmateriales)
      auxdatos = this.acomodaMayoraMenor(auxmateriales);
    }
    auxdatos.forEach((element, index) =>{
      if(index <= 2){
        aux.push(((element/suma)*100).toFixed(2))
        auxlabel=[...auxlabel, (index+1).toString()];
      }else{
        sumaOtros = sumaOtros+element;
      }
    })
    if(sumaOtros>0){
      aux.push(((sumaOtros/suma)*100).toFixed(2));
      auxlabel=[...auxlabel, 'otros'];
    }
    auxgrafica = [
      {
        data: aux,
        backgroundColor: this.CicloColores[color],
      },
    ];

    return {'grafica':auxgrafica,'labels':auxlabel}
  }

  IniciarTablaMateriales(data,elementoSeleccionado,filtro,flagAgrupar,ciclo){
    let infoTablaDispercion = [];
    let suma = 0;
    let auxdatos = [];
    let auxidsMateriales = []
    let materialesExistentes = []
    let auxmateriales = {}
    Object.keys(data).forEach(elemento =>{
      if(filtro == 0){
        //Sin seleccionar algun filtro
        Object.keys(data[elemento]).forEach(subetapa => {
          Object.keys(data[elemento][subetapa]).forEach(elementoC => {
            Object.keys(data[elemento][subetapa][elementoC]).forEach(material => {
              if(!materialesExistentes.includes(material)){
                materialesExistentes.push(material)
                auxmateriales[material] = 0;
              }
              auxmateriales[material] += data[elemento][subetapa][elementoC][material]
            })
          });
        });
        suma = this.sumadatos(auxmateriales)
        auxdatos = this.acomodaMayoraMenor(auxmateriales);
      }else if(filtro == 1){
        //Si se selecciona una fase del ciclo de vida
        if(elementoSeleccionado===elemento || flagAgrupar){
          Object.keys(data[elemento]).forEach(subetapa => {
            let flagSubetapa = false;
            if(flagAgrupar){
              if(subetapa == elementoSeleccionado){
                flagSubetapa = true;
              }else{
                let auxSubetapas={'Producción':['A1','A2','A3'],'Construccion':['A4'],'Uso':['B4']}
                Object.keys(auxSubetapas).forEach(auxetapa=>{
                  if(auxetapa === elementoSeleccionado){
                    auxSubetapas[auxetapa].forEach(auxSub => {
                      if(subetapa===auxSub){
                        flagSubetapa=true;
                      }
                    });
                  }
                })
              }
            }else{
              flagSubetapa = true;
            }
          if(flagSubetapa){
            Object.keys(data[elemento][subetapa]).forEach(elementoC => {
              Object.keys(data[elemento][subetapa][elementoC]).forEach(material => {
                if(!materialesExistentes.includes(material)){
                  materialesExistentes.push(material)
                  auxmateriales[material] = 0;
                }
                auxmateriales[material] += data[elemento][subetapa][elementoC][material]
              })
            });
          }
          });
        }
        suma = this.sumadatos(auxmateriales)
        auxdatos = this.acomodaMayoraMenor(auxmateriales);
      }else{
        if(ciclo===elemento || flagAgrupar){
          Object.keys(data[elemento]).forEach(subetapa => {
            let flagSubetapa = false;
            if(flagAgrupar){
              if(subetapa == ciclo){
                flagSubetapa = true;
              }else{
                let auxSubetapas={'Producción':['A1','A2','A3'],'Construccion':['A4'],'Uso':['B4']}
                Object.keys(auxSubetapas).forEach(auxetapa=>{
                  if(auxetapa === elementoSeleccionado){
                    flagSubetapa=true;
                  }
                })
              }
            }else{
              flagSubetapa = true;
            }
            if(flagSubetapa){
            Object.keys(data[elemento][subetapa]).forEach(elementoC => {
              if(elementoC === elementoSeleccionado.toString()){
                Object.keys(data[elemento][subetapa][elementoC]).forEach(material => {
                  if(!materialesExistentes.includes(material)){
                    materialesExistentes.push(material)
                    auxmateriales[material] = 0;
                  }
                  auxmateriales[material] += data[elemento][subetapa][elementoC][material]
                  suma += data[elemento][subetapa][elementoC][material]
                })
              }
            });
          }
          });
        }
      }
    })
    if(filtro == 0){
      Object.keys(auxmateriales).forEach((material,index) => {
        auxdatos.forEach(num =>{
          if(num == auxmateriales[material]){
            auxidsMateriales.push(material)
          }
        })
      });
    }else if(filtro ==1){
      Object.keys(auxmateriales).forEach((material,index) => {
        auxdatos.forEach(num =>{
          if(!auxidsMateriales.includes(material)){
            if(num == auxmateriales[material]){
              auxidsMateriales.push(material)
            }
          }
        })
      });
    }else{
      auxdatos = this.acomodaMayoraMenor(auxmateriales);
      Object.keys(auxmateriales).forEach((material,index) => {
        auxdatos.forEach(num =>{
          if(!auxidsMateriales.includes(material)){
            if(num == auxmateriales[material]){
              auxidsMateriales.push(material)
            }
          }
        })
      });
    }
    let num=0;
    auxidsMateriales.forEach((material,ii) => {
      let aux = {};
      let helpMaterial = this.materiales.filter(({id}) => id == material);
      num=num+1;
      aux['no'] = num;
      aux['material'] = helpMaterial[0]['name_material'];
      aux['porcentaje'] = ((auxdatos[ii] / suma) * 100).toFixed(2);
      aux['numero'] = auxdatos[ii].toExponential(2);
      infoTablaDispercion.push(aux);
    });
    return infoTablaDispercion
  }

  llenarIdsBotones(elementos,idProyecto){
    let iconos = {}
    elementos.forEach(element => {
      iconos[element.id.toString()] = {};
      iconos[element.id.toString()]['idTEXTO']= idProyecto.toString().concat('texto'.concat(element.id.toString()));
    });
    return iconos;
  }

  llenarColoresBotonesElementos(elementos,colores,orden){
    let iconos = {}
    elementos.forEach(element => {
      let count =0;  
      let flagColor = true;    
      if(orden != undefined){
        for (let i of orden) {
          if(i === element['id'].toString()){
            iconos[element.id.toString()] = colores[count];
            flagColor = false;
          }
          count ++;
        }
      }
      if(flagColor){
        iconos[element.id.toString()]= '#EFEFEF';
      }
    });
    return iconos;
  }

  AjustarElementosMostrados(auxDatos,ciclo,flagAgrupar){
    let iconos = {}
    this.Secciones.forEach(element =>{
      let flag = false
      let auxidelemento : String = element['id'];
      Object.keys(auxDatos).forEach(fase => {
      if(ciclo===fase || flagAgrupar){
        Object.keys(auxDatos[fase]).forEach(subetapas => {
          let flagSubetapa = false;
          if(flagAgrupar){
            if(subetapas == ciclo){
              flagSubetapa = true;
            }else{
              let auxSubetapas={'Producción':['A1','A2','A3'],'Construccion':['A4'],'Uso':['B4']}
              Object.keys(auxSubetapas).forEach(auxetapa=>{
                if(auxetapa === ciclo){
                  flagSubetapa=true;
                }
              })
            }
          }else{
            flagSubetapa = true;
          }
          if(flagSubetapa){
            Object.keys(auxDatos[fase][subetapas]).forEach(idelemento => {
              if(idelemento==auxidelemento.toString()){
                flag = true
                this.ElementosContructivosEliminados.forEach(elementoEliminado => {
                  if(elementoEliminado === idelemento){
                    flag = false
                  }
                });
              }
            })
          }
        });
      }
      });
      if(flag){
        iconos[auxidelemento.toString()] = {};
        iconos[auxidelemento.toString()]['habilitado'] = false;
      }else{
        iconos[auxidelemento.toString()] = {};
        iconos[auxidelemento.toString()]['habilitado'] = true;
      }
    })
    return iconos;
  }

  agrupacionDeProduccion(idP){
    this.InfoMostrada.forEach((proyecto,index) => {
      if(proyecto.id == idP){
        let resultado = true;
        let aux = {}
        if(this.InfoMostrada[index]['flagAgruparProduccion']){
          this.InfoMostrada[index]['flagAgruparProduccion'] = false
          this.InfoMostrada[index]['textoBotonAgrupar'] = "Desagrupar"
          resultado = false;
        }else{
          this.InfoMostrada[index]['flagAgruparProduccion'] = true;
          this.InfoMostrada[index]['textoBotonAgrupar'] = "Agrupar"
        }

        aux = {'idProyecto':idP,'cambioEn':'AgruparProducción','cambio':resultado}
        this.CambioEstadoTercerSeccion.emit(aux);

        if(this.InfoMostrada[index]['CicloSeleccionado'] != " "){
          document.getElementById(this.InfoMostrada[index]['id'].toString().concat(this.InfoMostrada[index]['CicloSeleccionado'].concat('botonC'))).className = 'espacio-sin-selecciomar';
          this.InfoMostrada[index]['CicloSeleccionado'] = ' '
          this.InfoMostrada[index]['infoTabla'] = this.IniciarTablaMateriales(this.InfoMostrada[index]['DatosMateriales'],"",0,this.InfoMostrada[index]['flagAgruparProduccion']," ");
          let auxgrafica = this.IniciarGraficaMateriales(this.InfoMostrada[index]['DatosMateriales'],"","General",0,this.InfoMostrada[index]['flagAgruparProduccion']);
          this.InfoMostrada[index]['DataGraficaMateriales']=auxgrafica['grafica'];
          this.InfoMostrada[index]['labelsMateriales'] = auxgrafica['labels'];
          this.InfoMostrada[index]['ElementosConstructivosGrafica'] = false;
          this.InfoMostrada[index]['DatosElementosConstructivos']=[];
          this.InfoMostrada[index]['iconosElementosConstrucivos']={};
          this.InfoMostrada[index]['Coloreslementos'] = {};
        }
        this.InfoMostrada[index]['ElementoConstructivoSeleccionado']=" "
        this.InfoMostrada[index]['DatosCicloVida']=this.GraficaCicloVida(this.InfoMostrada[index]['CicloVida'],this.InfoMostrada[index]['CicloSeleccionado'],this.InfoMostrada[index]['flagAgruparProduccion']);
        let botonesCiclo = this.llenarBotonesCiclo(this.InfoMostrada[index]['flagAgruparProduccion'],this.InfoMostrada[index]['id']);
        this.InfoMostrada[index]['botonesCiclo'] = botonesCiclo['botones']
        this.InfoMostrada[index]['ids_RespuestasBotones'] = botonesCiclo

        aux = {'idProyecto':idP,'cambioEn':'ElementoContructivo','cambio':" "}
        this.CambioEstadoTercerSeccion.emit(aux);
        aux = {'idProyecto':idP,'cambioEn':'CicloVida','cambio':" "}
        this.CambioEstadoTercerSeccion.emit(aux);
      }

    });
  }
}

