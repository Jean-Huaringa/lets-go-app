import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PaginacionResponse, SuccessResponse } from '../model/api.interfaces';
import { TrabajadorCreacionDTO, TrabajadorDTO } from '../model/trabajador.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {
  private apiUrl = 'http://localhost:8080/user-app/api';
  private http = inject(HttpClient);

  obtenerTrabajadores(): Observable<SuccessResponse<PaginacionResponse<TrabajadorDTO>>> {
    return this.http.get<SuccessResponse<PaginacionResponse<TrabajadorDTO>>>(`${this.apiUrl}/trabajadores`);
  }

  obtenerTrabajadoresActivos(): Observable<SuccessResponse<PaginacionResponse<TrabajadorDTO>>> {
    return this.http.get<SuccessResponse<PaginacionResponse<TrabajadorDTO>>>(`${this.apiUrl}/trabajadores/activos`);
  }

  obtenerTrabajadoresInactivos(): Observable<SuccessResponse<PaginacionResponse<TrabajadorDTO>>> {
    return this.http.get<SuccessResponse<PaginacionResponse<TrabajadorDTO>>>(`${this.apiUrl}/trabajadores/inactivos`);
  }

  obtenerTrabajadorPorId(id: number): Observable<SuccessResponse<TrabajadorDTO>> {
    return this.http.get<SuccessResponse<TrabajadorDTO>>(`${this.apiUrl}/trabajadores/${id}`);
  }

  crearTrabajador(trabajador: TrabajadorCreacionDTO): Observable<SuccessResponse<TrabajadorDTO>> {
    return this.http.post<SuccessResponse<TrabajadorDTO>>(`${this.apiUrl}/trabajadores`, trabajador);
  }

  actualizarTrabajador(id: number, trabajador: TrabajadorCreacionDTO): Observable<SuccessResponse<TrabajadorDTO>> {
    return this.http.put<SuccessResponse<TrabajadorDTO>>(`${this.apiUrl}/trabajadores/${id}`, trabajador);
  }

  cambiarEstadoTrabajador(id: number): Observable<SuccessResponse<string>> {
    return this.http.put<SuccessResponse<string>>(`${this.apiUrl}/trabajadores/${id}/cambiar-estado`, null);
  }

  eliminarTrabajador(id: number): Observable<SuccessResponse<string>> {
    return this.http.delete<SuccessResponse<string>>(`${this.apiUrl}/trabajadores/${id}`);
  }
}
