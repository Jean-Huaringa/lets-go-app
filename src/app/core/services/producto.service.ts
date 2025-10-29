import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginacionResponse, SuccessResponse } from '../model/api.interfaces';
import { ProductoActualizarDTO, ProductoCreacionDTO, ProductoDTO } from '../model/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = 'http://localhost:8080/product-app/api';
  private http = inject(HttpClient);

  obtenerProductos(): Observable<SuccessResponse<PaginacionResponse<ProductoDTO>>> {
    return this.http.get<SuccessResponse<PaginacionResponse<ProductoDTO>>>(`${this.apiUrl}/productos`);
  }

  obtenerProductosActivos(): Observable<SuccessResponse<PaginacionResponse<ProductoDTO>>> {
    return this.http.get<SuccessResponse<PaginacionResponse<ProductoDTO>>>(`${this.apiUrl}/productos/activos`);
  }

  obtenerProductoPorId(id: number): Observable<SuccessResponse<ProductoDTO>> {
    return this.http.get<SuccessResponse<ProductoDTO>>(`${this.apiUrl}/productos/${id}`);
  }

  crearProducto(producto: ProductoCreacionDTO): Observable<SuccessResponse<ProductoDTO>> {
    return this.http.post<SuccessResponse<ProductoDTO>>(`${this.apiUrl}/productos`, producto);
  }

  actualizarProducto(id: number, producto: ProductoActualizarDTO): Observable<SuccessResponse<ProductoDTO>> {
    return this.http.put<SuccessResponse<ProductoDTO>>(`${this.apiUrl}/productos/${id}`, producto);
  }

  cambiarEstadoProducto(id: number): Observable<SuccessResponse<string>> {
    return this.http.put<SuccessResponse<string>>(`${this.apiUrl}/productos/${id}/cambiar-estado`, null);
  }

  eliminarProducto(id: number): Observable<SuccessResponse<string>> {
    return this.http.delete<SuccessResponse<string>>(`${this.apiUrl}/productos/${id}`);
  }
}
