import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { City } from './interfaces/city';
import { Weather } from './interfaces/weather';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  userCollection: AngularFirestoreCollection = this.afs.collection('users');
  cityCollection: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore) {}

  public addCity(userId: string, weather: any) {
    const city = {
      weather,
      time: new Date()
    };

    return this.userCollection
      .doc(userId)
      .collection('cities')
      .add(city);
  }

  public getUserCities(userId: string): Observable<any[]> {
    this.cityCollection = this.afs.collection(`users/${userId}/cities`, ref =>
      ref.orderBy('time', 'desc')
    );
    return this.cityCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(o => {
          const data = o.payload.doc.data();
          data.id = o.payload.doc.id;
          return { ...data };
        })
      )
    );
  }

  public deleteCity(userId: string, cityId: string) {
    return this.getCity(userId, cityId).delete();
  }

  public updateCity(userId: string, cityId: string, weather: any) {
    const newCity = {
      weather,
      time: new Date()
    };
    return this.getCity(userId, cityId).set(newCity);
  }

  private getCity(userId: string, cityId: string) {
    return this.afs.doc(`users/${userId}/cities/${cityId}`);
  }
}
