import { Component, OnInit } from '@angular/core';
import { PerrosService } from '../../services/perrosdb.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dogdex',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dogdex.component.html',
  styleUrl: './dogdex.component.css',
})
export class DogdexComponent implements OnInit {
  razas: any[] = []; // Variable para almacenar las razas de perros
  imagen: string = ''; // Variable para almacenar la URL de la imagen del perro

  constructor(private perrosService: PerrosService) {} // Inyectar el servicio PerrosService en el constructor

  ngOnInit(): void {
    // Método que se ejecuta al inicializar el componente
    this.perrosService.getRazas().subscribe((data) => {
      // Obtener las razas de perros utilizando el servicio PerrosService
      this.razas = Object.keys(data.message); // Almacenar las razas en la variable correspondiente
    });
  }

  cargarImagen(raza: string): void {
    // Método para cargar la imagen de un perro de una raza específica
    this.perrosService.getImagen(raza).subscribe((data) => {
      // Obtener la imagen del perro utilizando el servicio PerrosService
      this.imagen = data.message; // Almacenar la URL de la imagen en la variable correspondiente
    });
  }
}
