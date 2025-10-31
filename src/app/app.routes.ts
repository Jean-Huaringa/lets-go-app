import { Routes } from '@angular/router';
import { LandingComponent } from './shared/landing/landing.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },

  {
    path: 'auth',
    loadChildren: () => import('./oauth/auth.routes').then(m => m.routes)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./components/usuario/usuario.routes').then(m => m.routes)
  },
  {
    path: 'productos',
    loadChildren: () => import('./components/product/product-list/producto.routes').then(m => m.routes)
  },
  {
    path: 'tiendas',
    loadChildren: () => import('./components/store/store.routes').then(m => m.routes)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./components/product/category-list/category.routes').then(m => m.routes)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./components/product/user-list/user.routes').then(m => m.routes)
  },
  {
    path: 'boletas',
    loadChildren: () => import('./components/order/order.routes').then(m => m.routes)
  },
  { path: '**', redirectTo: '' }
];
