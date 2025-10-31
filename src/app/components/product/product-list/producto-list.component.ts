import { Component, inject, OnInit } from '@angular/core';
import { ProductoService } from '../../../core/services/producto.service';
import { ProductoDTO } from '../../../core/model/producto.interface';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from '../product-form/product-form.component';
import { TableComponent } from "../../table/table.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-producto-list',
  standalone: true,
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css'],
  imports: [CommonModule, TableComponent, RouterLink]
})
export class ProductoListComponent implements OnInit {
  private productoService = inject(ProductoService);

  columnas = ['Id', 'Img', 'Nombre', 'Descripcion', 'Precio', 'Categoria', 'Subcategoria', 'Material', 'Marca'];

  productos: ProductoDTO[] = [];

  productosData: any[] = [];

  currentPage = 0;
  pageSize = 10;
  totalElements = 0;
  loading = false;

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.loading = true;
    this.productoService.obtenerProductos(this.currentPage, this.pageSize).subscribe({
      next: (res) => {
        this.productos = res.response.content;
        this.totalElements = res.response.totalElements;
        this.productosData = this.productos.map(producto => ({
          id: producto.id,
          nombre: producto.nombre,
          descripcion: producto.descripcion,
          precio: "S/. " + producto.precio,
          categoria: producto.categoria,
          subcategoria: producto.subcategoria,
          material: producto.material,
          marca: producto.marca
        }));
        console.log('Productos cargados:', this.productos);
      },
      error: (err) => {
        console.error('Error al cargar los productos', err);
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  cambiarPagina(pagina: number): void {
    this.currentPage = pagina;
    this.cargarProductos();
  }

  get totalPages(): number {
    return Math.ceil(this.totalElements / this.pageSize);
  }

}
