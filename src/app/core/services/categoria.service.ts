import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginacionResponse, SuccessResponse } from '../model/api.interfaces';
import { CategoriaActualizarDTO, CategoriaCreacionDTO, CategoriaDTO } from '../model/categoria.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private apiUrl = 'http://localhost:8080/product-app/api';
  private http = inject(HttpClient);

  obtenerCategorias(): Observable<SuccessResponse<PaginacionResponse<CategoriaDTO>>> {
    return this.http.get<SuccessResponse<PaginacionResponse<CategoriaDTO>>>(`${this.apiUrl}/categorias?page=0&size=1000`);
  }

  obtenerCategoriasActivas(): Observable<SuccessResponse<PaginacionResponse<CategoriaDTO>>> {
    return this.http.get<SuccessResponse<PaginacionResponse<CategoriaDTO>>>(`${this.apiUrl}/categorias/activos`);
  }

  obtenerCategoriaPorId(id: number): Observable<SuccessResponse<CategoriaDTO>> {
    return this.http.get<SuccessResponse<CategoriaDTO>>(`${this.apiUrl}/categorias/${id}`);
  }

  crearCategoria(categoria: CategoriaCreacionDTO): Observable<SuccessResponse<CategoriaDTO>> {
    return this.http.post<SuccessResponse<CategoriaDTO>>(`${this.apiUrl}/categorias`, categoria);
  }

  actualizarCategoria(id: number, categoria: CategoriaActualizarDTO): Observable<SuccessResponse<CategoriaDTO>> {
    return this.http.put<SuccessResponse<CategoriaDTO>>(`${this.apiUrl}/categorias/${id}`, categoria);
  }

  cambiarEstadoCategoria(id: number): Observable<SuccessResponse<string>> {
    return this.http.put<SuccessResponse<string>>(`${this.apiUrl}/categorias/${id}/cambiar-estado`, null);
  }

  eliminarCategoria(id: number): Observable<SuccessResponse<string>> {
    return this.http.delete<SuccessResponse<string>>(`${this.apiUrl}/categorias/${id}`);
  }
}
