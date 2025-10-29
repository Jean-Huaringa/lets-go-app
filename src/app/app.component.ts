import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from "./components/table/table.component";
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenuBarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'lets-go';

  columnas = ['Nombre', 'Edad', 'Ciudad'];
  
  data = [
    { nombre: 'Carlos', edad: 28, ciudad: 'Lima' },
    { nombre: 'María', edad: 32, ciudad: 'Cusco' },
    { nombre: 'José', edad: 25, ciudad: 'Trujillo' },
    { nombre: 'Lucía', edad: 30, ciudad: 'Arequipa' }
  ];
}
