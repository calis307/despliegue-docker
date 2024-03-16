import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DogService } from '../../services/dogs.service';

@Component({
  selector: 'app-dogs',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dogs.component.html',
  styleUrl: './dogs.component.css',
})
export class DogsComponent {
  dogImage: string = ''; // Variable para almacenar la URL de la imagen del perro

  constructor(private dogService: DogService) {}

  // Método para obtener una imagen aleatoria de un perro
  getRandomDog(): void {
    // Llamar al método del servicio para obtener una imagen aleatoria de un perro
    this.dogService.getRandomDogImage().subscribe(
      (data) => {
        // Manejar la respuesta exitosa de la solicitud
        this.dogImage = data.message; // Almacenar la URL de la imagen del perro en la variable correspondiente
      },
      (error) => {
        // Manejar cualquier error que ocurra durante la solicitud
        console.error('Error al obtener la imagen del perro:', error);
      }
    );
  }
}
