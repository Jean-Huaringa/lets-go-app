import { Component, inject, OnInit } from '@angular/core';
import { TableComponent } from "../../table/table.component";
import { TiendaService } from '../../../core/services/tienda.service';
import { TiendaDTO } from '../../../core/model/tienda.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-store-page',
  imports: [TableComponent, CommonModule],
  templateUrl: './store-page.component.html',
  styleUrl: './store-page.component.css'
})
export class StorePageComponent implements OnInit {
  private tiendaService = inject(TiendaService);

  columnas = ['Nombre', 'Ruta Imagen', 'Direccion', 'RUC'];

  tiendas: TiendaDTO[] = [];

  data: any[] = [];

  currentPage = 0;
  pageSize = 10;
  totalElements = 0;
  loading = false;

  ngOnInit(): void {
    this.cargarTiendas();
  }

  cargarTiendas(): void {
    this.loading = true;
    this.tiendaService.obtenerTiendasActivas().subscribe({
      next: (res) => {
        console.log('Respuesta de tiendas:', res);
        this.tiendas = res.response;
        this.totalElements = res.response.length;
        this.data = this.tiendas.map(tienda => ({
          id: tienda.id,
          nombre: tienda.nombre,
          'ruta imagen': tienda.rutaImagen,
          direccion: tienda.direccion,
          ruc: tienda.ruc
        }));
        console.log('Tiendas cargadas:', this.tiendas);
      },
      error: (err) => {
        console.error('Error al cargar las tiendas', err);
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  cambiarPagina(pagina: number): void {
    this.currentPage = pagina;
    this.cargarTiendas();
  }

  get totalPages(): number {
    return Math.ceil(this.totalElements / this.pageSize);
  }

  editar(tienda: TiendaDTO): void {
    console.log('Editar tienda:', tienda);
    // Aquí puedes agregar la lógica para abrir un formulario de edición o navegar a otra página
  }

  eliminar(id: number): void {
    this.tiendaService.eliminarTienda(id).subscribe({
      next: (res) => {
        console.log('Tienda eliminada:', res);
        this.cargarTiendas(); // Recargar la lista de tiendas después de eliminar
      },
      error: (err) => {
        console.error('Error al eliminar la tienda', err);
      }
    });
  }
}
