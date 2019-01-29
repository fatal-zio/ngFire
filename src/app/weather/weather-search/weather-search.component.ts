import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather } from 'src/app/shared/interfaces/weather';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {
  public query: string;
  public weather: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {}

  public search() {
    this.weatherService
      .searchWeatherData(this.query)
      .subscribe((weather: any) => {
        this.weather = weather;
        this.query = '';
      });
  }
}
