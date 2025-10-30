import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginacionResponse, SuccessResponse } from '../model/api.interfaces';
import { TiendaActualizarDTO, TiendaCreacionDTO, TiendaDTO } from '../model/tienda.interface';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  private apiUrl = 'http://localhost:8080/store-app/api';
  private http = inject(HttpClient);

  obtenerTiendas(): Observable<SuccessResponse<TiendaDTO[]>> {
    return this.http.get<SuccessResponse<TiendaDTO[]>>(`${this.apiUrl}/tienda`);
  }

  obtenerTiendasActivas(): Observable<SuccessResponse<PaginacionResponse<TiendaDTO>>> {
    return this.http.get<SuccessResponse<PaginacionResponse<TiendaDTO>>>(`${this.apiUrl}/tienda/activos`);
  }

  obtenerTiendaPorId(id: number): Observable<SuccessResponse<TiendaDTO>> {
    return this.http.get<SuccessResponse<TiendaDTO>>(`${this.apiUrl}/tienda/${id}`);
  }

  crearTienda(tienda: TiendaCreacionDTO): Observable<SuccessResponse<TiendaDTO>> {
    return this.http.post<SuccessResponse<TiendaDTO>>(`${this.apiUrl}/tienda`, tienda);
  }

  actualizarTienda(id: number, tienda: TiendaActualizarDTO): Observable<SuccessResponse<TiendaDTO>> {
    return this.http.put<SuccessResponse<TiendaDTO>>(`${this.apiUrl}/tienda/${id}`, tienda);
  }

  cambiarEstadoTienda(id: number): Observable<SuccessResponse<string>> {
    return this.http.put<SuccessResponse<string>>(`${this.apiUrl}/tienda/${id}/cambiar-estado`, null);
  }

  eliminarTienda(id: number): Observable<SuccessResponse<string>> {
    return this.http.delete<SuccessResponse<string>>(`${this.apiUrl}/tienda/${id}`);
  }
}
