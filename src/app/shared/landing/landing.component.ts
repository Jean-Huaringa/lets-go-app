import { Component, inject, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { RouterLink } from '@angular/router';
import { TrabajadorService } from '../../core/services/trabajador.service';
import { ProductoService } from '../../core/services/producto.service';

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
  private productoService = inject(ProductoService);

  ngOnInit(): void {
    this.productoService.obtenerProductos().subscribe(productos => {
      console.log('Productos obtenidos:', productos);
    });

    this.trabajadorService.obtenerTrabajadores().subscribe(trabajadores => {
      console.log('Trabajadores obtenidos:', trabajadores);
    });
  }

  login() {
    this.oauthService.initCodeFlow();
  }
}
