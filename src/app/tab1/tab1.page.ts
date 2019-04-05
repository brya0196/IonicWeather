import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {WeatherService} from '../service/weather.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  temperature = 45;

  constructor(private geolocation: Geolocation, private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.geolocation.watchPosition().subscribe((data) => {
      console.log(data);
      this.weatherService.getByCoordantes(data.coords.latitude, data.coords.longitude).subscribe(value => {
        this.temperature = value.main.temp;
      });
    });
  }

}
