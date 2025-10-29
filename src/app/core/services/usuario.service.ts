import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UsuarioCreacionDTO } from '../../oauth/auth.interface';
import { Observable } from 'rxjs';
import { PaginacionResponse, SuccessResponse } from '../model/api.interfaces';
import { UsuarioActualizarCorreoDTO, UsuarioDTO } from '../model/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:8080/user-app/api';
  private http = inject(HttpClient);

  obtenerUsuarios(): Observable<SuccessResponse<PaginacionResponse<UsuarioDTO>>> {
    return this.http.get<SuccessResponse<PaginacionResponse<UsuarioDTO>>>(`${this.apiUrl}/usuarios`);
  }

  obtenerUsuariosActivos(): Observable<SuccessResponse<PaginacionResponse<UsuarioDTO>>> {
    return this.http.get<SuccessResponse<PaginacionResponse<UsuarioDTO>>>(`${this.apiUrl}/usuarios/activos`);
  }

  obtenerUsuarioPorId(id: number): Observable<SuccessResponse<UsuarioDTO>> {
    return this.http.get<SuccessResponse<UsuarioDTO>>(`${this.apiUrl}/usuarios/${id}`);
  }

  crearUsuario(usuario: UsuarioCreacionDTO) {
    return this.http.post(`${this.apiUrl}/usuarios`, usuario);
  }

  actualizarCorreoUsuario(id: number, dto: UsuarioActualizarCorreoDTO): Observable<SuccessResponse<UsuarioDTO>> {
    return this.http.put<SuccessResponse<UsuarioDTO>>(`${this.apiUrl}/usuarios/${id}/actualizar-correo`, dto);
  }

  cambiarEstadoUsuario(id: number): Observable<SuccessResponse<string>> {
    return this.http.put<SuccessResponse<string>>(`${this.apiUrl}/usuarios/${id}/cambiar-estado`, null);
  }

  eliminarUsuario(id: number): Observable<SuccessResponse<string>> {
    return this.http.delete<SuccessResponse<string>>(`${this.apiUrl}/usuarios/${id}`);
  }
}
