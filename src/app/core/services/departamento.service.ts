import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginacionResponse, SuccessResponse } from '../model/api.interfaces';
import { DepartamentoActualizarDTO, DepartamentoCreacionDTO, DepartamentoDTO } from '../model/departamento.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  private apiUrl = 'http://localhost:8080/ubicacion-service/api';
  private http = inject(HttpClient);

  obtenerDepartamentos(): Observable<SuccessResponse<PaginacionResponse<DepartamentoDTO>>> {
    return this.http.get<SuccessResponse<PaginacionResponse<DepartamentoDTO>>>(`${this.apiUrl}/departamentos`);
  }

  obtenerDepartamentosActivos(): Observable<SuccessResponse<PaginacionResponse<DepartamentoDTO>>> {
    return this.http.get<SuccessResponse<PaginacionResponse<DepartamentoDTO>>>(`${this.apiUrl}/departamentos/activos`);
  }

  obtenerDepartamentoPorId(id: number): Observable<SuccessResponse<DepartamentoDTO>> {
    return this.http.get<SuccessResponse<DepartamentoDTO>>(`${this.apiUrl}/departamentos/${id}`);
  }

  crearDepartamento(departamento: DepartamentoCreacionDTO): Observable<SuccessResponse<DepartamentoDTO>> {
    return this.http.post<SuccessResponse<DepartamentoDTO>>(`${this.apiUrl}/departamentos`, departamento);
  }

  actualizarDepartamento(id: number, departamento: DepartamentoActualizarDTO): Observable<SuccessResponse<DepartamentoDTO>> {
    return this.http.put<SuccessResponse<DepartamentoDTO>>(`${this.apiUrl}/departamentos/${id}`, departamento);
  }

  cambiarEstadoDepartamento(id: number): Observable<SuccessResponse<string>> {
    return this.http.put<SuccessResponse<string>>(`${this.apiUrl}/departamentos/${id}/cambiar-estado`, null);
  }

  eliminarDepartamento(id: number): Observable<SuccessResponse<string>> {
    return this.http.delete<SuccessResponse<string>>(`${this.apiUrl}/departamentos/${id}`);
  }
}
