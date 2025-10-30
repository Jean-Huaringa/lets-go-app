import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent implements OnChanges {
  @Input() product: any = null;
  @Output() save = new EventEmitter<any>();
  @Output() close = new EventEmitter<void>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: [''],
      material: [''],
      precio: [0, [Validators.required, Validators.min(0)]]
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['product']) {
      
      this.form.patchValue({
        nombre: this.product?.nombre || '',
        descripcion: this.product?.descripcion || '',
        material: this.product?.material || '',
        precio: this.product?.precio || 0
      });
    }
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
