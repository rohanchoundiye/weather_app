import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class AppService {

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) { }

  getWeatherData(formValue): Observable<any> {
    if (isNaN(formValue)) {
      return this._http.get(`${environment.baseURLForWeather}weather?q=${formValue}&APPID=${environment.AppId}`);
    }
    return this._http.get(`${environment.baseURLForWeather}weather?zip=${formValue},in&APPID=${environment.AppId}`);
  }

  getForecastData(latitude, longitude): Observable<any> {
    console.log(latitude, longitude);
    // tslint:disable-next-line:max-line-length
    return this._http.get(`${environment.baseURLForForecast}onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&appid=${environment.AppId}`
    );
  }

}
