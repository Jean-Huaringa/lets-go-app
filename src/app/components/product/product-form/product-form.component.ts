import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../../../core/services/producto.service';
import { ProductoDTO } from '../../../core/model/producto.interface';



@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent implements OnChanges {
  @Input() product: ProductoDTO | null = null;
  @Output() save = new EventEmitter<any>();
  @Output() close = new EventEmitter<void>();

  form: FormGroup;

  categorias: any[] = [];
  subcategorias: any[] = [];
  branches: any[] = [];
  materiales: any[] = [];
  marcas: any[] = [];

  constructor(private fb: FormBuilder, private productoService: ProductoService) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: [''],
      precio: [0, [Validators.required, Validators.min(0)]],
      idCategoria: [null, Validators.required],
      idSubcategoria: [null, Validators.required],
      idBranch: [null, Validators.required],
      idMaterial: [null, Validators.required],
      idMarca: [null, Validators.required],
      isEnabled: [true]
    });

    // Cargar opciones de selects
    this.cargarOpciones();
  }

ngOnChanges(changes: SimpleChanges) {
  if (changes['product'] && this.product) {
    this.form.patchValue({
      nombre: this.product.nombre,
      descripcion: this.product.descripcion,
      precio: this.product.precio,
      // Para los selects, si no tienes los IDs, puedes usar null o "" por ahora
      idCategoria: null,
      idSubcategoria: null,
      idBranch: null,
      idMaterial: null,
      idMarca: null,
      isEnabled: this.product.isEnabled
    });
  }
}

  cargarOpciones() {
    // Aquí llamas a tus endpoints de categorías, subcategorías, etc.
    // Por ejemplo:
    // this.productoService.obtenerCategorias().subscribe(res => this.categorias = res);
    // Aquí pongo datos de ejemplo:
    this.categorias = [{id:1,nombre:'Cat1'},{id:2,nombre:'Cat2'}];
    this.subcategorias = [{id:1,nombre:'Sub1'},{id:2,nombre:'Sub2'}];
    this.branches = [{id:1,nombre:'Sucursal1'},{id:2,nombre:'Sucursal2'}];
    this.materiales = [{id:1,nombre:'Cuero'},{id:2,nombre:'Gamuza'}];
    this.marcas = [{id:1,nombre:'Fila'},{id:2,nombre:'Nike'}];
  }

  onSubmit() {
    if (this.form.valid) {
      this.save.emit(this.form.value);
    }
  }

  onClose() {
    this.close.emit();
  }
}