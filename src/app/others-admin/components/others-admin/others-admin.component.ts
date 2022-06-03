import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-others-admin',
  templateUrl: './others-admin.component.html',
  styleUrls: ['./others-admin.component.scss']
})
export class OthersAdminComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'institution', 'sector', 'country'];

  users: any;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  goToAdmin() {
    this.router.navigateByUrl('admin');
  }

}
