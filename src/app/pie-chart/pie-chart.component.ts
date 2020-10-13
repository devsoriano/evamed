import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  @Input() showMePartially: boolean;

  public pieChartLabels=['salesQ1','sales Q2','sales Q3','sales Q4'];
  public pieChartData=[120,150,180,90];
  public pieChartType='doughnut';
  constructor() { }

  ngOnInit(): void {
  }

}
