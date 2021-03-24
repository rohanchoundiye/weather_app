import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  weatherData: any;

  // tslint:disable-next-line:variable-name
  constructor(private _appService: AppService) { }

  ngOnInit(): void {
  }

  getWeatherData(formValue) {
    this._appService.getWeatherData(formValue.locationOrZipCode).subscribe((apiResponse) => {
      this.weatherData = apiResponse;
    }, (error) => {
      console.log('Server Side Error occured');
    });
  }
}
