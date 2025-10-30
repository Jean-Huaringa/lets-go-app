import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../core/services/producto.service';
import { ProductoDTO } from '../../../core/model/producto.interface';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from '../product-form/product-form.component';
@Component({
  selector: 'app-producto-list',
  standalone: true,
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css'],
  imports: [CommonModule, ProductFormComponent]
})
export class ProductoListComponent implements OnInit {
  productos: ProductoDTO[] = [];
  cargando = true;
  error = '';

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.listarProductos();
  }

  listarProductos(): void {
    this.cargando = true;
    this.productoService.obtenerProductos().subscribe({

      next: (res) => {
        console.log(res)
        this.productos = res.response?.content || [];
        this.cargando = false;
      },
      error: (err) => {
        console.error(err);
        this.error = 'Error al cargar los productos.';
        this.cargando = false;
      }
    });
  }
  // products.component.ts
  selectedProduct: any = null;
  showForm = false;

  openForm(product: any = null) {
    this.selectedProduct = product;
    this.showForm = true;
  }

  handleSave(productData: any) {
    if (this.selectedProduct) {
      // actualizar producto
    } else {
      // crear producto
    }
    this.showForm = false;
  }
}