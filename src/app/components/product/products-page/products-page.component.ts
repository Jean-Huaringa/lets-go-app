import { Component } from '@angular/core';
import { TableComponent } from "../../table/table.component";

@Component({
  selector: 'app-products-page',
  imports: [TableComponent],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {

  columnas = ['Id', 'Nombre', 'Imagen', 'Precio', 'Categoria', 'Material'];

  data = [
    {id: 'N°', nombre : 'Nombre', imagen: 'Imagen', precio: 'Precio', categoria: 'Categoria', material : 'Material' }
  ];
}
