import { Routes } from '@angular/router';
import { LandingComponent } from './shared/landing/landing.component';
import { StorePageComponent } from './components/store/store-page/store-page.component';
import { ProductsPageComponent } from './components/product/products-page/products-page.component';
import { OrdersPageComponent } from './components/order/orders-page/orders-page.component';
import { UsersPageComponent } from './components/user/users-page/users-page.component';
import { CategoryPageComponent } from './components/category/category-page/category-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./oauth/auth.routes').then(m => m.routes)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuario/usuario.routes').then(m => m.routes)
  },
  {
    path: '**',
    redirectTo: ''
  }
  { path: 'tiendas', component: StorePageComponent },
  { path: 'productos', component: ProductsPageComponent },
  { path: 'pedidos', component: OrdersPageComponent },
  { path: 'usuarios', component: UsersPageComponent },
  { path: 'categorias', component: CategoryPageComponent },
  { path: '', redirectTo: '/tiendas', pathMatch: 'full' }
];
