import { Component, inject, OnInit } from '@angular/core';
import { TableComponent } from "../../table/table.component";
import { UsuarioService } from '../../../core/services/usuario.service';
import { UsuarioDTO } from '../../../core/model/usuario.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users-page',
  imports: [
    TableComponent,
    RouterLink
  ],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css'
})
export class UsersPageComponent implements OnInit {
  private usuarioService = inject(UsuarioService);

  columnas = ['Id', 'Nombre', 'Apellido', 'Tipo Documento', 'N° Documento', 'Email', 'Telefono', 'Rol', 'País', 'Departamento', 'Provincia', 'Distrito'];

  usuarios: UsuarioDTO[] = [];

  data: any[] = [];

  currentPage = 0;
  pageSize = 10;
  totalElements = 0;
  loading = false;


  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
    this.loading = true;
    this.usuarioService.obtenerUsuarios(this.currentPage, this.pageSize).subscribe({
      next: (res) => {
        this.usuarios = res.response.content;
        this.totalElements = res.response.totalElements;
        this.data = this.usuarios.map(usuario => ({
          id: usuario.id,
          nombre: usuario.nombre,
          apellido: usuario.apellido,
          'tipo documento': usuario.tipoDocumento,
          'n° documento': usuario.nmrDocumento,
          email: usuario.email,
          'telefono': usuario.telefono,
          rol: usuario.rol,
          país: usuario.pais,
          departamento: usuario.departamento,
          provincia: usuario.provincia,
          distrito: usuario.distrito
        }));
        console.log('Usuarios cargados:', this.usuarios);
      },
      error: (err) => {
        console.error('Error al cargar los usuarios', err);
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  cambiarPagina(pagina: number): void {
    this.currentPage = pagina;
    this.cargarUsuarios();
  }

  get totalPages(): number {
    return Math.ceil(this.totalElements / this.pageSize);
  }
}
