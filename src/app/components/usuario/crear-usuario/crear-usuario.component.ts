import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../../core/services/usuario.service';
import { UsuarioCreacionDTO } from '../../../oauth/auth.interface';
import { RolService } from '../../../core/services/rol.service';
import { PaisService } from '../../../core/services/pais.service';
import { DepartamentoService } from '../../../core/services/departamento.service';
import { ProvinciaService } from '../../../core/services/provincia.service';
import { DistritoService } from '../../../core/services/distrito.service';
import { RolDTO } from '../../../core/model/rol.interface';
import { PaisDTO } from '../../../core/model/pais.interface';
import { DepartamentoDTO } from '../../../core/model/departamento.interface';
import { ProvinciaDTO } from '../../../core/model/provincia.interface';
import { DistritoDTO } from '../../../core/model/distrito.interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  private fb = inject(FormBuilder);
  private usuarioService = inject(UsuarioService);
  private rolService = inject(RolService);
  private paisService = inject(PaisService);
  private departamentoService = inject(DepartamentoService);
  private provinciaService = inject(ProvinciaService);
  private distritoService = inject(DistritoService);
  private router = inject(Router);

  roles: RolDTO[] = [];
  paises: PaisDTO[] = [];
  departamentos: DepartamentoDTO[] = [];
  provincias: ProvinciaDTO[] = [];
  distritos: DistritoDTO[] = [];

  form = this.fb.group({
    nombre: ['', [Validators.required]],
    apellido: ['', [Validators.required]],
    tipoDocumento: ['', [Validators.required]],
    nmrDocumento: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    telefono: ['', [Validators.required]],
    idRol: [0, [Validators.required]],
    idPais: [0, [Validators.required]],
    idDepartamento: [0, [Validators.required]],
    idProvincia: [0, [Validators.required]],
    idDistrito: [0, [Validators.required]]
  });

  ngOnInit(): void {
    this.cargarRoles();
    this.cargarPaises();
    this.cargarDepartamentos();
    this.cargarProvincias();
    this.cargarDistritos();
  }

  cargarRoles() {
    this.rolService.obtenerRoles().subscribe({
      next: (roles) => {
        this.roles = roles;
      },
      error: (error) => {
        console.error('Error al cargar los roles:', error);
      }
    });
  }

  cargarPaises() {
    this.paisService.obtenerPaises().subscribe({
      next: (res) => {
        this.paises = res.response.content;
      },
      error: (error) => {
        console.error('Error al cargar los países:', error);
      }
    });
  }

  cargarDepartamentos() {
    this.departamentoService.obtenerDepartamentos().subscribe({
      next: (res) => {
        this.departamentos = res.response.content;
      },
      error: (error) => {
        console.error('Error al cargar los departamentos:', error);
      }
    });
  }

  cargarProvincias() {
    this.provinciaService.obtenerProvincias().subscribe({
      next: (res) => {
        this.provincias = res.response.content;
      },
      error: (error) => {
        console.error('Error al cargar las provincias:', error);
      }
    });
  }

  cargarDistritos() {
    this.distritoService.obtenerDistritos().subscribe({
      next: (res) => {
        this.distritos = res.response.content;
      },
      error: (error) => {
        console.error('Error al cargar los distritos:', error);
      }
    });
  }

  crearUsuario() {
    if (this.form.invalid) {
      return;
    }

    const usuario: UsuarioCreacionDTO = {
      nombre: this.form.value.nombre!,
      apellido: this.form.value.apellido!,
      tipoDocumento: this.form.value.tipoDocumento!,
      nmrDocumento: this.form.value.nmrDocumento!,
      email: this.form.value.email!,
      clave: '',
      telefono: this.form.value.telefono!,
      idRol: this.form.value.idRol!,
      idPais: this.form.value.idPais!,
      idDepartamento: this.form.value.idDepartamento!,
      idProvincia: this.form.value.idProvincia!,
      idDistrito: this.form.value.idDistrito!
    };

    console.log('Creando usuario:', this.form.value);

    this.usuarioService.crearUsuario(usuario).subscribe({
      next: (response) => {
        console.log('Usuario creado con éxito:', response);
        this.router.navigate(['/usuarios']);
      },
      error: (error) => {
        console.error('Error al crear el usuario:', error);
      }
    });
  }
}
