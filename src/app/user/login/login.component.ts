import { Component, OnInit } from '@angular/core';
import { AuthProvider } from 'ngx-auth-firebaseui';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public providers = AuthProvider;

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {}

  ngOnInit() {}

  public success(content: any): void {
    this.snackBar.open(`Welcome ${content.displayName}`, 'OK', {
      duration: 5000
    });
    this.router.navigate(['/weather']);
  }
}
