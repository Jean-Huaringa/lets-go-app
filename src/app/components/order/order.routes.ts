import { Routes } from "@angular/router";
import { OrderCreateComponent } from "./order-create/order-create.component";
import { OrdersPageComponent } from "./orders-page/orders-page.component";

export const routes: Routes = [
  {
    path: '',
    component: OrdersPageComponent
  },
  {
    path: 'crear',
    component: OrderCreateComponent
  }
]