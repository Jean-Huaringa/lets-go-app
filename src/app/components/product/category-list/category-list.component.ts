import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../../core/services/categoria.service';  // Asegúrate de que la ruta sea correcta
import { CategoriaDTO } from '../../../core/model/categoria.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category-list',
  standalone: true,
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  imports: [CommonModule,      FormsModule,]
})
export class CategoryListComponent implements OnInit {
  categorias: CategoriaDTO[] = [];
  cargando = true;
  error = '';

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.listarCategorias();
  }

  listarCategorias(): void {
    this.cargando = true;
    this.categoriaService.obtenerCategorias().subscribe({
      next: (res) => {
        console.log(res);
        this.categorias = res.response?.content?.filter(categoria => categoria.isEnabled) || [];
        this.cargando = false;
      },
      error: (err) => {
        console.error(err);
        this.error = 'Error al cargar las categorías.';
        this.cargando = false;
      }
    });
  }
}
