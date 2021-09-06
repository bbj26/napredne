import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  baseUrl: string = 'http://localhost:1880';

  constructor(private http: HttpClient) { }

  getTemperature() {
    return this.http.get(this.baseUrl + '/temperature');
  }

  getHumidity() {
    return this.http.get(this.baseUrl + '/humidity');
  }

  getFanStatus() {
    return this.http.get(this.baseUrl + '/fanstatus');
  }

  postGoalTemperature(goalTemp: number) {
    return this.http.post(this.baseUrl + '/fanstatus', goalTemp);
  }
}
