import { Component } from '@angular/core';
import { TableComponent } from "../../table/table.component";

@Component({
  selector: 'app-users-page',
  imports: [TableComponent],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css'
})
export class UsersPageComponent {
  columnas = ['Id', 'Nombre', 'Apellido', 'Dni', 'Email', 'Telefono'];

  data = [
    {id: 'N°', nombre : 'Direccion', apellido: 'Usuario', dni: 'Ubicacion', email: 'Cantidad', telefono: 'Fecha Envio'}
  ];
}
