import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {
  public query: string;

  constructor() { }

  ngOnInit() {
  }

  public search(query) {

  }

}
