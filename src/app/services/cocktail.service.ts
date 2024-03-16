import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  // URL de la API para buscar cócteles por nombre
  private apiUrl: string =
    'https://www.thecocktaildb.com/api/json/v1/1/search.php';

  constructor(private http: HttpClient) {}

  // Método para buscar cócteles por nombre
  searchCocktailByName(name: string): Observable<any> {
    // Construir la URL de la solicitud GET con el nombre del cóctel proporcionado
    const url = `${this.apiUrl}?s=${name}`;
    // Realizar una solicitud GET a la API y devolver el resultado como un Observable
    return this.http.get(url);
  }
}
