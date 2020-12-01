import { Component, OnInit } from '@angular/core';
import { CatalogsService } from 'src/app/core/services/catalogs/catalogs.service';

@Component({
  selector: 'app-usage-stage',
  templateUrl: './usage-stage.component.html',
  styleUrls: ['./usage-stage.component.scss']
})
export class UsageStageComponent implements OnInit {
  nameProject: string;
  cantidad: string;
  catalogoUnidadEnergia: [];

  constructor(
    private catalogsService: CatalogsService,
  ) {
    this.catalogsService.getEnergyUnits().subscribe(data => {
      this.catalogoUnidadEnergia = data;
    });
  }

  ngOnInit() {
    const PDP = JSON.parse(sessionStorage.getItem('primaryDataProject'));

    this.nameProject = PDP.name_project;
  }

  saveStepThree() {
    console.log('save step 3');
  }

}
