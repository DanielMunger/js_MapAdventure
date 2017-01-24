import { Component, OnInit, Input } from '@angular/core';
import { Destination } from '../destination.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() cityToDisplay: Destination;
  title:string;
  lat:number;
  lng:number;

  constructor() { }

  ngOnInit() {
    this.title= "Map Adventure";
    this.lat= this.cityToDisplay.lat;
    this.lng= this.cityToDisplay.lng;
  }

}
