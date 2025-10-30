import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginacionResponse, SuccessResponse } from '../model/api.interfaces';
import { PaisActualizarDTO, PaisCreacionDTO, PaisDTO } from '../model/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl = 'http://localhost:8080/ubicacion-service/api';
  private http = inject(HttpClient);

  obtenerPaises(): Observable<SuccessResponse<PaginacionResponse<PaisDTO>>> {
    return this.http.get<SuccessResponse<PaginacionResponse<PaisDTO>>>(`${this.apiUrl}/paises?page=0&size=100`);
  }

  obtenerPaisesActivos(): Observable<SuccessResponse<PaginacionResponse<PaisDTO>>> {
    return this.http.get<SuccessResponse<PaginacionResponse<PaisDTO>>>(`${this.apiUrl}/paises/activos`);
  }

  obtenerPaisPorId(id: number): Observable<SuccessResponse<PaisDTO>> {
    return this.http.get<SuccessResponse<PaisDTO>>(`${this.apiUrl}/paises/${id}`);
  }

  crearPais(pais: PaisCreacionDTO): Observable<SuccessResponse<PaisDTO>> {
    return this.http.post<SuccessResponse<PaisDTO>>(`${this.apiUrl}/paises`, pais);
  }

  actualizarPais(id: number, pais: PaisActualizarDTO): Observable<SuccessResponse<PaisDTO>> {
    return this.http.put<SuccessResponse<PaisDTO>>(`${this.apiUrl}/paises/${id}`, pais);
  }

  cambiarEstadoPais(id: number): Observable<SuccessResponse<string>> {
    return this.http.put<SuccessResponse<string>>(`${this.apiUrl}/paises/${id}/cambiar-estado`, null);
  }

  eliminarPais(id: number): Observable<SuccessResponse<string>> {
    return this.http.delete<SuccessResponse<string>>(`${this.apiUrl}/paises/${id}`);
  }
}
