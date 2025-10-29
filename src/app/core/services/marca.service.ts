import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginacionResponse, SuccessResponse } from '../model/api.interfaces';
import { MarcaActualizarDTO, MarcaCreacionDTO, MarcaDTO } from '../model/marca.interface';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {
  private apiUrl = 'http://localhost:8080/product-app/api';
  private http = inject(HttpClient);

  obtenerMarcas(): Observable<SuccessResponse<PaginacionResponse<MarcaDTO>>> {
    return this.http.get<SuccessResponse<PaginacionResponse<MarcaDTO>>>(`${this.apiUrl}/marcas`);
  }

  obtenerMarcasActivas(): Observable<SuccessResponse<PaginacionResponse<MarcaDTO>>> {
    return this.http.get<SuccessResponse<PaginacionResponse<MarcaDTO>>>(`${this.apiUrl}/marcas/activos`);
  }

  obtenerMarcaPorId(id: number): Observable<SuccessResponse<MarcaDTO>> {
    return this.http.get<SuccessResponse<MarcaDTO>>(`${this.apiUrl}/marcas/${id}`);
  }

  crearMarca(marca: MarcaCreacionDTO): Observable<SuccessResponse<MarcaDTO>> {
    return this.http.post<SuccessResponse<MarcaDTO>>(`${this.apiUrl}/marcas`, marca);
  }

  actualizarMarca(id: number, marca: MarcaActualizarDTO): Observable<SuccessResponse<MarcaDTO>> {
    return this.http.put<SuccessResponse<MarcaDTO>>(`${this.apiUrl}/marcas/${id}`, marca);
  }

  cambiarEstadoMarca(id: number): Observable<SuccessResponse<string>> {
    return this.http.put<SuccessResponse<string>>(`${this.apiUrl}/marcas/${id}/cambiar-estado`, null);
  }

  eliminarMarca(id: number): Observable<SuccessResponse<string>> {
    return this.http.delete<SuccessResponse<string>>(`${this.apiUrl}/marcas/${id}`);
  }
}
