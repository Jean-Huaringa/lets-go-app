import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TiendaService } from '../../../core/services/tienda.service';
import { Router } from '@angular/router';
import { ProductoService } from '../../../core/services/producto.service';
import { CategoriaService } from '../../../core/services/categoria.service';
import { SubcategoriaService } from '../../../core/services/subcategoria.service';
import { BranchService } from '../../../core/services/branch.service';
import { MaterialService } from '../../../core/services/material.service';
import { MarcaService } from '../../../core/services/marca.service';
import { CategoriaDTO } from '../../../core/model/categoria.interface';
import { SubcategoriaDTO } from '../../../core/model/subcategoria.interface';
import { BranchDTO } from '../../../core/model/branch.interface';
import { MaterialDTO } from '../../../core/model/material.interface';
import { MarcaDTO } from '../../../core/model/marca.interface';

@Component({
  selector: 'app-crear-producto',
  imports: [],
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private productoService = inject(ProductoService);
  private categoriaService = inject(CategoriaService);
  private subcategoriaService = inject(SubcategoriaService);
  private branchService = inject(BranchService);
  private materialService = inject(MaterialService);
  private marcaService = inject(MarcaService);

  categorias: CategoriaDTO[] = [];
  subcategorias: SubcategoriaDTO[] = [];
  ramas: BranchDTO[] = [];
  materiales: MaterialDTO[] = [];
  marcas: MarcaDTO[] = [];

  form = this.fb.group({
    nombre: [''],
    descripcion: [''],
    precio: [0],
    idCategoria: [0],
    idSubcategoria: [0],
    idBranch: [0],
    idMaterial: [0],
    idMarca: [0]
  }); 

  crearTienda() {
    if (this.form.invalid) {
      return;
    }
  }
}
