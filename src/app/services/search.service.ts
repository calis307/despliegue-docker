import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  // Arreglo privado que contiene los elementos disponibles con su nombre y su icono
  private elementos: { nombre: string; icono: string }[] = [
    { nombre: 'clima', icono: 'thermometer-snow' },
    { nombre: 'pokeapi', icono: 'film' },
    { nombre: 'cocktail', icono: 'heart' },
    { nombre: 'dogs', icono: 'bricks' },
    { nombre: 'dogdex', icono: 'android' },
  ];

  constructor() {}
  // Método para buscar elementos por su nombre
  buscarElemento(query: string): { nombre: string; icono: string }[] {
    // Filtra los elementos cuyo nombre incluya la cadena de consulta proporcionada
    return this.elementos.filter((elemento) =>
      elemento.nombre.toLowerCase().includes(query.toLowerCase())
    );
  }

  // Método para obtener todos los elementos
  obtenerTodosElementos(): { nombre: string; icono: string }[] {
    // Devuelve todos los elementos disponibles sin ningún filtro
    return this.elementos;
  }
}
