import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() columns: string[] = [];
  @Input() data: any[] = [];
  @Input() enablePagination: boolean = false;
  @Input() currentPage: number = 0;
  @Input() totalPages: number = 0;
  @Input() pageSize: number = 10;
  @Input() totalElements: number = 0;

  @Input() sePuedeEditar: boolean = true;

  @Output() onPageChange = new EventEmitter<number>();

  goToPage(page: number): void {
    if (page >= 0 && page < this.totalPages) {
      this.onPageChange.emit(page);
    }
  }
}
