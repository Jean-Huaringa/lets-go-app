import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
import { authConfig } from './oauth/auth.config';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
}
