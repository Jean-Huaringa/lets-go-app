import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BoletaCreacionDTO, BoletaDTO } from '../model/boleta.interface';
import { Observable } from 'rxjs';
import { PaginacionResponse, SuccessResponse } from '../model/api.interfaces';

@Injectable({
  providedIn: 'root'
})
export class BoletaService {
  private apiUrl = 'http://localhost:8080/order-app/api';
  private http = inject(HttpClient);

  obtenerBoletas(): Observable<SuccessResponse<PaginacionResponse<BoletaDTO>>> {
    return this.http.get<SuccessResponse<PaginacionResponse<BoletaDTO>>>(`${this.apiUrl}/boletas`);
  }

  obtenerBoletaPorId(id: number): Observable<SuccessResponse<BoletaDTO>> {
    return this.http.get<SuccessResponse<BoletaDTO>>(`${this.apiUrl}/boletas/${id}`);
  }

  obtenerBoletasPorTrabajadorId(trabajadorId: number): Observable<SuccessResponse<PaginacionResponse<BoletaDTO>>> {
    return this.http.get<SuccessResponse<PaginacionResponse<BoletaDTO>>>(`${this.apiUrl}/boletas/trabajador/${trabajadorId}`);
  }

  obtenerBoletasPorClienteId(clienteId: number): Observable<SuccessResponse<PaginacionResponse<BoletaDTO>>> {
    return this.http.get<SuccessResponse<PaginacionResponse<BoletaDTO>>>(`${this.apiUrl}/boletas/cliente/${clienteId}`);
  }

  crearBoleta(boleta: BoletaCreacionDTO): Observable<SuccessResponse<String>> {
    return this.http.post<SuccessResponse<String>>(`${this.apiUrl}/boletas`, boleta);
  }
}
