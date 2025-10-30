import { Component } from '@angular/core';
import { TableComponent } from "../../table/table.component";

@Component({
  selector: 'app-products-page',
  imports: [TableComponent],  // Asegúrate de que TableComponent esté correctamente importado y registrado en tu módulo
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']  // Se debe usar styleUrls, no styleUrl
})
export class ProductsPageComponent {

  columnas = ['Id', 'Nombre', 'Imagen', 'Precio', 'Categoria', 'Material'];

  data = [
    {id: 'N°', nombre: 'Nombre', imagen: 'Imagen', precio: 'Precio', categoria: 'Categoria', material: 'Material'}
  ];
}
