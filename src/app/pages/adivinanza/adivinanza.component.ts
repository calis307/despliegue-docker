import { CommonModule } from '@angular/common'; // CommonModule y FormsModule importados para poder utilizar ngModel
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-adivinanza',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './adivinanza.component.html',
  styleUrl: './adivinanza.component.css',
})
export class AdivinanzaComponent {
  numeroSecreto: number; // Número secreto generado aleatoriamente
  numerosIntroducidos: number[] = []; // Números introducidos por el usuario
  intentos: number = 0; // Contador de intentos
  mensaje: string = ''; // Mensaje para mostrar al usuario
  numeroEntrada!: number; // Número introducido por el usuario
  inputDisabled: boolean = false; // Bandera para indicar si el usuario acertó

  constructor() {
    // Generar número secreto al iniciar el componente
    this.numeroSecreto = this.randomNumber(1, 100);
  }

  // Método para comprobar el número introducido por el usuario
  comprobarNumero() {
    let acierto = this.numeroSecreto === this.numeroEntrada; // Verificar si el número introducido es igual al número secreto

    // Validaciones adicionales
    if (!this.checkInputNumber(this.numeroEntrada, 1, 100)) {
      this.mensaje = 'Número incorrecto!';
      return;
    } else if (
      this.checkRepeatedValues(this.numeroEntrada, this.numerosIntroducidos)
    ) {
      this.mensaje = 'Número ya introducido!';
      return;
    }

    // Actualizar lista de números introducidos
    this.numerosIntroducidos.push(this.numeroEntrada);

    // Mostrar mensaje de acierto o pista para el usuario
    this.mensaje = acierto
      ? '¡Enhorabuena, has acertado!'
      : this.numeroSecreto < this.numeroEntrada
      ? 'Demasiado alto'
      : 'Demasiado bajo';

    // Incrementar contador de intentos
    this.intentos++;

    // Deshabilitar input y botón si el usuario acertó
    if (acierto) {
      this.inputDisabled = true;
    }
  }

  // Método para generar un número aleatorio dentro de un rango dado
  randomNumber(from: number, to: number) {
    return Math.trunc(Math.random() * to + from);
  }

  // Método para validar que el número introducido esté dentro del rango permitido
  checkInputNumber(n: number, min: number, max: number) {
    return n >= min && n < max && !isNaN(n);
  }

  // Método para verificar si un número ya ha sido introducido previamente
  checkRepeatedValues(n: number, array: number[]) {
    return array.includes(n);
  }
}
