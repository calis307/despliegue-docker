import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClimaService } from '../../services/clima.service';

@Component({
  selector: 'app-clima',
  standalone: true,
  imports: [CommonModule, FormsModule], // Agregar CommonModule aquí
  templateUrl: './clima.component.html',
  styleUrl: './clima.component.css',
})
export class ClimaComponent {
  ciudad: string = ''; // Variable para almacenar el nombre de la ciudad ingresado por el usuario
  private _climaService = inject(ClimaService); // Servicio ClimaService
  datosClima: any; // Objeto para almacenar los datos del clima

  buscarCiudad() {
    // Método para buscar el clima de una ciudad
    this._climaService.buscarClima(this.ciudad).subscribe((data) => {
      // Suscribirse al resultado de la búsqueda del clima
      this.datosClima = this._climaService.procesarDatosClima(data); // Procesar y asignar los datos del clima
    });
  }
}
