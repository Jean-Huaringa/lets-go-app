import { Component } from '@angular/core';
import { TableComponent } from "../../table/table.component";

@Component({
  selector: 'app-orders-page',
  imports: [TableComponent],
  templateUrl: './orders-page.component.html',
  styleUrl: './orders-page.component.css'
})
export class OrdersPageComponent {
  columnas = ['Id', 'Direccion', 'Usuario', 'Ubicacion', 'Cantidad', 'Fecha Envio'];

  data = [
    {id: 'N°', direccion : 'Direccion', usuario: 'Usuario', ubicacion: 'Ubicacion', cantidad: 'Cantidad', feachaEnvio: 'Fecha Envio'}
  ];
}
