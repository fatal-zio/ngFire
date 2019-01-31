import { Component, OnInit } from '@angular/core';
import { City } from '../../shared/interfaces/city';
import { FirebaseService } from 'src/app/shared/firebase.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-saved-cities',
  templateUrl: './saved-cities.component.html',
  styleUrls: ['./saved-cities.component.css']
})
export class SavedCitiesComponent implements OnInit {
  public cities: City[];
  public city: any = {};
  public panelOpenState = false;
  public updateForm = false;
  public saveForm = true;
  public userId = this.route.snapshot.paramMap.get('id');

  constructor(
    private firebaseService: FirebaseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      console.log(id);
      this.getCities(id);
    }
  }

  public getCities(id: string) {
    this.firebaseService.getUserCities(id).subscribe(cities => {
      console.log(cities);
      this.cities = cities;
    });
  }
}
