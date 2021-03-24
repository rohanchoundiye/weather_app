import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HighchartsChartModule } from 'highcharts-angular';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChartComponent } from './chart/chart.component';
import { TableComponent } from './table/table.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { TableModule } from 'primeng/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { WeatherCardComponent } from './weather-card/weather-card.component';


@NgModule({
  declarations: [
    PageNotFoundComponent,
    ChartComponent,
    TableComponent,
    WeatherDetailsComponent,
    WeatherCardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HighchartsChartModule,
    TableModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  exports: [
    ChartComponent,
    TableComponent,
    WeatherDetailsComponent,
  ]
})
export class SharedModule { }
