import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CambiarClaveDto, UsuarioCreacionDTO } from '../../oauth/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/user-app/api';
  private http = inject(HttpClient);

  cambiarClave(data: CambiarClaveDto) {
    return this.http.put(`${this.apiUrl}/account/actualizar-clave`, data);
  }

  registrarCuenta(data: UsuarioCreacionDTO) {
    return this.http.post(`${this.apiUrl}/account/register`, data);
  }

  cambiarClaveUsuario(idUsuario: number) {
    return this.http.put(`${this.apiUrl}/usuarios/${idUsuario}/actualizar-clave`, null);
  }
}
