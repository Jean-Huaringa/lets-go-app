import { Component, inject, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { RouterLink } from '@angular/router';
import { TrabajadorService } from '../../core/services/trabajador.service';

@Component({
  selector: 'app-landing',
  imports: [RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {
  private oauthService = inject(OAuthService);

  // servicios de prueba
  private trabajadorService = inject(TrabajadorService);

  ngOnInit(): void {
    this.trabajadorService.obtenerTrabajadores().subscribe({
      next: (response) => {
        console.log('Trabajadores:', response);
      },
      error: (error) => {
        console.error('Error al obtener trabajadores:', error);
      }
    });
  }

  login() {
    this.oauthService.initCodeFlow();
  }
}
