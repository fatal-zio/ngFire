import { Component, OnInit } from '@angular/core';
import { City } from '../../shared/interfaces/city';

@Component({
  selector: 'app-saved-cities',
  templateUrl: './saved-cities.component.html',
  styleUrls: ['./saved-cities.component.css']
})
export class SavedCitiesComponent implements OnInit {
  public city: City;

  constructor() { }

  ngOnInit() {
  }

}
