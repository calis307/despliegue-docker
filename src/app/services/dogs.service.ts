import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DogService {
  // URL de la API para obtener una imagen aleatoria de un perro
  private apiUrl = 'https://dog.ceo/api/breeds/image/random';

  constructor(private http: HttpClient) {}

  // Método para obtener una imagen aleatoria de un perro
  getRandomDogImage(): Observable<any> {
    // Realizar una solicitud GET a la API y devolver el resultado como un Observable
    return this.http.get(this.apiUrl);
  }
}
