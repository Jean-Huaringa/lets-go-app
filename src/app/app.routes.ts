import { Routes } from '@angular/router';
import { LandingComponent } from './shared/landing/landing.component';
import { StorePageComponent } from './components/store/store-page/store-page.component';
import { OrdersPageComponent } from './components/order/orders-page/orders-page.component';
import { UsersPageComponent } from './components/user/users-page/users-page.component';
import { CategoryPageComponent } from './components/category/category-page/category-page.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },

  {
    path: 'auth',
    loadChildren: () => import('./oauth/auth.routes').then(m => m.routes)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuario/usuario.routes').then(m => m.routes)
  },
  {
    path: 'productos',
    loadChildren: () => import('./components/product/product-list/producto.routes').then(m => m.routes)
  },
  {
    path: 'tiendas',
    loadChildren: () => import('./components/product/store-list/store.routes').then(m => m.routes)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./components/product/category-list/category.routes').then(m => m.routes)
  },
   {
    path: 'usuarios',
    loadChildren: () => import('./components/product/user-list/user.routes').then(m => m.routes)
  },



  { path: 'pedidos', component: OrdersPageComponent },

  { path: '**', redirectTo: '' }
];
