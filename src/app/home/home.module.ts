import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { WeatherForcastComponent } from './weather-forcast/weather-forcast.component';


@NgModule({
  declarations: [
    HomeComponent,
    WeatherForcastComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    HomeRoutingModule,
    MatTabsModule
  ]
})
export class HomeModule { }
