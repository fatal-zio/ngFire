import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../shared/interfaces/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$: Observable<User | null>;

  constructor(
    private http: HttpClient,
    private router: Router,
    public afAuth: AngularFireAuth,
    private snackBar: MatSnackBar
  ) {
    this.user$ = this.afAuth.authState;
  }

  public logout(): void {
    this.afAuth.auth.signOut().then(() => {
      this.snackBar.open('Logged out successfully.', 'OK', {
        duration: 5000
      });
      this.router.navigate(['/weather']);
    });
  }
}
