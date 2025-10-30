import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginacionResponse, SuccessResponse } from '../model/api.interfaces';
import { DistritoActualizarDTO, DistritoCreacionDTO, DistritoDTO } from '../model/distrito.interface';

@Injectable({
  providedIn: 'root'
})
export class DistritoService {
  private apiUrl = 'http://localhost:8080/ubicacion-service/api';
  private http = inject(HttpClient);

  obtenerDistritos(): Observable<SuccessResponse<PaginacionResponse<DistritoDTO>>> {
    return this.http.get<SuccessResponse<PaginacionResponse<DistritoDTO>>>(`${this.apiUrl}/distritos`);
  }

  obtenerDistritosActivos(): Observable<SuccessResponse<PaginacionResponse<DistritoDTO>>> {
    return this.http.get<SuccessResponse<PaginacionResponse<DistritoDTO>>>(`${this.apiUrl}/distritos/activos`);
  }

  obtenerDistritoPorId(id: number): Observable<SuccessResponse<DistritoDTO>> {
    return this.http.get<SuccessResponse<DistritoDTO>>(`${this.apiUrl}/distritos/${id}`);
  }

  crearDistrito(distrito: DistritoCreacionDTO): Observable<SuccessResponse<DistritoDTO>> {
    return this.http.post<SuccessResponse<DistritoDTO>>(`${this.apiUrl}/distritos`, distrito);
  }

  actualizarDistrito(id: number, distrito: DistritoActualizarDTO): Observable<SuccessResponse<DistritoDTO>> {
    return this.http.put<SuccessResponse<DistritoDTO>>(`${this.apiUrl}/distritos/${id}`, distrito);
  }

  cambiarEstadoDistrito(id: number): Observable<SuccessResponse<string>> {
    return this.http.put<SuccessResponse<string>>(`${this.apiUrl}/distritos/${id}/cambiar-estado`, null);
  }

  eliminarDistrito(id: number): Observable<SuccessResponse<string>> {
    return this.http.delete<SuccessResponse<string>>(`${this.apiUrl}/distritos/${id}`);
  }
}
