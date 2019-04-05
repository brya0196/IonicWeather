import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherApiKey = '94ecb5068c46a41aa9a56503894d22c9';

  constructor(private http: HttpClient) { }

  getByCoordantes(lat, long): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${this.weatherApiKey}`);
  }

  getByCityName(name): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${name}&units=metric&appid=${this.weatherApiKey}`);
  }
}
