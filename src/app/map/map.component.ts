import { Component, OnInit, Input } from '@angular/core';
import { Destination } from '../destination.model';
import { SebmGoogleMap } from 'angular2-google-maps/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  @Input() cityToDisplay: Destination;
  @Input() zoomLevel: number;
  constructor() { }
  
  ngOnInit() {
  }


}
