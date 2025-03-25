import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServicioService } from './servicio.service';
import { Root2 } from './interfaz';  // Asegúrate de importar la interfaz también en tu componente

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {

  estacionesP: Root2[] = [];
  estacionesE: Root2[] = [];

  constructor(private servicio: ServicioService) { }

  ngOnInit(): void {
    // Llamada a la URL P
    this.servicio.obtenerEstacionesP().subscribe(data => {
      this.estacionesP = data;
    });

    // Llamada a la URL E
    this.servicio.obtenerEstacionesE().subscribe(data => {
      this.estacionesE = data;
    });
  }
}
