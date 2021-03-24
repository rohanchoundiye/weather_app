import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-weather-forcast',
  templateUrl: './weather-forcast.component.html',
  styleUrls: ['./weather-forcast.component.css']
})
export class WeatherForcastComponent implements OnInit {
  forecastData: any;
  forecastSearchForm: FormGroup;

  // tslint:disable-next-line:variable-name
  constructor(private _appService: AppService, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.forecastSearchForm = this._formBuilder.group({
      latitude: [''],
      longitude: [''],
    });
  }

  getForecastData(formValues) {
    this._appService.getForecastData(formValues.latitude, formValues.longitude).subscribe((apiResponse) => {
      this.forecastData = apiResponse;
    }, (error) => {
      console.log('Server Side Error occured');
    });
  }
}
