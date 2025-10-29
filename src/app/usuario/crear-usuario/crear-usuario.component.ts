import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { UsuarioCreacionDTO } from '../../oauth/auth.interface';
import { UsuarioService } from '../../core/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  imports: [ReactiveFormsModule],
  templateUrl: './crear-usuario.component.html',
  styleUrl: './crear-usuario.component.css'
})
export class CrearUsuarioComponent {
  private fb = inject(FormBuilder);
  private usuarioService = inject(UsuarioService);

  form = this.fb.group({
    nombre: [''],
    apellido: [''],
    tipoDocumento: [''],
    nmrDocumento: [''],
    email: [''],
    telefono: [''],
    idRol: [0],
    idPais: [0],
    idDepartamento: [0],
    idProvincia: [0],
    idDistrito: [0]
  });

  crearUsuario() {
    console.log(this.form.value);
    
    if (this.form.invalid) {
      return;
    }

    const usuario = this.form.value as UsuarioCreacionDTO;

    this.usuarioService.crearUsuario(usuario).subscribe({
      next: (response) => {
        console.log('Usuario creado con éxito:', response);
      },
      error: (error) => {
        console.error('Error al crear el usuario:', error);
      }
    });
  }
}
