import { Component } from '@angular/core';
import { NgModule, OnInit, Input, ViewChildren, ViewChild, QueryList, ViewContainerRef, ComponentFactoryResolver, ElementRef, ComponentRef} from '@angular/core';
import { element } from 'protractor';
import { BarChartSimpleComponent } from 'src/app/bar-chart-simple/bar-chart-simple.component';
import { BarChartComponent } from 'src/app/bar-chart/bar-chart.component';
import { PieChartComponent } from 'src/app/pie-chart/pie-chart.component';
import { RadialChartComponent } from 'src/app/radial-chart/radial-chart.component';
import { ProjectsService } from './../../../core/services/projects/projects.service';
import { MaterialsService } from './../../../core/services/materials/materials.service';
import { AnalisisService } from './../../../core/services/analisis/analisis.service';
import { concat, forkJoin, observable } from 'rxjs';
import { couldStartTrivia } from 'typescript';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Router } from '@angular/router';
import { CompileSummaryKind } from '@angular/compiler';
import {animate, state, style, transition, trigger} from '@angular/animations';
import transporte from 'src/app/comparar/component/comparar/transportes.json';
import conversion from 'src/app/comparar/component/comparar/Conversiones.json';

interface impactos_menu{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-comparar',
  templateUrl: './comparar.component.html',
  styleUrls: ['./comparar.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

@NgModule({
  entryComponents: [
    BarChartComponent,
    RadialChartComponent,
    PieChartComponent
  ]
})
export class CompararComponent implements OnInit {
  barChartComponent = BarChartComponent;
  radialChart = RadialChartComponent;
  pieChart = PieChartComponent;

  @ViewChild('barContainer', { read: ViewContainerRef }) container: ViewContainerRef;
  @ViewChild('barGraphDos', { read: ViewContainerRef }) containerBarGrafica: ViewContainerRef;
  @ViewChild('GraficasEspecificas', {read: ViewContainerRef}) containerGraficas: ViewContainerRef;
  @ViewChildren(BarChartComponent)
  childBar: QueryList<BarChartComponent>;
  @ViewChildren(PieChartComponent)
  childPie: QueryList<PieChartComponent>;
  @ViewChildren(RadialChartComponent)
  childRadar: QueryList<RadialChartComponent>;
  @ViewChildren(BarChartSimpleComponent)
  childBarSimple: QueryList<BarChartSimpleComponent>;
  selector = 'Ninguno';
  bandera:number;
  showVar: boolean = false;
  showVar_1: boolean = false;
  ID:string=' ';
  proyecto:string;
  banderaGrapg:number=0;
  proyect=[];
  proyect_active=[];
  inputproyect_bar_porcent:any;
  outproyect_bar = [];
  outproyect_radar=[];
  outproyect_pie = [];
  indicador_impacto:string;
  hover:boolean=true;
  bandera_porcentaje: boolean = true;
  bandera_num:boolean= false;
  Impactos_menu=[];
  indicador_elegido:boolean=false;
  bandera_resultado:number=0;
  show_elementos:boolean=true;
  Impactos_ambientales:boolean=true;
  Impactos_Elementos:boolean=false;
  Elementos_constructivos:boolean=false;
  show_Dispercion:boolean=false;
  selectedValue: string;
  seleccion_columna:any;
  delete_fase:boolean=true;
  click_anterior:'Ninguno';
  labelPosition: 'porcentaje' | 'numero' = 'porcentaje';
  proyectosMostrados_elementos=[{
    idproyecto:0,
    showpie:true,
    showbar:false,
    showciclo:false,
    ciclo:' ',
    showcimenta:false,
    elemento:' '
  }];
  bandera_graph_bar=false;
  botones_elementos_constructivos=[
    { Nombre: 'Cimentación', nivel: 'n1' }, { Nombre: 'Pisos', nivel: 'n2' }, { Nombre: 'Muros Int.', nivel: 'n3' },
    { Nombre: 'Muros ext.', nivel: 'n4' }, { Nombre: 'Ventanas', nivel: 'n5' }, { Nombre: 'Ins Especiales', nivel: 'n6' },
    { Nombre: 'Otros', nivel: 'n7' }, { Nombre: 'Techo cubierta', nivel: 'n8' }, { Nombre: 'Entrepiso', nivel: 'n9' },
    { Nombre: 'Estructura', nivel: 'n10' }, { Nombre: 'Puertas', nivel: 'n11' }];
  impacto_seleccionado=' ';
  serie_Seleccionada:string;
  bandera_serie_Seleccionada:boolean=false;
  resultdosGraficos:boolean=true;
  resultdosTabla: boolean = false;
  DatosTabla=[];
  classBotones ='boton-principal';


  // vars analisis
  idProyectoActivo: number;

  projectsList: [];
  materialList: [];
  materialSchemeDataList: [];
  materialSchemeProyectList: [];
  potentialTypesList: [];
  standarsList: [];
  CSEList: [];
  SIDList: [];
  SIList: [];
  ACRList: [];
  ECDList: [];
  TEDList: [];
  TEList: [];
  ULList: [];
  ECDPList: [];
  sectionList : [];

  impactosIgnorar = [11, 12, 13, 14]
  impactosIgnorar2 = ['PARNR','POT','Human toxicity','Fresh water aquatic ecotox.', 'Marine aquatic ecotoxicity', 'Terrestrial ecotoxicity']
  transporte_list:any = transporte;
  conversion_list:any = conversion;
  botones_grafica_activos: boolean =false;
  columnsToDisplay = ['Agotamiento de\nRecursos Abióticos\nMinerales',
    'Agotamiento de\nRecursos Abióticos\nFósiles', 'Calentamiento Global',
    'Agotamiento de\nla Capa de Ozono',
    'Acidificación', ' Eutrofización', 'Escasez de agua']

  constructor(
    private materials: MaterialsService,
    private projects: ProjectsService,
    private analisis: AnalisisService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
    ){

    forkJoin([
      this.analisis.getTypeEnergy(),
      this.projects.getProjects(),
      this.materials.getMaterials(),
      this.analisis.getMaterialSchemeData(),
      this.analisis.getMaterialSchemeProyect(),
      this.analisis.getPotentialTypes(),
      this.analisis.getStandars(),
      this.analisis.getConstructiveSystemElement(),
      this.analisis.getSourceInformationData(),
      this.analisis.getSourceInformation(),
      this.analisis.getAnnualConsumptionRequired(),
      this.analisis.getElectricityConsumptionData(),
      this.analisis.getTypeEnergyData(),
      this.analisis.getUsefulLife(),
      this.analisis.getECDP(),
      this.analisis.getSectionsList()
    ])
    .subscribe(([
      TE,
      projectsData,
      materialData,
      materialSchemeData,
      materialSchemeProyect,
      potentialTypes,
      standards,
      CSE,
      SID,
      SI,
      ACR,
      ECD,
      TED,
      UL,
      ECDP,
      sectionsList
    ]) => {
      this.idProyectoActivo = parseInt(sessionStorage.getItem('projectID'));
      // console.log('id recibido', this.idProyectoActivo)

      this.projectsList = projectsData;
      this.materialList = materialData;
      this.materialSchemeDataList = materialSchemeData;
      this.materialSchemeProyectList = materialSchemeProyect;
      this.potentialTypesList = potentialTypes;
      this.standarsList = standards;
      this.CSEList = CSE;
      this.SIDList = SID;
      this.SIList = SI;
      this.ACRList = ACR;
      this.ECDList = ECD;
      this.TEDList = TED;
      this.TEList = TE;
      this.ULList = UL;
      this.ECDPList = ECDP;
      this.sectionList = sectionsList;
      this.menu_inicio();
    });

  }

  ngOnInit(): void {
  }

  //Regreso a la página de inicio
  returnHome(){
    this.router.navigateByUrl('home-evamed');
  }

  //eliminar fase de ciclo de visa y redistribución;
  ajusteDeGraficaFASE(fase:string){
    if (this.resultdosGraficos){
      this.outproyect_bar.forEach((proyecto, index) => {
        let indicadores = Object.keys(proyecto.Datos);
        indicadores.forEach(element => {
          let aux = Object.keys(this.outproyect_bar[index].Datos[element])
          if(aux.includes(fase)){
            this.delete_fase = true;
          }
        })
      })

      if (this.delete_fase){
        this.outproyect_bar.forEach((proyecto, index)=> {
          let indicadores = Object.keys(proyecto.Datos);
          indicadores.forEach(element => {
            delete this.outproyect_bar[index].Datos[element][fase];
          })
        })
        this.delete_fase=false;
      }else{
        this.proyect_active.forEach(element => {
          this.outproyect_bar=[];
          let analisis = this.getAnalisisBarras(element);
          this.outproyect_bar.push(analisis);
          this.delete_fase = true;
        })
      }
      this.iniciaBarras();
    }
  }

  //agregar proyecto a graficas

  iniciar_graficas(id:number){
    // return;
    if (this.proyect_active.some((item) => item == id) ) {
      return;
    }
    this.proyect_active.push(id);
    this.proyect.forEach((proyecto,index) => {
      if(proyecto.id==id && proyecto.id != this.idProyectoActivo){
        this.proyect[index].card = true;
        this.proyect[index].num = this.proyect_active.length;
      }
    });

    let analisis = this.getAnalisisBarras(id);
    //console.log(analisis);
    let analisisRad = this.getAnalisisRadial(id);
    let analisisPie = this.getAnalisisPie(id);

    this.outproyect_bar.push(analisis);
    this.outproyect_radar.push(analisisRad);
    this.outproyect_pie.push(analisisPie);
    // this.childBar.forEach(c => c.agregarProyecto(this.outproyect_bar));
    if(this.resultdosTabla){
      this.TablaResultados();
    }else{
      this.iniciaBarras();
    }
    this.containerGraficas.clear();
    this.banderaGrapg == 0;
    //this.iniciaBarrasSeccionDos();
    this.proyectosMostrados_elementos = [...this.proyectosMostrados_elementos, {
      idproyecto: id,
      showpie: true,
      showbar: false,
      showciclo: false,
      ciclo: ' ',
      showcimenta: false,
      elemento: ' '
    }];
    this.showVar = false;
    this.showVar_1 = false;
    this.banderaGrapg = 0;
    return;

  }

  iniciaBarras(){
    if (this.resultdosGraficos){
      this.container.clear();
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.barChartComponent);
      const grafica = this.container.createComponent(componentFactory);
      grafica.instance.porcentaje = this.bandera_porcentaje;
      grafica.instance.inputProyects = this.outproyect_bar;
      grafica.instance.showMe = true;
      grafica.instance.Bandera_bar=false;
      grafica.instance.Columna_seleccionada = this.selector;
      grafica.instance.banera_enfoqueSerie_externo = this.bandera_serie_Seleccionada;
      grafica.instance.serie_input = this.serie_Seleccionada;
      grafica.instance.lastClickEvent.subscribe(e => this.receiveSelector(e));
    }
  }

  //creación de gráfica de barras para la sección de impactos ambientales por
  //elementos onstructivos
  iniciaBarrasSeccionDos(){
    this.containerBarGrafica.clear();
    /*const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.barChartComponent);
    const grafica = this.containerBarGrafica.createComponent(componentFactory);
    grafica.instance.inputProyects = this.proyect_active;
    grafica.instance.showMe = false;
    grafica.instance.Bandera_bar = this.bandera_graph_bar;
    grafica.instance.porcentaje=true;*/
  }

  iniciaRadiales(){
    this.containerGraficas.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.radialChart);
    const grafica = this.containerGraficas.createComponent(componentFactory);
    grafica.instance.inputProyect = this.outproyect_radar;
    grafica.instance.showMe = this.showVar_1;
    grafica.instance.id = this.ID;
  }
  iniciaPie(){
    this.containerGraficas.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.pieChart);
    const grafica = this.containerGraficas.createComponent(componentFactory);
    grafica.instance.inputProyect = this.outproyect_pie;
    grafica.instance.showMePartially = this.showVar;
    grafica.instance.indicador = this.selector;
    grafica.instance.id = this.ID;
    grafica.instance.Bandera_resultado=2;
  }

  getAnalisisBarras(idProyecto){

    //Creación de espacio para guardar los datos del proyecto
    let analisisProyectos : Record<string,any> = {
      Nombre: this.projectsList.filter( p => p['id'] == idProyecto)[0]['name_project'],
      id: idProyecto,
      Datos: {}
    };

    let Label = ['Agotamiento de\nRecursos Abióticos\nMinerales',
    'Agotamiento de\nRecursos Abióticos\nFósiles', 'Calentamiento Global',
    'Agotamiento de\nla Capa de Ozono',
    'Acidificación', ' Eutrofización', 'Escasez de agua']

    // Etapa de Producción

    let schemeProyect = this.materialSchemeProyectList.filter(msp => msp['project_id'] == idProyecto);
    let impacto_ban = true;

    this.potentialTypesList.forEach( (impacto,index) => {
      this.impactosIgnorar2.forEach(ignorar =>{
        if (impacto['name_potential_type'] === ignorar){
          impacto_ban = false;
        }
      })
      if(impacto_ban){
        analisisProyectos.Datos[Label[index]] = {};
        let resultado_impacto = 0;
        //Cálculos de la sección de producción
        let etapas = [2,3,4] //Subetaps A1 A2 y A3
        if(schemeProyect.length > 0){
          etapas.forEach(subetapa => {
            schemeProyect.forEach(ps => {
              let materiales_subetapa = this.materialSchemeDataList.filter(msd => msd['material_id'] == ps['material_id'])
              console.log(materiales_subetapa)
              materiales_subetapa = materiales_subetapa.filter(msd => msd['standard_id'] == subetapa && msd['potential_type_id'] == impacto['id'])
              if(materiales_subetapa.length > 0){
                materiales_subetapa.forEach((material,index) => {
                  resultado_impacto = resultado_impacto + ( materiales_subetapa[index]['value'] * ps['quantity'] )
                })
              }
            })
          })
        }
        analisisProyectos['Datos'][Label[index]]['Producción'] = resultado_impacto;
        //console.log('resultado producción = ',resultado_impacto)
        resultado_impacto=0;
        //Construcción
        //A4 Transport
        if (schemeProyect.length > 0) {
          schemeProyect.forEach(ps => {
            let internacional;
            let nacional;
            //falta adaptarlo para jalar directamente los tipos de transporte de la base de datos.
            if(ps['distanceInit'] == null){
              internacional=0;
            }else{
              let value_transport = this.transporte_list.filter(val => val['id_potencial'] == impacto['id'] && val['id_transport'] == 1)
              internacional=value_transport[0]['valor']*ps['distanceInit'];
            }
            if(ps['distanceEnd'] == null){
              nacional=0;
            }else{
              let value_transport = this.transporte_list.filter(val => val['id_potencial'] == impacto['id'] && val['id_transport'] == 4)
              nacional=value_transport[0]['valor']*ps['distanceEnd'];
            }
            let conversion_val = this.conversion_list.filter(val => val['id_material'] == ps['material_id'])
            let peso = 1
            if(conversion_val.length > 0){
              peso=conversion_val[0]['value']
            }
            resultado_impacto = resultado_impacto + (peso*ps['quantity']*(nacional+internacional))
          })
        }
        //A5 instalación
        let CSEs = this.CSEList.filter(c => c['project_id'] == idProyecto);
        if(CSEs.length > 0){
          CSEs.forEach(CSE => {
            let energia = this.SIDList.filter(sid => sid['sourceInformarion_id'] == CSE['source_information_id'] && sid['potential_type_id'] == impacto['id'])
            if(energia.length > 0){
              energia.forEach((element,index) => {
                resultado_impacto = resultado_impacto + (energia[index]['value'] * CSE['quantity']);
              })
            }
          });
        }
        analisisProyectos['Datos'][Label[index]]['Construccion'] = resultado_impacto;
        //console.log('A5:',resultado_impacto);
        //Uso
        resultado_impacto=0;
        let listaACR = this.ACRList.filter(acr => acr['project_id'] == idProyecto)
        if(listaACR.length > 0){
          let consumos = this.ECDList.filter(ecd => ecd['annual_consumption_required_id'] == listaACR[0]['id']);
          let vidaUtilID = this.projectsList.filter(p => p['id'] == idProyecto)[0]['useful_life_id']
          let vidaUtil: any = this.ULList.filter(ul => ul['id'] == vidaUtilID)[0]['name_useful_life'];
          try {
            vidaUtil = parseFloat(vidaUtil);
          } catch {
            vidaUtil = 1;
          }
          //B6
          consumos.forEach(consumo => {
            let valor_impacto = this.TEDList.filter(sid => sid['type_energy_id'] == consumo['type'] && sid['potential_type_id'] == impacto['id'])
            if(valor_impacto.length > 0){
              resultado_impacto = resultado_impacto + consumo['quantity'] * valor_impacto[0]['value'] * vidaUtil
            }
          })
        }
        //B4
        //las etapas son las mismas que en la sección de producción
        if (schemeProyect.length > 0) {
          etapas.forEach(subetapa => {
            schemeProyect.forEach(ps => {
              let materiales_subetapa = this.materialSchemeDataList.filter(msd => msd['material_id'] == ps['material_id'] && msd['standard_id'] == subetapa && msd['potential_type_id'] == impacto['id'])
              if (materiales_subetapa.length > 0) {
                materiales_subetapa.forEach((material, index) => {
                  //Aquí faltaría multiplicar por el reemplazo
                  //replaces
                  resultado_impacto = resultado_impacto + (materiales_subetapa[index]['value'] * ps['quantity']*ps['replaces'])
                })
              }
            })
          })
        }
        analisisProyectos['Datos'][Label[index]]['Uso'] = resultado_impacto;
        //console.log('Uso:',resultado_impacto)

        //Fin de vida
        resultado_impacto = 0;
        //C1
        let ECDPs = this.ECDPList.filter(c => c['project_id'] == idProyecto);
        if(ECDPs.length > 0){
          ECDPs.forEach(ECDP => {
            let energia = this.SIDList.filter(sid => sid['sourceInformarion_id'] == ECDP['source_information_id'] && sid['potential_type_id'] == impacto['id'])
            resultado_impacto = resultado_impacto + (ECDP['quantity'] * energia[0]['value'])
          })
        }
        analisisProyectos['Datos'][Label[index]]['FinDeVida'] = resultado_impacto;
        //console.log('Fin de vida',resultado_impacto)
      }
      impacto_ban=true;
    })
    //console.log(analisisProyectos)
    return analisisProyectos;
  }

  getAnalisisRadial(idProyecto){
    let analisisProyectos : Record<string,any> = {
      Nombre: this.projectsList.filter( p => p['id'] == idProyecto)[0]['name_project'],
      id: idProyecto,
      Datos: {}
    };
    let totales : Record<string,any> = {}

    let schemeProyect = this.materialSchemeProyectList.filter(msp => msp['project_id'] == idProyecto);
    let impacto_ban = true;

    let Label = ['Agotamiento de\nRecursos Abióticos\nMinerales',
      'Agotamiento de\nRecursos Abióticos\nFósiles', 'Calentamiento Global',
      'Agotamiento de\nla Capa de Ozono',
      'Acidificación', ' Eutrofización', 'Escasez de agua']

    this.potentialTypesList.forEach((impacto,index) => {
      this.impactosIgnorar2.forEach(ignorar => {
        if (impacto['name_potential_type'] === ignorar) {
          impacto_ban = false;
        }
      })
      if (impacto_ban) {
        let resultado_impacto = 0;
        //Cálculos de la sección de producción
        let etapas = [2, 3, 4] //Subetaps A1 A2 y A3
        if(schemeProyect.length > 0){
          etapas.forEach(subetapa => {
            schemeProyect.forEach(ps => {
              let materiales_subetapa = this.materialSchemeDataList.filter(msd => msd['material_id'] == ps['material_id'] && msd['standard_id'] == subetapa && msd['potential_type_id'] == impacto['id'])
              if (materiales_subetapa.length > 0) {
                materiales_subetapa.forEach((material, index) => {
                  resultado_impacto = resultado_impacto + (materiales_subetapa[index]['value'] * ps['quantity'])
                })
              }
            })
          })
        }
        if (!Object.keys(analisisProyectos['Datos']).includes('Producción')) {
          analisisProyectos.Datos['Producción'] = {};
        }
        analisisProyectos['Datos']['Producción'][Label[index]] = resultado_impacto;
        //console.log('resultado producción = ',resultado_impacto)
        resultado_impacto = 0;
        //Construcción
        //A4 Transporte
        if (schemeProyect.length > 0) {
          schemeProyect.forEach(ps => {
            let internacional;
            let nacional;
            if(ps['distanceInit'] == null){
              internacional=0;
            }else{
              let value_transport = this.transporte_list.filter(val => val['id_potencial'] == impacto['id'] && val['id_transport'] == 1)
              internacional=value_transport[0]['valor']*ps['distanceInit'];
            }
            if(ps['distanceEnd'] == null){
              nacional=0;
            }else{
              let value_transport = this.transporte_list.filter(val => val['id_potencial'] == impacto['id'] && val['id_transport'] == 4)
              nacional=value_transport[0]['valor']*ps['distanceEnd'];
            }
            let conversion_val = this.conversion_list.filter(val => val['id_material'] == ps['material_id'])
            let peso = 1
            if(conversion_val.length > 0){
              peso=conversion_val[0]['value']
            }
            //console.log(peso*ps['quantity']*(nacional+internacional))
            resultado_impacto = resultado_impacto + (peso*ps['quantity']*(nacional+internacional))
          })
        }
        //A5 instalación
        let CSEs = this.CSEList.filter(c => c['project_id'] == idProyecto);
        if(CSEs.length > 0){
          CSEs.forEach(CSE => {
            let energia = this.SIDList.filter(sid => sid['sourceInformarion_id'] == CSE['source_information_id'] && sid['potential_type_id'] == impacto['id'])
            if (energia.length > 0) {
              energia.forEach((element, index) => {
                resultado_impacto = resultado_impacto + (energia[index]['value'] * CSE['quantity']);
              })
            }
          });
        }
        if (!Object.keys(analisisProyectos['Datos']).includes('Construccion')) {
          analisisProyectos.Datos['Construccion'] = {};
        }
        analisisProyectos['Datos']['Construccion'][Label[index]] = resultado_impacto;
        //console.log('A5:',resultado_impacto);
        //Uso
        resultado_impacto = 0;
        let listaACR = this.ACRList.filter(acr => acr['project_id'] == idProyecto)
        if(listaACR.length > 0){
          let consumos = this.ECDList.filter(ecd => ecd['annual_consumption_required_id'] == listaACR[0]['id']);
          let vidaUtilID = this.projectsList.filter(p => p['id'] == idProyecto)[0]['useful_life_id']
          let vidaUtil: any = this.ULList.filter(ul => ul['id'] == vidaUtilID)[0]['name_useful_life'];
          try {
            vidaUtil = parseFloat(vidaUtil);
          } catch {
            vidaUtil = 1;
          }
          //B6
          consumos.forEach(consumo => {
            let valor_impacto = this.TEDList.filter(sid => sid['type_energy_id'] == consumo['type'] && sid['potential_type_id'] == impacto['id'])
            if (valor_impacto.length > 0) {
              resultado_impacto = resultado_impacto + consumo['quantity'] * valor_impacto[0]['value'] * vidaUtil
            }
          })
        }
        //B4
        //las etapas son las mismas que en la sección de producción
        if (schemeProyect.length > 0) {
          etapas.forEach(subetapa => {
            schemeProyect.forEach(ps => {
              let materiales_subetapa = this.materialSchemeDataList.filter(msd => msd['material_id'] == ps['material_id'] && msd['standard_id'] == subetapa && msd['potential_type_id'] == impacto['id'])
              if (materiales_subetapa.length > 0) {
                materiales_subetapa.forEach((material, index) => {
                  resultado_impacto = resultado_impacto + (materiales_subetapa[index]['value'] * ps['quantity'] * ps['replaces'])
                })
              }
            })
          })
        }
        if (!Object.keys(analisisProyectos['Datos']).includes('Uso')) {
          analisisProyectos.Datos['Uso'] = {};
        }
        analisisProyectos['Datos']['Uso'][Label[index]] = resultado_impacto;
        //console.log('Uso:',resultado_impacto)

        //Fin de vida
        resultado_impacto = 0;
        //C1
        let ECDPs = this.ECDPList.filter(c => c['project_id'] == idProyecto);
        if(ECDPs.length > 0){
          ECDPs.forEach(ECDP => {
            let energia = this.SIDList.filter(sid => sid['sourceInformarion_id'] == ECDP['source_information_id'] && sid['potential_type_id'] == impacto['id'])
            resultado_impacto = resultado_impacto + (ECDP['quantity'] * energia[0]['value'])
          })
        }
        if (!Object.keys(analisisProyectos['Datos']).includes('FinDeVida')) {
          analisisProyectos.Datos['FinDeVida'] = {};
        }
        analisisProyectos['Datos']['FinDeVida'][Label[index]] = resultado_impacto;
        //console.log('Fin de vida',resultado_impacto)
      }
      impacto_ban = true;
    })
    //console.log(analisisProyectos)
    return analisisProyectos;
  }

  getAnalisisPie(idProyecto){
    let analisisProyectos: Record<string, any> = {
      Nombre: this.projectsList.filter(p => p['id'] == idProyecto)[0]['name_project'],
      id: idProyecto,
      Datos: {}
    };
    let schemeProyect = this.materialSchemeProyectList.filter(msp => msp['project_id'] == idProyecto);
    let impacto_ban = true
    let Label = ['Agotamiento de Recursos Abióticos Minerales',
      'Agotamiento de Recursos Abióticos Fósiles', 'Calentamiento Global',
      'Agotamiento de la Capa de Ozono',
      'Acidificación', ' Eutrofización', 'Escasez de agua']

    this.potentialTypesList.forEach((impacto, index) => {
      this.impactosIgnorar2.forEach(ignorar => {
        if (impacto['name_potential_type'] === ignorar) {
          impacto_ban = false;
        }
      })
      if (impacto_ban) {
        analisisProyectos.Datos[Label[index]] = {};
        let resultado_impacto = 0;
        //Cálculos de la sección de producción
        let etapas = [2, 3, 4] //Subetaps A1 A2 y A3
        analisisProyectos['Datos'][Label[index]]['Producción'] = {}
        etapas.forEach(subetapa => {
          let subproceso = this.standarsList.filter(s => s['id'] == subetapa)[0]['name_standard'];
          if (schemeProyect.length > 0) {
            schemeProyect.forEach(ps => {
              let materiales_subetapa = this.materialSchemeDataList.filter(msd => msd['material_id'] == ps['material_id'] && msd['standard_id'] == subetapa && msd['potential_type_id'] == impacto['id'])
              if (materiales_subetapa.length > 0) {
                materiales_subetapa.forEach((material, index) => {
                  resultado_impacto = resultado_impacto + (materiales_subetapa[index]['value'] * ps['quantity'])
                })
              }
            })
          }
          analisisProyectos['Datos'][Label[index]]['Producción'][subproceso] = resultado_impacto;
          resultado_impacto = 0;
        })
        //console.log('resultado producción = ',resultado_impacto)
        resultado_impacto = 0;
        //Construcción
        analisisProyectos['Datos'][Label[index]]['Construccion'] = {};
        //A4 Transporte
        if (schemeProyect.length > 0) {

          schemeProyect.forEach(ps => {
            let internacional;
            let nacional;
            if (ps['distanceInit'] == null) {
              internacional = 0;
            } else {
              let value_transport = this.transporte_list.filter(val => val['id_potencial'] == impacto['id'] && val['id_transport'] == 1)
              internacional = value_transport[0]['valor'] * ps['distanceInit'];
            }
            if (ps['distanceEnd'] == null) {
              nacional = 0;
            } else {
              let value_transport = this.transporte_list.filter(val => val['id_potencial'] == impacto['id'] && val['id_transport'] == 4)
              nacional = value_transport[0]['valor'] * ps['distanceEnd'];
            }
            let conversion_val = this.conversion_list.filter(val => val['id_material'] == ps['material_id'])
            let peso = 1
            if (conversion_val.length > 0) {
              peso = conversion_val[0]['value']
            }
            //console.log(peso*ps['quantity']*(nacional+internacional))
            resultado_impacto = resultado_impacto + (peso * ps['quantity'] * (nacional + internacional))
          })
        }
        analisisProyectos['Datos'][Label[index]]['Construccion']['A4'] = resultado_impacto;
        //console.log('A4:',resultado_impacto);
        resultado_impacto = 0;
        //A5 instalación
        let CSEs = this.CSEList.filter(c => c['project_id'] == idProyecto);
        if (CSEs.length > 0) {
          CSEs.forEach(CSE => {
            let energia = this.SIDList.filter(sid => sid['sourceInformarion_id'] == CSE['source_information_id'] && sid['potential_type_id'] == impacto['id'])
            if (energia.length > 0) {
              energia.forEach((element, index) => {
                resultado_impacto = resultado_impacto + (energia[index]['value'] * CSE['quantity']);
              })
            }
          });
        }
        analisisProyectos['Datos'][Label[index]]['Construccion']['A5'] = resultado_impacto;
        //console.log('A5:',resultado_impacto);
        //Uso
        resultado_impacto = 0;
        analisisProyectos['Datos'][Label[index]]['Uso'] = {};
        //B4
        //las etapas son las mismas que en la sección de producción
        etapas.forEach(subetapa => {
          if (schemeProyect.length > 0) {
            schemeProyect.forEach(ps => {
              let materiales_subetapa = this.materialSchemeDataList.filter(msd => msd['material_id'] == ps['material_id'] && msd['standard_id'] == subetapa && msd['potential_type_id'] == impacto['id'])
              if (materiales_subetapa.length > 0) {
                materiales_subetapa.forEach((material, index) => {
                  resultado_impacto = resultado_impacto + (materiales_subetapa[index]['value'] * ps['quantity'] * ps['replaces'])
                })
              }
            })
          }
        })
        analisisProyectos['Datos'][Label[index]]['Uso']['B4'] = resultado_impacto;
        resultado_impacto = 0;
        //B6
        let listaACR = this.ACRList.filter(acr => acr['project_id'] == idProyecto)
        if (listaACR.length > 0) {
          let consumos = this.ECDList.filter(ecd => ecd['annual_consumption_required_id'] == listaACR[0]['id']);
          let vidaUtilID = this.projectsList.filter(p => p['id'] == idProyecto)[0]['useful_life_id']
          let vidaUtil: any = this.ULList.filter(ul => ul['id'] == vidaUtilID)[0]['name_useful_life'];
          try {
            vidaUtil = parseFloat(vidaUtil);
          } catch {
            vidaUtil = 1;
          }
          consumos.forEach(consumo => {
            let valor_impacto = this.TEDList.filter(sid => sid['type_energy_id'] == consumo['type'] && sid['potential_type_id'] == impacto['id'])
            if (valor_impacto.length > 0) {
              resultado_impacto = resultado_impacto + consumo['quantity'] * valor_impacto[0]['value'] * vidaUtil
            }
          })
        }
        analisisProyectos['Datos'][Label[index]]['Uso']['B6'] = resultado_impacto;
        //console.log('Uso:',resultado_impacto)
        //Fin de vida
        resultado_impacto = 0;
        analisisProyectos['Datos'][Label[index]]['FinDeVida'] = {};
        //C1
        let ECDPs = this.ECDPList.filter(c => c['project_id'] == idProyecto);
        if (ECDPs.length > 0) {
          ECDPs.forEach(ECDP => {
            let energia = this.SIDList.filter(sid => sid['sourceInformarion_id'] == ECDP['source_information_id'] && sid['potential_type_id'] == impacto['id'])
            resultado_impacto = resultado_impacto + (ECDP['quantity'] * energia[0]['value'])
          })
        }
        analisisProyectos['Datos'][Label[index]]['FinDeVida']['C1'] = resultado_impacto;
        //C2
        analisisProyectos['Datos'][Label[index]]['FinDeVida']['C2'] = 0;
        //C3
        analisisProyectos['Datos'][Label[index]]['FinDeVida']['C3'] = 0;
        //C4
        analisisProyectos['Datos'][Label[index]]['FinDeVida']['C4'] = 0;
        //console.log('Fin de vida',resultado_impacto)
      }
      impacto_ban = true;
    })
    //console.log(analisisProyectos)
    return analisisProyectos;
  }

  //creación de tabla de resultado
  TablaResultados(){
    this.botones_grafica_activos=true;
    this.container.clear();
    let auxL = ['Producción', 'Construccion', 'Uso', 'FinDeVida'];
    //se prepara la información por filas
    let aux=[]
    auxL.forEach(ciclo => {
      let auxdata = {}
      let auximpactos =[]
      this.outproyect_bar.forEach((element,index)=>{
        Object.keys(element.Datos).forEach(impacto => {
          if(!auximpactos.includes(impacto)){
            auximpactos.push(impacto)
            auxdata[impacto] = (element.Datos[impacto][ciclo]).toFixed(2)
          }else{
            let last = auxdata[impacto].toString()
            auxdata[impacto] = last.concat('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0')
            auxdata[impacto] = auxdata[impacto].concat((element.Datos[impacto][ciclo]).toFixed(2))
          }
        });
      })
      aux=[...aux, auxdata];
    })
    this.DatosTabla = aux;
    //console.log(this.DatosTabla);
    this.resultdosTabla=true;
    this.resultdosGraficos=false;
  }

  //regreso a gráfica
  GraficasResultados(){
    this.botones_grafica_activos = false;
    this.resultdosTabla = false;
    this.resultdosGraficos = true;
    this.iniciaBarras();
  }

  //controlar la activación de elementos en la interacción con los tipos de resultados
  show($event){
    if($event==0){
      this.Impactos_ambientales=true;
      this.Impactos_Elementos=false;
      this.Elementos_constructivos=false;
      this.bandera_graph_bar=false;
      this.impacto_seleccionado = ' ';
    }else if($event==1){
      this.Impactos_ambientales = false;
      this.Impactos_Elementos = true;
      this.Elementos_constructivos = false;
      this.bandera_graph_bar=true;
      this.iniciaBarrasSeccionDos();
    }else{
      this.Impactos_ambientales = false;
      this.Impactos_Elementos = false;
      this.Elementos_constructivos = true;
      this.impacto_seleccionado = ' ';
    }
    this.ResetTabs($event);
  }

  analisisSeccionDos(){
    //Calculos y obtención de datos para crear correctamente las gráficas de barras
  }

  //Se cargan los proyetcos existentes y se configura el menu
  menu_inicio(){
    this.projectsList.forEach(proyecto => {
      if (proyecto['id'] == this.idProyectoActivo){
        this.proyecto = proyecto['name_project']
        return;
      }
      this.proyect = [...this.proyect,
        {
          Nombre: proyecto['name_project'],
          id: proyecto['id'],
          card: false,
          num:0
        }];
    })

    this.iniciar_graficas(this.idProyectoActivo);

  }

  //activar gráfica de porcentaje
  porcentaje(val:boolean,val2:number){
    if ( val == this.bandera_porcentaje ){ return; }

    this.bandera_porcentaje = val;
    this.iniciaBarras();
    this.containerGraficas.clear();
    return;
  }

  //quitar proyecto a las gráficas
  quitarProyecto(ID:number){
    this.proyect.forEach((proyecto, index) => {
      if (proyecto.id == ID) {
        this.proyect[index].card = false;
        this.proyect[index].num = 0;
      }
    });
    this.proyect_active = this.proyect_active.filter(item => item != ID);
    this.proyect_active.forEach((element,index) =>{
      this.proyect.forEach(pr =>{
        if(pr.id == element.id){
          this.proyect[index].num = index+1;
        }
      })
    })
    this.proyectosMostrados_elementos = this.proyectosMostrados_elementos.filter(({ idproyecto }) => idproyecto != ID);
    this.outproyect_bar = this.outproyect_bar.filter(({id}) => id != ID);
    this.outproyect_radar = this.outproyect_radar.filter(({ id }) => id != ID);
    this.outproyect_pie = this.outproyect_pie.filter(({ id }) => id != ID);

    if (this.resultdosTabla) {
      this.TablaResultados();
    } else {
      this.iniciaBarras();
    }
    this.iniciaRadiales();
    this.iniciaPie();

    //this.porcentaje(this.bandera_porcentaje, 2);
  }

  //interacción con la gráfca de bar
  receiveSelector($event) {
    //cordinate with bar graph
    this.showVar_1 = false;
    this.showVar = false;
    console.log(Array.isArray($event))
    if (Array.isArray($event)){
      let sl
      $event.forEach((element,index) => {
        if(index == 0){
          sl=element
        }else{
          sl = sl.concat(' ',element)
        }
      });
      this.selector = sl;
    }else{
      this.selector = $event;
    }

    if ($event==null){
      this.bandera = 0;
      this.hover = true;
    }else{
      this.bandera=1;
      this.hover = false;
      this.ID = ' ';
    }

    this.containerGraficas.clear();
  }

  receiveSelect($event){
    this.click_anterior=$event.label;
    this.seleccion_columna=$event;
  }

  //Despliegue gráficas de pie o radar
  grafica(x: string) {
    //activate graph selectioned
    if(this.ID != ' '){
      console.log('in');
      document.getElementById(this.ID).className = 'boton-principal';
    }

    if (this.resultdosGraficos){
      this.containerGraficas.clear();
      this.bandera_resultado = 2;
      if (this.banderaGrapg == 0) {
        this.banderaGrapg++;
        this.ID = ' ';
      }
      if(x===this.ID ){
        if (this.bandera == 1) {
          this.showVar = false;
        } else {
          this.showVar_1 = false;
          this.hover = true;
          this.bandera_serie_Seleccionada = false;
          //this.childBar.forEach(c => c.resetColores());
        }
        this.banderaGrapg=0;
        this.ID = ' ';
        this.containerGraficas.clear();
        //this.iniciaBarras();
      }else{
        this.ID = x;
        if (this.bandera == 1) {
          this.showVar = true;
          this.showVar_1 =false;
          //this.bandera_serie_Seleccionada = false;
          this.iniciaPie();
        } else {
          this.showVar_1 = true;
          this.showVar=false;
          this.hover=false;
          //this.bandera_serie_Seleccionada = true;
          this.serie_Seleccionada=x;
          this.iniciaRadiales();
          //this.iniciaBarras();
        }
      }
      if (this.ID != ' ') {
        let boton = document.getElementById(this.ID);
        boton.className = 'boton-select'
      }
    }
  }

  //despliegue gráfica de pie para sección de resultados
  grafica_pie_elementos(indicador:string){
    this.bandera_resultado = 1;
    this.indicador_elegido = true;
    this.indicador_impacto=indicador;
    this.childPie.forEach(c => c.cambioIndicadorElementos(' ',indicador, this.bandera_resultado));
  }

  //resetear secciones
  ResetTabs(value:number){
    if(value==2){
      this.bandera_resultado=1;
      this.showVar=false;
      this.show_elementos=false;
      this.ID ='Producción';
      this.receiveSelector(null);
    }else if(value==0){
      this.indicador_elegido =false;
      this.show_elementos = true;
      this.proyectosMostrados_elementos.forEach(element=>{
        element.showpie= true;
        element.showbar= false;
        element.showciclo= false;
        element.ciclo= ' ';
        element.showcimenta= false;
        element.elemento= ' ';
      });
    }
  }

  //cambio entre grafica pie y bar en sección elementos contructivos
  change_graph(value:number,IDproyect:number){
    this.proyectosMostrados_elementos.forEach(element=>{
      if(element.idproyecto==IDproyect){
        element.showciclo=false;
        element.showcimenta=false;
        element.ciclo=' ';
        element.elemento=' ';
        //activar pie
        if(value==1){
          element.showbar = false;
          element.showpie = true;
        }else{
          //activar bar
          element.showbar = true;
          element.showpie = false;
        }
      }
    });
  }

  //configuración de la sección dispersión del en fase de ciclo de vida
  configurarDatos($event,IDproyect:number){
    let auxdatos=$event;
    this.proyectosMostrados_elementos.forEach(element => {
      if(element.idproyecto==IDproyect){
        element.showcimenta=false;
        element.showciclo= auxdatos.show;
        element.ciclo= auxdatos.etapa;
        if(element.showciclo){
        this.childPie.forEach(c => c.cambioID(element.ciclo,IDproyect));
        }
      }
    });
  }

  DispercionAP(){
    this.show_Dispercion=true;
  }

  //configuración de la sección dispersión del impacto en cimentación
  configurarData($event, IDproyect: number) {
    let auxdatos = $event;
    this.proyectosMostrados_elementos.forEach(element => {
      if (element.idproyecto == IDproyect) {
        element.showcimenta = auxdatos.show;
        element.elemento = auxdatos.etapa;
        if (element.showcimenta) {
          this.childBarSimple.forEach(c => c.CargarDatos(element.elemento, element.ciclo));
        }
      }
    });
  }
  graficabar(item:string,n:string){
    if (this.impacto_seleccionado===item){
      this.impacto_seleccionado=' ';
      this.childBar.forEach(c => c.resetColores());
    }else{
      this.impacto_seleccionado=item;
      this.childBar.forEach(c => c.focusSeries(n));
    }
  }

}
