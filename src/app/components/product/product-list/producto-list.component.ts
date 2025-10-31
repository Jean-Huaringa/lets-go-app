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

  selectedProduct: ProductoDTO | null = null;
  showForm = false;

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.listarProductos();
  }

  listarProductos(): void {
    this.cargando = true;
    this.productoService.obtenerProductos().subscribe({
      next: (res) => {
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

  openForm(product: ProductoDTO | null = null) {
    this.selectedProduct = product;
    this.showForm = true;
  }

  handleSave(productData: any) {
  if (this.selectedProduct) {
    // Actualizar
    const updateData = {...productData, isEnabled: true}; // agregar isEnabled
    this.productoService.actualizarProducto(this.selectedProduct.id, updateData).subscribe({
      next: () => {
        this.listarProductos();
        this.showForm = false;
        this.selectedProduct = null;
      },
      error: (err) => console.error('Error al actualizar', err)
    });
  } else {
    // Crear
    this.productoService.crearProducto(productData).subscribe({
      next: () => {
        this.listarProductos();
        this.showForm = false;
      },
      error: (err) => console.error('Error al crear', err)
    });
  }
}


 eliminarProducto(id: number): void {
  if (confirm('¿Seguro que deseas eliminar este producto?')) {
    this.productoService.eliminarProducto(id).subscribe({
      next: (res) => {
        console.log('Producto eliminado con éxito:', res);
        this.listarProductos();
      },
      error: (err) => {
        console.error('Error al eliminar producto:', err);
        alert('Hubo un error al eliminar el producto.');
      }
    });
  }
}

}
