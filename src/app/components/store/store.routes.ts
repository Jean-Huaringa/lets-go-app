
import { RouterModule, Routes } from '@angular/router'; 
import { StorePageComponent } from './store-page/store-page.component';
import { CrearTiendaComponent } from './crear-tienda/crear-tienda.component';
import { ActualizarTiendaComponent } from './actualizar-tienda/actualizar-tienda.component';

export const routes: Routes = [
  
   { path: '', component: StorePageComponent },
   { path: 'crear', component: CrearTiendaComponent },
   { path: 'editar/:id', component: ActualizarTiendaComponent }
]
