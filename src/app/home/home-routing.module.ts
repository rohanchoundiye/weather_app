import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WeatherForcastComponent } from './weather-forcast/weather-forcast.component';


const routes: Routes = [
  { path: '', redirectTo: '/home/weather-details', pathMatch: 'full' },
  {
    path: 'weather-details',
    component: HomeComponent
  },
  {
    path: 'weather-forcasted',
    component: WeatherForcastComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
