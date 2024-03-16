import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  // URL base de la API de Pokémon
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  // Método para obtener los detalles de un Pokémon por su ID o nombre
  getPokemonByIdOrName(query: string): Observable<any> {
    // Construir la URL completa con el ID o nombre del Pokémon
    const url = `${this.apiUrl}/${query}`;
    // Realizar una solicitud GET a la API de Pokémon y devolver el resultado como un Observable
    return this.http.get(url);
  }
}
