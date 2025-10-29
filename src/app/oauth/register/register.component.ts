import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthService } from '../../core/services/auth.service';
import { UsuarioCreacionDTO } from '../auth.interface';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private oauthService = inject(OAuthService);
  private authService = inject(AuthService);
  private fb = inject(FormBuilder);

  form = this.fb.group({
    nombre: [''],
    apellido: [''],
    tipoDocumento: [''],
    nmrDocumento: [''],
    email: [''],
    clave: [''],
    telefono: [''],
    idRol: [0],
    idPais: [0],
    idDepartamento: [0],
    idProvincia: [0],
    idDistrito: [0]
  });

  register() {
    const usuario = this.form.value as UsuarioCreacionDTO;

    this.authService.registrarCuenta(usuario).subscribe({
      next: () => {
        alert('Usuario creado con éxito');
        this.form.reset();
      },
      error: (err) => {
        console.error(err);
        alert('Error al crear el usuario');
      }
    });
  }

  login() {
    this.oauthService.initCodeFlow();
  }
}
