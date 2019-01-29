import { Injectable } from '@angular/core';
import { Weather } from '../shared/interfaces/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  private weather: Weather = {
    name: '',
    country: '',
    image: '',
    description: null,
    temperature: null,
    lat: null,
    lon: null
  };

  constructor() {}

  public getWeather(): Weather {
    return this.weather;
  }

  public setWeather(weather: Weather): void {
    this.weather = weather;
  }
}
