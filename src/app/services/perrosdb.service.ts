import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PerrosService {
  // URL base para la API de perros
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  // Método para obtener todas las razas de perros
  getRazas(): Observable<any> {
    // Realiza una solicitud GET a la API para obtener las razas de perros y devuelve el resultado como un Observable
    return this.http.get<any>(`${this.baseUrl}/razas`);
  }

  // Método para obtener la imagen de una raza específica
  getImagen(raza: string): Observable<any> {
    // Realiza una solicitud GET a la API para obtener la imagen y devuelve el resultado como un Observable
    return this.http.get<any>(`${this.baseUrl}/imagen/${raza}`);
  }
}
