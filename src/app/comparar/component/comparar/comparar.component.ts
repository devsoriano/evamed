import { Component, OnInit, Input, ViewChildren, QueryList} from '@angular/core';
import { element } from 'protractor';
import { BarChartSimpleComponent } from 'src/app/bar-chart-simple/bar-chart-simple.component';
import { BarChartComponent } from 'src/app/bar-chart/bar-chart.component';
import { PieChartComponent } from 'src/app/pie-chart/pie-chart.component';
import { RadialChartComponent } from 'src/app/radial-chart/radial-chart.component';

interface impactos_menu{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-comparar',
  templateUrl: './comparar.component.html',
  styleUrls: ['./comparar.component.scss'],
})
export class CompararComponent implements OnInit {

  @Input('Inproyectos_bar') inputproyect_bar: any;
  @Input('Inproyectos_radar') inputproyect_radar: any;
  @Input('Inproyectos_pie') inputproyect_pie: any;
  @ViewChildren(BarChartComponent)
  childBar: QueryList<BarChartComponent>;
  @ViewChildren(PieChartComponent)
  childPie: QueryList<PieChartComponent>;
  @ViewChildren(RadialChartComponent)
  childRadar: QueryList<RadialChartComponent>;
  @ViewChildren(BarChartSimpleComponent)
  childBarSimple: QueryList<BarChartSimpleComponent>;
  selector: string;
  bandera:number;
  showVar: boolean = false;
  showVar_1: boolean = false;
  ID:string;
  proyecto:string;
  banderaGrapg:number=0;
  proyect=[];
  proyect_active=[];
  inputproyect_bar_porcent:any;
  outproyect_bar_num = [];
  outproyect_bar_porcent=[];
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
  selectedValue: string;
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
    { Nombre: 'Cimentación', nivel: 'n1' }, { Nombre: 'Pisos', nivel: 'n2' }, { Nombre: 'Muros Interiores', nivel: 'n3' },
    { Nombre: 'Muros ext.', nivel: 'n4' }, { Nombre: 'Ventanas', nivel: 'n5' }, { Nombre: 'Ins Especiales', nivel: 'n6' },
    { Nombre: 'Otros', nivel: 'n7' }, { Nombre: 'Techo cubierta', nivel: 'n8' }, { Nombre: 'Entrepiso', nivel: 'n9' },
    { Nombre: 'Estructura', nivel: 'n10' }, { Nombre: 'Puertas', nivel: 'n11' }];
  impacto_seleccionado=' ';


  constructor(){ }

  ngOnInit(): void {
    this.proyecto="Hospital infantil Lomas Altas";
    this.menu_inicio();
    this.ID = 'Producción';
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
    }else{
      this.Impactos_ambientales = false;
      this.Impactos_Elementos = false;
      this.Elementos_constructivos = true;
      this.impacto_seleccionado = ' ';
    }
    this.ResetTabs($event);
  }
  //Se cargan los proyetcos existentes y se configura el menu
  menu_inicio(){
    this.inputproyect_bar.forEach(proyecto => {
      this.proyect = [...this.proyect,
        {
          Nombre: proyecto.Nombre,
          id: proyecto.id,
          card:false
        }]
    });
    this.datosProcentaje();
    //carga de datos inicial en graficas
    this.proyect_active.push(0);
    this.outproyect_bar_num.push(this.inputproyect_bar[0]);
    this.outproyect_radar.push(this.inputproyect_radar[0]);
    this.outproyect_pie.push(this.inputproyect_pie[0]);
    this.outproyect_bar_porcent.push(this.inputproyect_bar_porcent[0]);
    //cargar menu de impactos
    Object.keys(this.inputproyect_bar[0].Datos).forEach(element => {
      impactos_menu:this.Impactos_menu=[...this.Impactos_menu, {
        value:element,
        viewValue:element
      }];
    });
  }

  //Poner en porcentajes los datos
  datosProcentaje(){
    this.inputproyect_bar_porcent =[];
    let aux_datos;
    let n;
    let aux_num;
    this.inputproyect_bar.forEach(proyecto => {
      const auxDatos = [ 'Producción', 'Construccion', 'Uso', 'FinDeVida'];
      aux_datos = {};
      Object.keys(proyecto.Datos).forEach(indicador => {
        aux_num = { Producción: 0, Construccion: 0, Uso: 0, FinDeVida: 0};
        auxDatos.forEach(etapa => {
          n= Object.values(proyecto.Datos[indicador]).reduce((a: any, b: any) => a + b, 0);
          aux_num[etapa] = proyecto.Datos[indicador][etapa] * 100 / n;
        });
        aux_datos={...aux_datos,
          [indicador]:aux_num
        };
      });
      this.inputproyect_bar_porcent=[...this.inputproyect_bar_porcent,
        {
          Nombre : proyecto.Nombre,
          id: proyecto.id,
          Datos : aux_datos
        }
      ];
    });
  }

  //activar gráfica de porcentaje
  porcentaje(val:boolean,val2:number){
    if(val2==1){
      if(val){
        this.bandera_porcentaje=false;
        this.bandera_num= true;
        this.childBar.forEach(c => c.agregarProyecto(this.outproyect_bar_porcent));
      }else{
        this.bandera_porcentaje =true;
        this.bandera_num = false;
        this.childBar.forEach(c => c.agregarProyecto(this.outproyect_bar_num));
      }
    }else{
      if (val) {
        this.childBar.forEach(c => c.agregarProyecto(this.outproyect_bar_num));
      } else {
        this.childBar.forEach(c => c.agregarProyecto(this.outproyect_bar_porcent));
      }
    }
  }

  //agregar proyecto a graficas
  iniciar_graficas(id:number){
    if (!this.proyect_active.some((item) => item == id)) {
      this.proyect_active.push(id);
      this.outproyect_bar_num.push(this.inputproyect_bar[id]);
      this.outproyect_bar_porcent.push(this.inputproyect_bar_porcent[id]);
      this.outproyect_radar.push(this.inputproyect_radar[id]);
      this.outproyect_pie.push(this.inputproyect_pie[id]);
      this.proyect.forEach((proyecto,index) => {
        if(proyecto.id==id){
          this.proyect[index].card = true;
        }
      });
      this.porcentaje(this.bandera_porcentaje,2);
      this.proyectosMostrados_elementos=[...this.proyectosMostrados_elementos,{
        idproyecto: id,
        showpie: true,
        showbar: false,
        showciclo: false,
        ciclo: ' ',
        showcimenta: false,
        elemento:' '
      }];
      this.showVar = false;
      this.showVar_1 = false;
    }
  }
  //quitar proyecto a las gráficas
  quitarProyecto(ID:number){
    this.proyect.forEach((proyecto, index) => {
      if (proyecto.id == ID) {
        this.proyect[index].card = false;
      }
    });
    this.proyect_active = this.proyect_active.filter(item => item != ID);
    this.proyectosMostrados_elementos = this.proyectosMostrados_elementos.filter(({ idproyecto }) => idproyecto != ID);
    this.outproyect_bar_num = this.outproyect_bar_num.filter(({id}) => id != ID);
    this.outproyect_bar_porcent = this.outproyect_bar_porcent.filter(({ id }) => id != ID);
    this.outproyect_radar = this.outproyect_radar.filter(({ id }) => id != ID);
    this.outproyect_pie = this.outproyect_pie.filter(({ id }) => id != ID);
    this.porcentaje(this.bandera_porcentaje, 2);
  }

  //interacción con la gráfca de bar
  receiveSelector($event) {
    //cordinate with bar graph
    this.selector = $event;
    this.showVar_1 = false;
    this.showVar = false;
    if (this.selector==null){
      this.bandera = 0;
      this.hover = true;
    }else{
      this.bandera=1;
      this.hover = false;
    }
  }

  //Despliegue gráficas de pie o radar
  grafica(x: string) {
    //activate graph selectioned
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
        this.childBar.forEach(c => c.resetColores());
      }
      this.banderaGrapg=0;
      this.ID = x;
    }else{
      this.ID = x;
      if (this.bandera == 1) {
        this.showVar = true;
        this.showVar_1 =false;
        this.childPie.forEach(c => c.cambioIndicadorElementos(this.ID,this.selector,this.bandera_resultado));
      } else {
        this.showVar_1 = true;
        this.showVar=false;
        this.hover=false;
        this.childRadar.forEach(c => c.cargarDatos(this.ID));
        this.childBar.forEach(c => c.focusSeries(this.ID));
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
