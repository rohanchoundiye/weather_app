import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnChanges {
  @Input() forecastData;

  highcharts = Highcharts;
  chartOptions: any;
  xAxisData: any = [];
  whetherDescriptions: any = [];
  yAxisMinTempData: any = [];
  yAxisMaxTempData: any = [];
  weatherDescription: any = [];

  constructor() { }

  ngOnInit(): void {

  }

  loadChart() {
    const self = this;
    this.chartOptions = {
      chart: { type: 'spline' },
      title: {
        text: '7 Day forecast'
      },
      xAxis: {
        categories: this.xAxisData
      },
      yAxis: {
        title: {
          text: 'The High and Low Temperature °C'
        }
      },
      tooltip: {
        formatter() {
          // tslint:disable-next-line:max-line-length
          return `<span>Day Of The Month</span>: <span> ${this.x} </span></br> <span>High Temperature</span>: <span> ${self.yAxisMaxTempData[this.point.index]} </span></br>  <span>Low Temperature</span>: <span> ${self.yAxisMinTempData[this.point.index]}</span></br> <span>Weather Description</span>: <span> ${self.whetherDescriptions[this.point.index]}</span></br>`;
        }
      },
      series: [
        {
          name: 'Low Temperature',
          data: this.yAxisMinTempData
        },
        {
          name: 'High Temperature',
          data: this.yAxisMaxTempData
        },
      ]
    };
  }

  ngOnChanges() {
    this.getForecastData();
    this.loadChart();
  }

  getForecastData() {
    if (this.forecastData) {
      this.forecastData.daily.forEach(item => {
        this.yAxisMinTempData.push(item.temp.min);
        this.yAxisMaxTempData.push(item.temp.max);
        this.xAxisData.push(new Date(item.dt * 1000).toUTCString());
        this.whetherDescriptions.push(item.weather[0].description);
      });
    }
  }

}
