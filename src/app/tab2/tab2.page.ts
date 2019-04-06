import { Component } from '@angular/core';
import {WeatherService} from '../service/weather.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  cityName: string;
  temperature = '0';

  constructor(private weatherService: WeatherService) {}

  getTemperature() {
    if (this.cityName.length <= 0) { return; }

    this.weatherService.getByCityName(this.cityName).subscribe(value => {
      this.temperature = Number(value.main.temp).toFixed(0).toString();
    });
  }
}
