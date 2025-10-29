import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-bienvenida',
  imports: [
    RouterLink
  ],
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.css'
})
export class BienvenidaComponent {
  private oauthService = inject(OAuthService);

  logout() {
    this.oauthService.logOut();
  }
}
