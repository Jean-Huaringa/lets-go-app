import { Component } from '@angular/core';
import { TableComponent } from "../../table/table.component";

@Component({
  selector: 'app-store-page',
  imports: [TableComponent],
  templateUrl: './store-page.component.html',
  styleUrl: './store-page.component.css'
})
export class StorePageComponent {
  
  columnas = ['Nombre', 'Edad', 'Ciudad'];
  
  data = [
    { nombre: 'Carlos', edad: 28, ciudad: 'Lima' },
    { nombre: 'María', edad: 32, ciudad: 'Cusco' },
    { nombre: 'José', edad: 25, ciudad: 'Trujillo' },
    { nombre: 'Lucía', edad: 30, ciudad: 'Arequipa' }
  ];
}
