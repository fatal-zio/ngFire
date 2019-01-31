import { Component, OnInit } from '@angular/core';
import { Weather } from '../../shared/interfaces/weather';
import { WeatherDataService } from '../weather-data.service';
import { AuthService } from '../../user/auth.service';
import { FirebaseService } from '../../shared/firebase.service';
import { MatSnackBar } from '@angular/material';
import { User } from '../../shared/interfaces/user';

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

  }
}
