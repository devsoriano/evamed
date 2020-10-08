import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-principal-dashboard',
  templateUrl: './principal-dashboard.component.html',
  styleUrls: ['./principal-dashboard.component.scss']
})
export class PrincipalDashboardComponent implements OnInit {

  typesOfShoes: string[] = [
    'Muros interiores',
    'Muros exteriores',
    'Pisos',
    'Techos',
    'Entrepiso',
    'Estructura',
    'Puertas',
    'Ventanas',
    'Inst especiales',
    'Otros',
    'Usuario'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
