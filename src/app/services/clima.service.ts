import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClimaService {
  // Inyección del servicio HttpClient en el constructor
  private _http = inject(HttpClient);

  // URL base de la API de OpenWeatherMap para obtener datos climáticos
  private urlBase = 'https://api.openweathermap.org/data/2.5/weather';
  // Clave de API para acceder a la API de OpenWeatherMap
  private apiKey = '605507acf87117e111e54a3ab5238541';
  // Diferencia para convertir temperatura de Kelvin a Celsius
  private difKelvin = 273.15;

  // Método para buscar datos climáticos de una ciudad específica
  buscarClima(ciudad: string): Observable<any> {
    const url = `${this.urlBase}?q=${ciudad}&appid=${this.apiKey}`;
    // Realización de una solicitud GET a la API y devolución del resultado como un Observable
    return this._http.get(url);
  }

  // Método para procesar los datos climáticos recibidos de la API
  procesarDatosClima(data: any): any {
    // Extracción de los datos relevantes de la respuesta y creación de un objeto con ellos
    return {
      ciudadNombre: data.name,
      paisNombre: data.sys.country,
      temperatura: Math.floor(data.main.temp - this.difKelvin),
      humedad: data.main.humidity,
      descripcion: data.weather[0].description,
      icono: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      viento: data.wind.speed,
      hora: new Date().getHours() + ':' + new Date().getMinutes(),
      tempMax: Math.floor(data.main.temp_max - this.difKelvin),
    };
  }
}
