import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RolDTO } from '../model/rol.interface';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  private apiUrl = 'http://localhost:8080/user-app/api';
  private http = inject(HttpClient);

  obtenerRoles(): Observable<RolDTO[]> {
    return this.http.get<RolDTO[]>(`${this.apiUrl}/roles`);
  }

  obtenerRolesActivos(): Observable<RolDTO[]> {
    return this.http.get<RolDTO[]>(`${this.apiUrl}/roles/activos`);
  }
}
