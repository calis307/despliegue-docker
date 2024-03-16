import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokeapi',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pokeapi.component.html',
  styleUrl: './pokeapi.component.css',
})
export class PokeapiComponent implements OnInit {
  pokemon: any; // Variable para almacenar los detalles del Pokémon
  pokemonName: string = ''; // Variable para almacenar el nombre del Pokémon ingresado por el usuario

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    // Este método se ejecuta cuando se inicializa el componente
    // Aquí podrías realizar alguna acción inicial, pero en este caso, no necesitamos hacer nada al inicio
  }

  // Método para obtener los detalles del Pokémon
  getPokemonDetails(): void {
    // Verificar si se ingresó un nombre de Pokémon válido
    if (this.pokemonName.trim() !== '') {
      // Llamar al método del servicio para obtener los detalles del Pokémon por su nombre
      this.pokemonService
        .getPokemonByIdOrName(this.pokemonName.toLowerCase())
        .subscribe(
          (data) => {
            // Manejar la respuesta exitosa de la solicitud
            this.pokemon = data; // Almacenar los detalles del Pokémon en la variable correspondiente
          },
          (error) => {
            // Manejar cualquier error que ocurra durante la solicitud
            console.error('Error al obtener los detalles del Pokemon:', error);
            this.pokemon = null; // Establecer la variable de los detalles del Pokémon como nula en caso de error
          }
        );
    }
  }
}
