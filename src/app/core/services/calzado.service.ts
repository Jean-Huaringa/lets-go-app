import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginacionResponse, SuccessResponse } from '../model/api.interfaces';
import { CalzadoActualizarDTO, CalzadoCreacionDTO, CalzadoDTO } from '../model/calzado.interface';

@Injectable({
  providedIn: 'root'
})
export class CalzadoService {
  private apiUrl = 'http://localhost:8080/product-app/api';
  private http = inject(HttpClient);

  obtenerCalzados(): Observable<SuccessResponse<PaginacionResponse<CalzadoDTO>>> {
    return this.http.get<SuccessResponse<PaginacionResponse<CalzadoDTO>>>(`${this.apiUrl}/calzados`);
  }

  obtenerCalzadosActivos(): Observable<SuccessResponse<PaginacionResponse<CalzadoDTO>>> {
    return this.http.get<SuccessResponse<PaginacionResponse<CalzadoDTO>>>(`${this.apiUrl}/calzados/activos`);
  }

  obtenerCalzadoPorId(id: number): Observable<SuccessResponse<CalzadoDTO>> {
    return this.http.get<SuccessResponse<CalzadoDTO>>(`${this.apiUrl}/calzados/${id}`);
  }

  crearCalzado(calzado: CalzadoCreacionDTO): Observable<SuccessResponse<CalzadoDTO>> {
    return this.http.post<SuccessResponse<CalzadoDTO>>(`${this.apiUrl}/calzados`, calzado);
  }

  actualizarCalzado(id: number, calzado: CalzadoActualizarDTO): Observable<SuccessResponse<CalzadoDTO>> {
    return this.http.put<SuccessResponse<CalzadoDTO>>(`${this.apiUrl}/calzados/${id}`, calzado);
  }

  cambiarEstadoCalzado(id: number): Observable<SuccessResponse<string>> {
    return this.http.put<SuccessResponse<string>>(`${this.apiUrl}/calzados/${id}/cambiar-estado`, null);
  }

  eliminarCalzado(id: number): Observable<SuccessResponse<string>> {
    return this.http.delete<SuccessResponse<string>>(`${this.apiUrl}/calzados/${id}`);
  }
}
