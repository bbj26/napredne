import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-fan-status',
  templateUrl: './fan-status.component.html',
  styleUrls: ['./fan-status.component.scss']
})
export class FanStatusComponent implements OnInit {

  setGoalTempForm: FormGroup = new FormGroup({});
  fanStatus: any = '';
  humidity: any = '';
  temp: any = ''
  constructor(private weatherService: WeatherService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.setGoalTempForm = this.formBuilder.group({
      'temp': new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(2)])
    });

    this.getFanStatus();
    this.getHumidity();
    this.getTemp();
  }

  getFanStatus() {
    this.weatherService.getFanStatus().subscribe(data => {
      this.fanStatus = data;
    }, err => {
      console.log(err);
    })
  }

  getHumidity() {
    this.weatherService.getHumidity().subscribe(data => {
      this.humidity = data;
    }, err => {
      console.log(err);
    })
  }

  getTemp() {
    this.weatherService.getTemperature().subscribe(data => {
      this.temp = data;
    }, err => {
      console.log(err);
    })
  }

  setGoalTemp() {
    this.weatherService.postGoalTemperature(this.setGoalTempForm.value).subscribe(data => {
      console.log("succesfuully posted goal temp " + data);
    }, err => {
      console.log("error with goal temp ");
      console.log(err);
    });
  }
}
