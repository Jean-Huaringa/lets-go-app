
import { CrearProductoComponent } from '../crear-producto/crear-producto.component';
import { ProductoListComponent } from './producto-list.component';
import { RouterModule, Routes } from '@angular/router'; 

export const routes: Routes = [
  { path: '', component: ProductoListComponent },
  { path: 'crear', component: CrearProductoComponent },
]
