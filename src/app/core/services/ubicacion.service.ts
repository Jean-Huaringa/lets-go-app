import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SuccessResponse } from '../model/api.interfaces';
import { DepartamentoDTO } from '../model/departamento.interface';
import { ProvinciaDTO } from '../model/provincia.interface';
import { DistritoDTO } from '../model/distrito.interface';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {
  private apiUrl = 'http://localhost:8080/ubicacion-service/api/paises';
  private http = inject(HttpClient);

  obtenerDepartamentosPorPais(paisId: number): Observable<SuccessResponse<DepartamentoDTO[]>> {
    return this.http.get<SuccessResponse<DepartamentoDTO[]>>(`${this.apiUrl}/${paisId}/departamentos`);
  }

  obtenerDepartamentosActivosPorPais(paisId: number): Observable<SuccessResponse<DepartamentoDTO[]>> {
    return this.http.get<SuccessResponse<DepartamentoDTO[]>>(`${this.apiUrl}/${paisId}/departamentos/activos`);
  }

  obtenerProvinciasPorDepartamento(paisId: number, depId: number): Observable<SuccessResponse<ProvinciaDTO[]>> {
    return this.http.get<SuccessResponse<ProvinciaDTO[]>>(`${this.apiUrl}/${paisId}/departamentos/${depId}/provincias`);
  }

  obtenerProvinciasActivasPorDepartamento(paisId: number, depId: number): Observable<SuccessResponse<ProvinciaDTO[]>> {
    return this.http.get<SuccessResponse<ProvinciaDTO[]>>(`${this.apiUrl}/${paisId}/departamentos/${depId}/provincias/activos`);
  }

  obtenerDistritosPorProvincia(paisId: number, depId: number, provId: number): Observable<SuccessResponse<DistritoDTO[]>> {
    return this.http.get<SuccessResponse<DistritoDTO[]>>(`${this.apiUrl}/${paisId}/departamentos/${depId}/provincias/${provId}/distritos`);
  }

  obtenerDistritosActivosPorProvincia(paisId: number, depId: number, provId: number): Observable<SuccessResponse<DistritoDTO[]>> {
    return this.http.get<SuccessResponse<DistritoDTO[]>>(`${this.apiUrl}/${paisId}/departamentos/${depId}/provincias/${provId}/distritos/activos`);
  }
}
