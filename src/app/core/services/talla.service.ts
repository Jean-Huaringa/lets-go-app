import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginacionResponse, SuccessResponse } from '../model/api.interfaces';
import { TallaActualizarDTO, TallaCreacionDTO, TallaDTO } from '../model/talla.interface';

@Injectable({
  providedIn: 'root'
})
export class TallaService {
  private apiUrl = 'http://localhost:8080/product-app/api';
  private http = inject(HttpClient);

  obtenerTallas(): Observable<SuccessResponse<PaginacionResponse<TallaDTO>>> {
    return this.http.get<SuccessResponse<PaginacionResponse<TallaDTO>>>(`${this.apiUrl}/tallas`);
  }

  obtenerTallasActivas(): Observable<SuccessResponse<PaginacionResponse<TallaDTO>>> {
    return this.http.get<SuccessResponse<PaginacionResponse<TallaDTO>>>(`${this.apiUrl}/tallas/activos`);
  }

  obtenerTallaPorId(id: number): Observable<SuccessResponse<TallaDTO>> {
    return this.http.get<SuccessResponse<TallaDTO>>(`${this.apiUrl}/tallas/${id}`);
  }

  crearTalla(talla: TallaCreacionDTO): Observable<SuccessResponse<TallaDTO>> {
    return this.http.post<SuccessResponse<TallaDTO>>(`${this.apiUrl}/tallas`, talla);
  }

  actualizarTalla(id: number, talla: TallaActualizarDTO): Observable<SuccessResponse<TallaDTO>> {
    return this.http.put<SuccessResponse<TallaDTO>>(`${this.apiUrl}/tallas/${id}`, talla);
  }

  cambiarEstadoTalla(id: number): Observable<SuccessResponse<string>> {
    return this.http.put<SuccessResponse<string>>(`${this.apiUrl}/tallas/${id}/cambiar-estado`, null);
  }

  eliminarTalla(id: number): Observable<SuccessResponse<string>> {
    return this.http.delete<SuccessResponse<string>>(`${this.apiUrl}/tallas/${id}`);
  }
}
