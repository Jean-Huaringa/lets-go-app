import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginacionResponse, SuccessResponse } from '../model/api.interfaces';
import { MaterialActualizarDTO, MaterialDTO } from '../model/material.interface';
import { MarcaActualizarDTO, MarcaCreacionDTO, MarcaDTO } from '../model/marca.interface';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  private apiUrl = 'http://localhost:8080/product-app/api';
  private http = inject(HttpClient);

  obtenerMateriales(): Observable<SuccessResponse<PaginacionResponse<MaterialDTO>>> {
    return this.http.get<SuccessResponse<PaginacionResponse<MaterialDTO>>>(`${this.apiUrl}/materiales`);
  }

  obtenerMaterialesActivos(): Observable<SuccessResponse<PaginacionResponse<MaterialDTO>>> {
    return this.http.get<SuccessResponse<PaginacionResponse<MaterialDTO>>>(`${this.apiUrl}/materiales/activos`);
  }

  obtenerMaterialPorId(id: number): Observable<SuccessResponse<MaterialDTO>> {
    return this.http.get<SuccessResponse<MaterialDTO>>(`${this.apiUrl}/materiales/${id}`);
  }

  crearMaterial(material: MaterialDTO): Observable<SuccessResponse<MaterialDTO>> {
    return this.http.post<SuccessResponse<MaterialDTO>>(`${this.apiUrl}/materiales`, material);
  }

  actualizarMaterial(id: number, material: MaterialActualizarDTO): Observable<SuccessResponse<MaterialDTO>> {
    return this.http.put<SuccessResponse<MaterialDTO>>(`${this.apiUrl}/materiales/${id}`, material);
  }

  cambiarEstadoMaterial(id: number): Observable<SuccessResponse<string>> {
    return this.http.put<SuccessResponse<string>>(`${this.apiUrl}/materiales/${id}/cambiar-estado`, null);
  }

  eliminarMaterial(id: number): Observable<SuccessResponse<string>> {
    return this.http.delete<SuccessResponse<string>>(`${this.apiUrl}/materiales/${id}`);
  }
}
