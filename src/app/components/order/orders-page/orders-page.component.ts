import { Component, inject, OnInit } from '@angular/core';
import { TableComponent } from "../../table/table.component";
import { BoletaService } from '../../../core/services/boleta.service';
import { BoletaDTO } from '../../../core/model/boleta.interface';

@Component({
  selector: 'app-orders-page',
  imports: [TableComponent],
  templateUrl: './orders-page.component.html',
  styleUrl: './orders-page.component.css'
})
export class OrdersPageComponent implements OnInit {
  private boletaService = inject(BoletaService)

  columnas = ['Id', 'Direccion', 'Usuario', 'Ubicacion', 'Cantidad', 'Fecha Envio'];

  data = [
    {id: 'N°', direccion : 'Direccion', usuario: 'Usuario', ubicacion: 'Ubicacion', cantidad: 'Cantidad', feachaEnvio: 'Fecha Envio'}
  ];

  boletas: BoletaDTO[] = [];

  ngOnInit(): void {
    this.boletaService.obtenerBoletas().subscribe({
      next: (res) => {
        this.boletas = res.response.content;
      },
      error: (err) => {
        console.error('Error al cargar las boletas', err);
      }
    });
  }
}
