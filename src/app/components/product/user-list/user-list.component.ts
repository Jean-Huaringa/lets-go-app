import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../core/services/usuario.service';  
import { UsuarioDTO } from '../../../core/model/usuario.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  imports: [CommonModule]
})
export class UserListComponent implements OnInit {
  usuarios: UsuarioDTO[] = [];
  cargando = true;
  error = '';

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios(): void {
    this.cargando = true;
    this.usuarioService.obtenerUsuarios().subscribe({
      next: (res) => {
        console.log(res);
        this.usuarios = res.response?.content || [];  
        this.cargando = false;
      },
      error: (err) => {
        console.error(err);
        this.error = 'Error al cargar los usuarios.';
        this.cargando = false;
      }
    });
  }
}
