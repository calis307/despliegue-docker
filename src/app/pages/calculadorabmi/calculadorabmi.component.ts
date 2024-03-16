import { CommonModule } from '@angular/common'; // CommonModule y FormsModule importados para poder utilizar ngModel
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadorabmi',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculadorabmi.component.html',
  styleUrl: './calculadorabmi.component.css',
})
export class CalculadorabmiComponent {
  altura: number = 0; // Altura en metros
  peso: number = 0; // Peso en kilogramos
  bmi: number = 0; // Índice de Masa Corporal (BMI)

  calcularBMI(): void {
    // Método para calcular el índice de masa corporal (BMI)
    if (this.altura > 0 && this.peso > 0) {
      // Verificamos que la altura y el peso sean mayores que cero para evitar divisiones por cero
      this.bmi = this.peso / (this.altura * this.altura); // Calculamos el BMI
    } else {
      this.bmi = 0; // Si la altura o el peso son cero o negativos, el BMI es cero
    }
  }
}
