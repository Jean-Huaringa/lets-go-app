import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginacionResponse, SuccessResponse } from '../model/api.interfaces';
import { SubcategoriaActualizarDTO, SubcategoriaCreacionDTO, SubcategoriaDTO } from '../model/subcategoria.interface';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriaService {
  private apiUrl = 'http://localhost:8080/product-app/api';
  private http = inject(HttpClient);

  obtenerSubcategorias(): Observable<SuccessResponse<PaginacionResponse<SubcategoriaDTO>>> {
    return this.http.get<SuccessResponse<PaginacionResponse<SubcategoriaDTO>>>(`${this.apiUrl}/subcategorias`);
  }

  obtenerSubcategoriasActivas(): Observable<SuccessResponse<PaginacionResponse<SubcategoriaDTO>>> {
    return this.http.get<SuccessResponse<PaginacionResponse<SubcategoriaDTO>>>(`${this.apiUrl}/subcategorias/activos`);
  }

  obtenerSubcategoriaPorId(id: number): Observable<SuccessResponse<SubcategoriaDTO>> {
    return this.http.get<SuccessResponse<SubcategoriaDTO>>(`${this.apiUrl}/subcategorias/${id}`);
  }

  crearSubcategoria(subcategoria: SubcategoriaCreacionDTO): Observable<SuccessResponse<SubcategoriaDTO>> {
    return this.http.post<SuccessResponse<SubcategoriaDTO>>(`${this.apiUrl}/subcategorias`, subcategoria);
  }

  actualizarSubcategoria(id: number, subcategoria: SubcategoriaActualizarDTO): Observable<SuccessResponse<SubcategoriaDTO>> {
    return this.http.put<SuccessResponse<SubcategoriaDTO>>(`${this.apiUrl}/subcategorias/${id}`, subcategoria);
  }

  cambiarEstadoSubcategoria(id: number): Observable<SuccessResponse<string>> {
    return this.http.put<SuccessResponse<string>>(`${this.apiUrl}/subcategorias/${id}/cambiar-estado`, null);
  }

  eliminarSubcategoria(id: number): Observable<SuccessResponse<string>> {
    return this.http.delete<SuccessResponse<string>>(`${this.apiUrl}/subcategorias/${id}`);
  }
}
