import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { WeatherData } from '../shared/interfaces/weather-data';
import { Weather } from '../shared/interfaces/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  private KEY = '199401f347f6477b021f475aa3c3b2d1';
  private UNITS = '&units=metric';

  constructor(private http: HttpClient) {}

  public searchWeatherData(cityName: string): Observable<any> {
    return this.http
      .get<WeatherData>(`${this.URL}${cityName}$APPID=${this.KEY}${this.UNITS}`)
      .pipe(
        map(data => this.transformWeatherData(data)),
        tap(data => console.log(JSON.stringify(data)))
      );
  }

  private transformWeatherData(data: WeatherData): Weather {
    return {
      name: data.name,
      country: data.sys.country,
      image: `http://openweathermap.org/img/${data.weather[0].icon}.png`,
      description: data.weather[0].description,
      temperature: data.main.temp,
      lat: data.coord.lat,
      lon: data.coord.lon
    };
  }
}
