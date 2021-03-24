import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css'],
})
export class WeatherCardComponent implements OnInit {
  @Input() weatherData;
  step = 0;
  sunrise: any;
  sunset: any;

  constructor() { }

  ngOnInit(): void {
    this.getSunsetandSunriseTime();
  }

  getSunsetandSunriseTime() {
    this.sunrise = new Date(this.weatherData.sys.sunrise * 1000).toUTCString();
    this.sunset = new Date(this.weatherData.sys.sunset * 1000).toUTCString();
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
