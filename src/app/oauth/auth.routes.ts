/**
 *   { path: 'register', component: RegisterComponent },
   { path: 'landing', component: LandingComponent },
   { path: 'auth-callback', component: CallbackComponent },
   { path: 'bienvenida', component: BienvenidaComponent },
   { path: 'cambiar-clave', component: CambiarClaveComponent },
   { path: 'crear-usuario', component: CrearUsuarioComponent },
   { path: '', redirectTo: '/landing', pathMatch: 'full' }
 */

import { Routes } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { LandingComponent } from "../shared/landing/landing.component";
import { CallbackComponent } from "./callback/callback.component";
import { BienvenidaComponent } from "./bienvenida/bienvenida.component";
import { CambiarClaveComponent } from "./cambiar-clave/cambiar-clave.component";

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'auth-callback', component: CallbackComponent },
  { path: 'bienvenida', component: BienvenidaComponent },
  { path: 'cambiar-clave', component: CambiarClaveComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full' } 
]