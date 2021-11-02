import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
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

  recovery(event: Event) {
     event.preventDefault()
    if (this.form.valid) {
      const value = this.form.value;
      this.authService.resetPassword(value.email)
      .then( () => {
        alert('El correo para restablecer la contraseña se ha enviado corectamente');
        this.router.navigate(['/']);
      })
      .catch( () => {
        alert('Error! Intenta nuevamente la solicitud');
      });
     }

}
