import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SuccessResponse, PaginacionResponse } from '../../../core/model/api.interfaces';
import { ProductoService } from '../../../core/services/producto.service';
import { BoletaService } from '../../../core/services/boleta.service';
import { ProductoDTO } from '../../../core/model/producto.interface';
import { BoletaCreacionDTO } from '../../../core/model/boleta.interface';
import { TransaccionCreacionDTO } from '../../../core/model/transaccion.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {
  private productoService = inject(ProductoService);
  private boletaService = inject(BoletaService);
  private router = inject(Router);

  productos: ProductoDTO[] = [];
  productoSeleccionado: number | null = null;
  boleta: BoletaCreacionDTO = {
    direccion: '',
    tipoTarjeta: '',
    totalDescuento: 0,
    nombreCliente: '',
    numeroDocumento: '',
    subtotal: 0,
    igv: 0,
    total: 0,
    estado: 'Pendiente',
    observaciones: '',
    idUsuario: 1, // Placeholder
    idTrabajador: 1, // Placeholder
    idTienda: 1, // Placeholder
    transacciones: []
  };

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoService.obtenerProductosActivos("page=0&size=100").subscribe((response: SuccessResponse<PaginacionResponse<ProductoDTO>>) => {
      this.productos = response.response.content;
    }, error => {
      console.error('Error al cargar productos:', error);
    });
  }

  agregarProducto(): void {
    const producto = this.productos.find(p => p.id === Number(this.productoSeleccionado));
    if (!producto) {
      console.error('Producto no encontrado');
      return;
    }

    const transaccion = this.boleta.transacciones.find(t => t.idProducto === producto.id);
    if (transaccion) {
      transaccion.unidades += 1;
    } else {
      this.boleta.transacciones.push({
        idProducto: producto.id,
        unidades: 1
      });
    }

    this.actualizarTotales();
  }

  eliminarProducto(transaccion: TransaccionCreacionDTO): void {
    this.boleta.transacciones = this.boleta.transacciones.filter((t: TransaccionCreacionDTO) => t !== transaccion);
    this.actualizarTotales();
  }

  actualizarTotales(): void {
    this.boleta.subtotal = this.boleta.transacciones.reduce((sum: number, t: TransaccionCreacionDTO) => {
      const producto = this.productos.find(p => p.id === t.idProducto);
      return sum + (producto ? producto.precio * t.unidades : 0);
    }, 0);
    this.boleta.igv = this.boleta.subtotal * 0.18;
    this.boleta.total = this.boleta.subtotal + this.boleta.igv - this.boleta.totalDescuento;
  }

  crearBoleta(): void {
    this.boletaService.crearBoleta({ ...this.boleta }).subscribe({
      next: () => {
        this.boleta.transacciones = [];
        this.boleta.subtotal = 0;
        this.boleta.igv = 0;
        this.boleta.total = 0;

        this.router.navigate(['/boletas']);
      },
      error: (error) => {
        console.error('Error al crear la boleta:', error);
      }
    });
  }

  obtenerNombreProducto(idProducto: number): string {
    const producto = this.productos.find(p => p.id === idProducto);
    return producto ? producto.nombre : 'Producto no encontrado';
  }
}
