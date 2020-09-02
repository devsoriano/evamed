import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddNewProjectComponent } from '../../../add-new-project/add-new-project.component';

@Component({
  selector: 'app-home-evamed',
  templateUrl: './home-evamed.component.html',
  styleUrls: ['./home-evamed.component.scss']
})
export class HomeEvamedComponent implements OnInit {

  animal: string;
  name: string;

  constructor(
    private auth: AuthService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void { }

  logout() {
    this.auth.logout()
    .then(() => {
      this.router.navigate(['/auth/login']);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddNewProjectComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
