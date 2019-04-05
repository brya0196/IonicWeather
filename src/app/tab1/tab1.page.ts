import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  temperature:number = 45;

  constructor(private geolocation: Geolocation) {}

  ngOnInit(): void {
    this.geolocation.watchPosition().subscribe((data) => {
      console.log(data);
    });
  }

}
