import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-cambiar-clave',
  imports: [ReactiveFormsModule],
  templateUrl: './cambiar-clave.component.html',
  styleUrl: './cambiar-clave.component.css'
})
export class CambiarClaveComponent {
  private authService = inject(AuthService);
  private fb = inject(FormBuilder);

  form = this.fb.group({
    claveActual: [''],
    nuevaClave: [''],
  });

  cambiarClave() {
    const { claveActual, nuevaClave } = this.form.value;
    
    if (!claveActual || !nuevaClave) {
      console.error('Por favor, complete todos los campos.');
      return;
    }

    this.authService.cambiarClave({ claveActual, nuevaClave }).subscribe({
      next: (response) => {
        console.log('Clave cambiada exitosamente', response);
        this.form.reset();
      },
      error: (error) => {
        console.error('Error al cambiar la clave', error);
      }
    });
  }
}
