import { Component, OnInit } from '@angular/core';
import { Weather } from '../../shared/interfaces/weather';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {
  public weather: Weather;

  constructor() { }

  ngOnInit() {
  }

}
