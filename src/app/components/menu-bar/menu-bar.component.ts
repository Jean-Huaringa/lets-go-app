import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
  private oauthService = inject(OAuthService);

  logout() {
    this.oauthService.logOut();
  }
}
