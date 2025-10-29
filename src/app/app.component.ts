import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
import { authConfig } from './oauth/auth.config';
import { filter } from 'rxjs/operators';

import { TableComponent } from "./components/table/table.component";
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenuBarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private oauthService = inject(OAuthService);
  private router = inject(Router);

  ngOnInit() {
    this.configureOAuth();
  }

  private configureOAuth() {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();

    this.oauthService.events
    .pipe(
      filter(e => e.type === 'token_received') 
    )
    .subscribe(_ => {
      console.log('¡Token recibido! Redirigiendo a la página principal...');
      this.router.navigate(['/auth/bienvenida']); 
    });
  }

  title = 'lets-go';

  columnas = ['Nombre', 'Edad', 'Ciudad'];
  
  data = [
    { nombre: 'Carlos', edad: 28, ciudad: 'Lima' },
    { nombre: 'María', edad: 32, ciudad: 'Cusco' },
    { nombre: 'José', edad: 25, ciudad: 'Trujillo' },
    { nombre: 'Lucía', edad: 30, ciudad: 'Arequipa' }
  ];
}
