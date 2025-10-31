import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TiendaService } from '../../../core/services/tienda.service';
import { PaisService } from '../../../core/services/pais.service';
import { DepartamentoService } from '../../../core/services/departamento.service';
import { ProvinciaService } from '../../../core/services/provincia.service';
import { DistritoService } from '../../../core/services/distrito.service';
import { PaisDTO } from '../../../core/model/pais.interface';
import { DepartamentoDTO } from '../../../core/model/departamento.interface';
import { ProvinciaDTO } from '../../../core/model/provincia.interface';
import { DistritoDTO } from '../../../core/model/distrito.interface';
import { TiendaActualizarDTO } from '../../../core/model/tienda.interface';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-tienda',
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './actualizar-tienda.component.html',
  styleUrl: './actualizar-tienda.component.css'
})
export class ActualizarTiendaComponent {
  id: string | null = null;

  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private tiendaService = inject(TiendaService);
  private paisService = inject(PaisService);
  private departamentoService = inject(DepartamentoService);
  private provinciaService = inject(ProvinciaService);
  private distritoService = inject(DistritoService);

  paises: PaisDTO[] = [];
  departamentos: DepartamentoDTO[] = [];
  provincias: ProvinciaDTO[] = [];
  distritos: DistritoDTO[] = [];

  form = this.fb.group({
    rutaImagen: [''],
    nombre: [''],
    nombreLegal: [''],
    direccion: [''],
    ruc: [''],
    ubicacion: [''],
    telefono: [''],
    mail: [''],
    idPais: [0],
    idDepartamento: [0],
    idProvincia: [0],
    idDistrito: [0],
    enabled: [true]
  });

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    const tienda = this.tiendaService.obtenerTiendaPorId(Number(this.id)).subscribe({
      next: (res) => {
        const tiendaData = res.response;
        console.log('Datos de la tienda obtenidos:', tiendaData);
        this.form.patchValue(tiendaData);
      },
      error: (err) => {
        console.error('Error al cargar la tienda', err);
      }
    });

    this.cargarPaises();
    this.cargarDepartamentos();
    this.cargarProvincias();
    this.cargarDistritos();
  }

  actualizarTienda() {
    if (this.form.invalid) {
      return;
    }

    const tienda = this.form.value as TiendaActualizarDTO;

    console.log(tienda)

    this.tiendaService.actualizarTienda(Number(this.id), tienda).subscribe({
      next: (res) => {
        console.log('Tienda actualizada con éxito:', res);
        this.router.navigate(['/tiendas']);
      },
      error: (err) => {
        console.error('Error al actualizar la tienda', err);
      }
    });
  }

  cargarPaises(): void {
    this.paisService.obtenerPaises().subscribe({
      next: (res) => {
        this.paises = res.response.content;
      },
      error: (err) => {
        console.error('Error al cargar los paises', err);
      }
    });
  }

  cargarDepartamentos(): void {
    this.departamentoService.obtenerDepartamentos().subscribe({
      next: (res) => {
        this.departamentos = res.response.content;
      },
      error: (err) => {
        console.error('Error al cargar los departamentos', err);
      }
    });
  }

  cargarProvincias(): void {
    this.provinciaService.obtenerProvincias().subscribe({
      next: (res) => {
        this.provincias = res.response.content;
      },
      error: (err) => {
        console.error('Error al cargar las provincias', err);
      }
    });
  }

  cargarDistritos(): void {
    this.distritoService.obtenerDistritos().subscribe({
      next: (res) => {
        this.distritos = res.response.content;
      },
      error: (err) => {
        console.error('Error al cargar los distritos', err);
      }
    });
  }
}
