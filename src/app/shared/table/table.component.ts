import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() forecastData: any;
  data: any = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.setForecastData();
  }

  setForecastData() {
    if (this.forecastData) {
      this.forecastData.daily.forEach(item => {
        const tableObject = {
          lowTemp: item.temp.min,
          highTemp: item.temp.max,
          date: new Date(item.dt * 1000).toUTCString(),
          description: item.weather[0].description
        };
        this.data.push(tableObject);
      });
    }
  }
}
