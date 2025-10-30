import { Component } from '@angular/core';
import { TableComponent } from "../../table/table.component";

@Component({
  selector: 'app-category-page',
  imports: [TableComponent],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.css'
})
export class CategoryPageComponent {
  columnas = ['Id', 'Categoria', 'Subcategoria', 'Estado'];

  data = [
    {id: 'N°', categoria : 'Direccion', subcategoria: 'Usuario', estado: 'Ubicacion'}
  ];
}
