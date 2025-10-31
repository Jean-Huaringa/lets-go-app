import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProvinciaActualizarDTO, ProvinciaCreacionDTO, ProvinciaDTO } from '../model/provincia.interface';
import { Observable } from 'rxjs';
import { PaginacionResponse, SuccessResponse } from '../model/api.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {
  private apiUrl = 'http://localhost:8080/ubicacion-service/api';
  private http = inject(HttpClient);

  obtenerProvincias(): Observable<SuccessResponse<PaginacionResponse<ProvinciaDTO>>> {
    return this.http.get<SuccessResponse<PaginacionResponse<ProvinciaDTO>>>(`${this.apiUrl}/provincias`);
  }

  obtenerProvinciasActivas(): Observable<SuccessResponse<PaginacionResponse<ProvinciaDTO>>> {
    return this.http.get<SuccessResponse<PaginacionResponse<ProvinciaDTO>>>(`${this.apiUrl}/provincias/activos`);
  }

  obtenerProvinciaPorId(id: number): Observable<SuccessResponse<ProvinciaDTO>> {
    return this.http.get<SuccessResponse<ProvinciaDTO>>(`${this.apiUrl}/provincias/${id}`);
  }

  crearProvincia(provincia: ProvinciaCreacionDTO): Observable<SuccessResponse<ProvinciaDTO>> {
    return this.http.post<SuccessResponse<ProvinciaDTO>>(`${this.apiUrl}/provincias`, provincia);
  }

  actualizarProvincia(id: number, provincia: ProvinciaActualizarDTO): Observable<SuccessResponse<ProvinciaDTO>> {
    return this.http.put<SuccessResponse<ProvinciaDTO>>(`${this.apiUrl}/provincias/${id}`, provincia);
  }

  cambiarEstadoProvincia(id: number): Observable<SuccessResponse<string>> {
    return this.http.put<SuccessResponse<string>>(`${this.apiUrl}/provincias/${id}/cambiar-estado`, null);
  }

  eliminarProvincia(id: number): Observable<SuccessResponse<string>> {
    return this.http.delete<SuccessResponse<string>>(`${this.apiUrl}/provincias/${id}`);
  }
}
