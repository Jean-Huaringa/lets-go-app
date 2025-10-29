import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginacionResponse, SuccessResponse } from '../model/api.interfaces';
import { ColorActualizarDTO, ColorCreacionDTO, ColorDTO } from '../model/color.interface';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  private apiUrl = 'http://localhost:8080/product-app/api';
  private http = inject(HttpClient);

  obtenerColores(): Observable<SuccessResponse<PaginacionResponse<ColorDTO>>> {
    return this.http.get<SuccessResponse<PaginacionResponse<ColorDTO>>>(`${this.apiUrl}/colores`);
  }

  obtenerColoresActivos(): Observable<SuccessResponse<PaginacionResponse<ColorDTO>>> {
    return this.http.get<SuccessResponse<PaginacionResponse<ColorDTO>>>(`${this.apiUrl}/colores/activos`);
  }

  obtenerColorPorId(id: number): Observable<SuccessResponse<ColorDTO>> {
    return this.http.get<SuccessResponse<ColorDTO>>(`${this.apiUrl}/colores/${id}`);
  }

  crearColor(color: ColorCreacionDTO): Observable<SuccessResponse<ColorDTO>> {
    return this.http.post<SuccessResponse<ColorDTO>>(`${this.apiUrl}/colores`, color);
  }

  actualizarColor(id: number, color: ColorActualizarDTO): Observable<SuccessResponse<ColorDTO>> {
    return this.http.put<SuccessResponse<ColorDTO>>(`${this.apiUrl}/colores/${id}`, color);
  }

  cambiarEstadoColor(id: number): Observable<SuccessResponse<string>> {
    return this.http.put<SuccessResponse<string>>(`${this.apiUrl}/colores/${id}/cambiar-estado`, null);
  }

  eliminarColor(id: number): Observable<SuccessResponse<string>> {
    return this.http.delete<SuccessResponse<string>>(`${this.apiUrl}/colores/${id}`);
  }
}
