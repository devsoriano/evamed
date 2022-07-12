import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  ngOnInit() {}

  login(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      this.authService
        .login(value.email, value.password)
        .then(() => {
          console.log('proceso de login');
          console.log(this.authService);
          console.log(this);
          //if (this.authService.isEmailVerified() == true) {
          localStorage.setItem('email-login', value.email);
          this.router.navigate(['/']);
          //} else {
          // alert(
          //    'correo no validado, revisa tu correo para validar tu cuenta'
          //  );
          //  this.authService.verifyEmail();
          // }
        })
        .catch(() => {
          alert('no es válido');
        });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  register() {
    this.router.navigate(['/auth/register']);
  }
}
