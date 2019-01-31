import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  userCollection: AngularFirestoreCollection = this.afs.collection('users');

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
}