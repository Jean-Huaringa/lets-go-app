import { Routes } from '@angular/router';
import { LandingComponent } from './shared/landing/landing.component';

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
];
