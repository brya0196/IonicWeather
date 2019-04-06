import { Component } from '@angular/core';
import {WeatherService} from '../service/weather.service';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  name: string = '';
  temperature = '0';

  constructor(private weatherService: WeatherService, private alertController: AlertController) {}

  async getTemperature() {
    if (this.name.length <= 0) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'The country or city name is empty',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }

    try {
      const value = await this.weatherService.getByCityName(this.name).toPromise();
      this.temperature = Number(value.main.temp).toFixed(0).toString();
    } catch (e) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Country or City not found',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }


  }
}
