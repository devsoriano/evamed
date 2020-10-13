import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-radial-chart',
  templateUrl: './radial-chart.component.html',
  styleUrls: ['./radial-chart.component.scss']
})
export class RadialChartComponent implements OnInit {
  @Input() showMe: boolean;

  public radarChartOptions = {
    responsive: true,
  };
  public radarChartLabels = ['Punctuality', 'Communication', 'Problem Solving',
    'Team Player', 'Coding', 'Technical Knowledge', 'Meeting Deadlines'];

  public radarChartData = [
    { data: [0, 1, 2, 3, 4, 5, 6], label: 'Employee Skill Analysis' }
  ];
  public radarChartType = 'radar';

  constructor() { }

  ngOnInit(): void {
  }

}
