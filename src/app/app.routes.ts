import { Routes } from '@angular/router';
import { StorePageComponent } from './components/store/store-page/store-page.component';
import { ProductsPageComponent } from './components/product/products-page/products-page.component';
import { OrdersPageComponent } from './components/order/orders-page/orders-page.component';
import { UsersPageComponent } from './components/user/users-page/users-page.component';
import { CategoryPageComponent } from './components/category/category-page/category-page.component';

export const routes: Routes = [
  { path: 'tiendas', component: StorePageComponent },
  { path: 'productos', component: ProductsPageComponent },
  { path: 'pedidos', component: OrdersPageComponent },
  { path: 'usuarios', component: UsersPageComponent },
  { path: 'categorias', component: CategoryPageComponent },
  { path: '', redirectTo: '/tiendas', pathMatch: 'full' }
];
