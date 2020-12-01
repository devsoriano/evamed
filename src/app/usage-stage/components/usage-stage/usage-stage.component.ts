import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage-stage',
  templateUrl: './usage-stage.component.html',
  styleUrls: ['./usage-stage.component.scss']
})
export class UsageStageComponent implements OnInit {
  nameProject: string;
  cantidad: string;

  constructor(
  ) { }

  ngOnInit() {
    const PDP = JSON.parse(sessionStorage.getItem('primaryDataProject'));

    this.nameProject = PDP.name_project;
  }

  saveStepThree() {
    console.log('save step 3');
  }

}
