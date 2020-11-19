import { Component, OnInit, Input, ViewChildren, QueryList} from '@angular/core';
import { element } from 'protractor';
import { BarChartComponent } from 'src/app/bar-chart/bar-chart.component';
import { PieChartComponent } from 'src/app/pie-chart/pie-chart.component';
import { RadialChartComponent } from 'src/app/radial-chart/radial-chart.component';

@Component({
  selector: 'app-comparar',
  templateUrl: './comparar.component.html',
  styleUrls: ['./comparar.component.scss'],
})
export class CompararComponent implements OnInit {

  @Input('Inproyectos_bar') inputproyect_bar: any;
  @Input('Inproyectos_radar') inputproyect_radar: any;
  @Input('Inproyectos_pie') inputproyect_pie: any;
  @Input('Inporcentaje') Porcentaje: any;
  @ViewChildren(BarChartComponent)
  childBar: QueryList<BarChartComponent>;
  @ViewChildren(PieChartComponent)
  childPie: QueryList<PieChartComponent>;
  @ViewChildren(RadialChartComponent)
  childRadar: QueryList<RadialChartComponent>;
  selector: string;
  bandera:number;
  showVar: boolean = false;
  showVar_1: boolean = false;
  ID:string;
  proyecto:string;
  banderaGrapg:number=0;
  proyect=[];
  proyect_active=[];
  outproyect_bar=[];
  outproyect_radar=[];
  outproyect_pie = [];

  constructor(){ }

  ngOnInit(): void {
    this.proyecto="Hospital infantil Lomas Altas";
    this.menu_inicio();
    this.ID = 'Producción';
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
    this.proyect_active.push(0);
    //carga de datos inicial en graficas
    this.outproyect_bar.push(this.inputproyect_bar[0]);
    this.outproyect_radar.push(this.inputproyect_radar[0]);
    this.outproyect_pie.push(this.inputproyect_pie[0]);
  }

  porcentaje(){
    this.childBar.forEach(c => c.togglePorcentaje(false));

  }
  //agregar proyecto a graficas
  iniciar_graficas(id:number){
    if (!this.proyect_active.some((item) => item == id)) {
      this.proyect_active.push(id);
      this.outproyect_bar.push(this.inputproyect_bar[id]);
      this.outproyect_radar.push(this.inputproyect_radar[id]);
      this.outproyect_pie.push(this.inputproyect_pie[id]);
      this.proyect.forEach((proyecto,index) => {
        if(proyecto.id==id){
          this.proyect[index].card = true;
        }
      });
      this.childBar.forEach(c => c.agregarProyecto(this.outproyect_bar));
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
    this.outproyect_bar = this.outproyect_bar.filter(({id}) => id != ID);
    this.outproyect_radar = this.outproyect_radar.filter(({ id }) => id != ID);
    this.outproyect_pie = this.outproyect_pie.filter(({ id }) => id != ID);
    this.childBar.forEach(c => c.agregarProyecto(this.outproyect_bar));
  }

  receiveSelector($event) {
    //cordinate with bar graph
    this.selector = $event;
    this.showVar_1 = false;
    this.showVar = false;
    if (this.selector==null){
      this.bandera = 0;
    }else{
      this.bandera=1;
    }

  }

  grafica(x: string) {
    //activate graph selectioned
    if (this.banderaGrapg == 0) {
      this.banderaGrapg++;
      this.ID = ' ';
    }
    if(x===this.ID ){
      console.log("1" );
      if (this.bandera == 1) {
        this.showVar = false;
      } else {
        this.showVar_1 = false;
      }
      this.banderaGrapg=0;
      this.ID = x;
    }else{
      this.ID = x;
      if (this.bandera == 1) {
        this.showVar = true;
        this.showVar_1 =false;
        this.childPie.forEach(c => c.cargarDatos(this.ID,this.selector));
      } else {
        this.showVar_1 = true;
        this.showVar=false;
        this.childRadar.forEach(c => c.cargarDatos(this.ID));
      }
    }
  }

}
