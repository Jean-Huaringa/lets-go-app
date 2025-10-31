import { Routes } from "@angular/router";
import { CrearUsuarioComponent } from "./crear-usuario/crear-usuario.component";
import { UsersPageComponent } from "./users-page/users-page.component";

export const routes: Routes = [
  { path: '', component: UsersPageComponent },
  { path: 'crear', component: CrearUsuarioComponent },
]