import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.scss']
})
export class HumidityComponent implements OnInit {

  humidity: any = '';

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getHumidity();
  }

  getHumidity() {
    this.weatherService.getHumidity().subscribe(data => {
      this.humidity = data;
    }, err => {
      console.log(err);
    })
  }

}
