import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginacionResponse, SuccessResponse } from '../model/api.interfaces';
import { BranchActualizarDTO, BranchCreacionDTO, BranchDTO } from '../model/branch.interface';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  private apiUrl = 'http://localhost:8080/product-app/api';
  private http = inject(HttpClient);

  obtenerBranches(): Observable<SuccessResponse<PaginacionResponse<BranchDTO>>> {
    return this.http.get<SuccessResponse<PaginacionResponse<BranchDTO>>>(`${this.apiUrl}/branches`);
  }

  obtenerBranchesActivas(): Observable<SuccessResponse<PaginacionResponse<BranchDTO>>> {
    return this.http.get<SuccessResponse<PaginacionResponse<BranchDTO>>>(`${this.apiUrl}/branches/activos`);
  }

  obtenerBranchPorId(id: number): Observable<SuccessResponse<BranchDTO>> {
    return this.http.get<SuccessResponse<BranchDTO>>(`${this.apiUrl}/branches/${id}`);
  }

  crearBranch(branch: BranchCreacionDTO): Observable<SuccessResponse<BranchDTO>> {
    return this.http.post<SuccessResponse<BranchDTO>>(`${this.apiUrl}/branches`, branch);
  }

  actualizarBranch(id: number, branch: BranchActualizarDTO): Observable<SuccessResponse<BranchDTO>> {
    return this.http.put<SuccessResponse<BranchDTO>>(`${this.apiUrl}/branches/${id}`, branch);
  }

  cambiarEstadoBranch(id: number): Observable<SuccessResponse<string>> {
    return this.http.put<SuccessResponse<string>>(`${this.apiUrl}/branches/${id}/cambiar-estado`, null);
  }

  eliminarBranch(id: number): Observable<SuccessResponse<string>> {
    return this.http.delete<SuccessResponse<string>>(`${this.apiUrl}/branches/${id}`);
  }
}
