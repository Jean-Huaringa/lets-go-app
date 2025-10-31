import { Component, inject, OnInit } from '@angular/core';
import { TableComponent } from "../../table/table.component";
import { BoletaService } from '../../../core/services/boleta.service';
import { BoletaDTO } from '../../../core/model/boleta.interface';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-orders-page',
  imports: [TableComponent, RouterLink],
  templateUrl: './orders-page.component.html',
  styleUrl: './orders-page.component.css'
})
export class OrdersPageComponent implements OnInit {
  private boletaService = inject(BoletaService)

  columnas = ['Id', 'Cliente', 'Documento', 'Dirección', 'Total', 'Fecha'];

  boletas: BoletaDTO[] = [];

  boletasData: any[] = [];

  currentPage = 0;
  pageSize = 10;
  totalElements = 0;
  loading = false;

  ngOnInit(): void {
    this.cargarBoletas();
  }

  cargarBoletas(): void {
    this.loading = true;
    this.boletaService.obtenerBoletas(this.currentPage, this.pageSize).subscribe({
      next: (res) => {
        this.boletas = res.response.content;
        this.totalElements = res.response.totalElements;
        this.boletasData = this.boletas.map(boleta => ({
          id: boleta.id,
          cliente: boleta.nombreCliente,
          documento: boleta.numeroDocumento,
          dirección: boleta.direccion,
          total: boleta.total,
          estado: boleta.estado,
          fecha: new Date(boleta.createdAt).toLocaleDateString()
        }));
        console.log('Boletas cargadas:', this.boletas);
      },
      error: (err) => {
        console.error('Error al cargar las boletas', err);
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  cambiarPagina(pagina: number): void {
    this.currentPage = pagina;
    this.cargarBoletas();
  }

  get totalPages(): number {
    return Math.ceil(this.totalElements / this.pageSize);
  }
}
