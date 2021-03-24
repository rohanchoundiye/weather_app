import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {
  @Input() weatherData;
  @Output() weatherSearchFormValue = new EventEmitter();

  public weatherSearchForm: FormGroup;

  // tslint:disable-next-line:variable-name
  constructor(private _appService: AppService, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.weatherSearchForm = this._formBuilder.group({
      locationOrZipCode: [''],
    });
  }

  getFormValue(formValue) {
    this.weatherSearchFormValue.emit(formValue);
  }

}
