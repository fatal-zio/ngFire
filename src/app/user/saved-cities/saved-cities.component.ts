import { Component, OnInit } from '@angular/core';
import { City } from '../../shared/interfaces/city';
import { FirebaseService } from 'src/app/shared/firebase.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-saved-cities',
  templateUrl: './saved-cities.component.html',
  styleUrls: ['./saved-cities.component.css']
})
export class SavedCitiesComponent implements OnInit {
  public cities: any[];
  public city: any = {};
  public panelOpenState = false;
  public updateForm = true;
  public userId = this.route.snapshot.paramMap.get('id');

  constructor(
    private firebaseService: FirebaseService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      console.log(id);
      this.getCities(id);
    }
  }

  public getCities(id: string): void {
    this.firebaseService.getUserCities(id).subscribe(cities => {
      console.log(cities);
      this.cities = cities;
    });
  }

  public saveCityUpdate(newCity: City) {
    console.log(newCity);
    this.firebaseService.updateCity(this.userId, this.city.id, newCity);
    this.city = {};
  }

  public deleteCity(cityId: string) {
    this.firebaseService.deleteCity(this.userId, cityId);
    this.snackBar.open('City deleted.', 'OK', { duration: 3000 });
  }

  public updateCity(city: any): void {
    this.city.name = city.weather.name;
    this.city.description = city.weather.description;
    this.city.temperature = city.weather.temperature;
    this.city.id = city.id;
  }
}
