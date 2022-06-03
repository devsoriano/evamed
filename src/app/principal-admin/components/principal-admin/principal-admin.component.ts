import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal-admin',
  templateUrl: './principal-admin.component.html',
  styleUrls: ['./principal-admin.component.scss'],
})
export class PrincipalAdminComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToMaterials() {
    this.router.navigateByUrl('/admin-materials');
  }

  goToTransports() {
    this.router.navigateByUrl('/admin-transports');
  }

  goToMachinery() {
    this.router.navigateByUrl('/admin-machinery');
  }

  goToEnergy() {
    this.router.navigateByUrl('/admin-energy');
  }

  goToUnits() {
    this.router.navigateByUrl('/admin-units');
  }

  goToDBMaterials() {
    this.router.navigateByUrl('/admin-db-materials');
  }

  goToPotentials() {
    this.router.navigateByUrl('/admin-potential');
  }

  goToUsers() {
    this.router.navigateByUrl('/admin-others');
  }

  goToHome() {
    this.router.navigateByUrl('/');
  }
}
