import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = 'http://localhost:3000/api/register';
  private _loginUrl = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient, private _router: Router) { }

  registerUser(userObj: any) {
    return this.http.post<any>(this._registerUrl, userObj);
  }

  loginUser(userObj: any) {
    return this.http.post<any>(this._loginUrl, userObj);
  }

  loggedIn() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/']);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
