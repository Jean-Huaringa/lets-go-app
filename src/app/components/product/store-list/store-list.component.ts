import { Component, OnInit } from '@angular/core';
import { TiendaService } from '../../../core/services/tienda.service';
import { TiendaDTO } from '../../../core/model/tienda.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tienda-list',
  standalone: true,
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css'],
  imports: [CommonModule]
})
export class TiendaListComponent implements OnInit {
  tiendas: TiendaDTO[] = [];
  cargando = true;
  error = '';

  constructor(private tiendaService: TiendaService) { }

  ngOnInit(): void {
    this.listarTiendas();
  }

  listarTiendas(): void {
    this.cargando = true;
    this.tiendaService.obtenerTiendas().subscribe({
      next: (res) => {
        console.log(res);
        this.tiendas = res.response || [];
        this.cargando = false;
      },
      error: (err) => {
        console.error(err);
        this.error = 'Error al cargar las tiendas.';
        this.cargando = false;
      }
    });
  }
}
