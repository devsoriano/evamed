import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-and-return',
  templateUrl: './project-and-return.component.html',
  styleUrls: ['./project-and-return.component.scss']
})
export class ProjectAndReturnComponent implements OnInit {
  nameProject: string;

  constructor() { }

  ngOnInit(): void {
    const PDP = JSON.parse(sessionStorage.getItem('primaryDataProject'));
    this.nameProject = PDP.name_project;
  }

}
