import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
  private KEY = '199401f347f6477b021f475aa3c3b2d1';
  private UNITS = '&units=metric';

  constructor(private http: HttpClient) {}

  public searchWeatherData(cityName: string): Observable<any> {
    return this.http
      .get(`${this.URL}${cityName}$APPID=${this.KEY}${this.UNITS}`)
      .pipe(tap(data => console.log(JSON.stringify(data))));
  }
}
