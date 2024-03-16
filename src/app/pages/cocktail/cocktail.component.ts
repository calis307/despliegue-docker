import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CocktailService } from '../../services/cocktail.service';

@Component({
  selector: 'app-cocktail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cocktail.component.html',
  styleUrl: './cocktail.component.css',
})
export class CocktailComponent {
  cocktail: any; // Variable para almacenar los detalles del cóctel
  cocktailName: string = ''; // Variable para almacenar el nombre del cóctel ingresado por el usuario
  ingredients: string[] = []; // Arreglo para almacenar los ingredientes del cóctel

  constructor(private cocktailService: CocktailService) {} // Inyectar el servicio CocktailService en el constructor

  searchCocktail(): void {
    // Método para buscar un cóctel por su nombre
    if (this.cocktailName.trim() !== '') {
      // Verificar si se ha ingresado un nombre de cóctel
      this.cocktailService.searchCocktailByName(this.cocktailName).subscribe(
        (data) => {
          // Suscribirse al resultado de la búsqueda del cóctel
          this.cocktail = data.drinks ? data.drinks[0] : null; // Almacenar los detalles del cóctel
          this.getIngredientsList(); // Obtener la lista de ingredientes del cóctel
        },
        (error) => {
          console.error('Error al buscar el cóctel:', error); // Manejar errores
          this.cocktail = null;
        }
      );
    }
  }

  getIngredientsList(): void {
    // Método para obtener la lista de ingredientes del cóctel
    this.ingredients = []; // Limpiar el arreglo de ingredientes
    // Iterar sobre los posibles ingredientes del cóctel (se asume que hay hasta 15)
    for (let i = 1; i <= 15; i++) {
      // Se asume que el cóctel tiene hasta 15 ingredientes
      const ingredient = this.cocktail[`strIngredient${i}`]; // Obtener el ingrediente correspondiente
      // Verificar si hay un ingrediente en esta posición
      if (ingredient) {
        this.ingredients.push(ingredient); // Agregar el ingrediente al arreglo
      } else {
        break; // Si no hay más ingredientes, salir del bucle
      }
    }
  }
}
