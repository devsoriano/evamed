import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-comparar',
  templateUrl: './comparar.component.html',
  styleUrls: ['./comparar.component.scss'],
})
export class CompararComponent implements OnInit {

  selector: string;
  bandera:number;
  showVar: boolean = false;
  showVar_1: boolean = false;
  ID:number;
  proyecto:string;

  constructor(){ }

  ngOnInit(): void {
    this.proyecto="Hospital infantil Lomas Altas";
  }

  receiveSelector($event) {
    //cordinate with bar graph
    this.selector = $event;
    if (this.selector==null){
      this.bandera = 0;
    }else{
      this.bandera=1;
    }
  }

  grafica(x: number) {
    //activate graph selectioned
    this.ID = x;
    if (this.bandera == 1) {
      this.showVar = !this.showVar;
    } else {
      this.showVar_1 = !this.showVar_1;
    }
  }

}
