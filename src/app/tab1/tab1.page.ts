import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {WeatherService} from '../service/weather.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  temperature = '0';
  weather: string;

  constructor(private geolocation: Geolocation, private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.geolocation.watchPosition().subscribe((data) => {
      this.weatherService.getByCoordantes(data.coords.latitude, data.coords.longitude).subscribe(value => {
        this.temperature = Number(value.main.temp).toFixed(0).toString();
        this.weather = String(value.weather[0].main);
      });
    });
  }

}
