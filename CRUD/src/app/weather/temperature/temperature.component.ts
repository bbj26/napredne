import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit {

  temp: any = '';

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getTemp();
  }

  getTemp() {
    this.weatherService.getTemperature().subscribe(data => {
      this.temp = data;
    }, err => {
      console.log(err);
    })
  }

}
