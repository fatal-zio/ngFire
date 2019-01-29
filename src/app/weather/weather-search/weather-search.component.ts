import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather } from 'src/app/shared/interfaces/weather';
import { WeatherDataService } from '../weather-data.service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {
  public query: string;

  constructor(
    private weatherService: WeatherService,
    private weatherDataService: WeatherDataService
  ) {}

  ngOnInit() {}

  set weather(data: Weather) {
    this.weatherDataService.setWeather(data);
  }

  public search() {
    this.weatherService
      .searchWeatherData(this.query)
      .subscribe((weather: any) => {
        this.weather = weather;
        this.query = '';
      });
  }
}
