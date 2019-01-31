import { Component, OnInit } from '@angular/core';
import { Weather } from '../../shared/interfaces/weather';
import { WeatherDataService } from '../weather-data.service';
import { AuthService } from '../../user/auth.service';
import { FirebaseService } from '../../shared/firebase.service';
import { MatSnackBar } from '@angular/material';
import { User } from '../../shared/interfaces/user';
import { City } from '../../shared/interfaces/city';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {
  get weather(): Weather {
    return this.weatherDataService.getWeather();
  }
  public user$: User;

  constructor(
    private weatherDataService: WeatherDataService,
    private authService: AuthService,
    private firebaseService: FirebaseService,
    private snackBar: MatSnackBar
  ) {
    this.authService.user$.subscribe(user => (this.user$ = user));
  }

  ngOnInit() {}

  public addCity(weather: Weather) {
    const city: City = {
      name: this.weather.name,
      country: this.weather.country,
      description: this.weather.description,
      temperature: this.weather.temperature,
      lat: this.weather.lat,
      lon: this.weather.lon
    };

    this.firebaseService.addCity(this.user$.uid, city).then(res => {
      this.snackBar.open('City saved successfully!', 'OK', { duration: 5000 });
    });
  }
}
