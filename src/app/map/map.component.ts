import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title:string;
  lat:number;
  lng:number;

  constructor() { }

  ngOnInit() {
    this.title= "Map Adventure";
    this.lat= 45.5231;
    this.lng= -122.6765;
  }

}
