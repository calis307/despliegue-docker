import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // CommonModule y FormsModule importados para poder utilizar ngModel
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ahorcado',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ahorcado.component.html',
  styleUrl: './ahorcado.component.css',
})
export class AhorcadoComponent {
  palabraSecreta: string = 'ANGULAR'; // Palabra secreta para adivinar
  palabraMostrada: string = ''; // Representa la palabra adivinada por el usuario, inicialmente vacía
  letrasUsadas: string[] = []; // Almacena las letras usadas por el usuario
  letraIngresada: string = ''; // Variable para almacenar la letra ingresada por el usuario
  intentosRestantes: number = 10; // Número de intentos restantes

  constructor() {
    this.inicializarJuego();
  }

  // Método para inicializar el juego
  inicializarJuego(): void {
    this.palabraMostrada = '_'.repeat(this.palabraSecreta.length); // Inicializa la palabra mostrada con guiones bajos
    this.letrasUsadas = [];
    this.letraIngresada = '';
    this.intentosRestantes = 10;
  }

  // Método para procesar la letra ingresada por el usuario
  procesarLetra(): void {
    if (this.intentosRestantes > 0) {
      const letra = this.letraIngresada.toUpperCase(); // Convertir la letra ingresada a mayúsculas
      if (!this.letrasUsadas.includes(letra)) {
        this.letrasUsadas.push(letra); // Agrega la letra al array de letras usadas
        if (this.palabraSecreta.includes(letra)) {
          // Si la letra está en la palabra secreta
          let nuevaPalabraMostrada = '';
          for (let i = 0; i < this.palabraSecreta.length; i++) {
            if (this.palabraSecreta[i] === letra) {
              nuevaPalabraMostrada += letra; // Reemplaza los guiones bajos con la letra en la posición correspondiente
            } else {
              nuevaPalabraMostrada += this.palabraMostrada[i]; // Mantiene los guiones bajos en las posiciones donde no hay coincidencias
            }
          }
          this.palabraMostrada = nuevaPalabraMostrada;

          // Verifica si el jugador ha ganado
          if (this.palabraMostrada === this.palabraSecreta) {
            alert('¡Felicidades! ¡Has ganado!');
            this.inicializarJuego();
          }
        } else {
          // Si la letra no está en la palabra secreta, decrementar los intentos restantes
          this.intentosRestantes--;

          // Verifica si se acabaron los intentos
          if (this.intentosRestantes === 0) {
            alert(
              '¡Lo siento! ¡Has perdido! La palabra secreta era: ' +
                this.palabraSecreta
            );
            this.inicializarJuego();
          }
        }
      } else {
        alert('¡Ya has usado esta letra!');
      }
    } else {
      alert('¡Ya has usado todos tus intentos!');
    }
    // Limpiar la letra ingresada después de procesarla
    this.letraIngresada = '';
  }
}
