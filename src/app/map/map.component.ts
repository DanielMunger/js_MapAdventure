import { Component, OnInit, Input } from '@angular/core';
import { Destination } from '../destination.model';
import { SebmGoogleMap } from 'angular2-google-maps/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
//   directives: [SebmGoogleMap],
//   styles: [`
//    .sebm-google-map-container {
//      height: 100px;
//    }
// `],
})
export class MapComponent implements OnInit {
  @Input() cityToDisplay: Destination;

  constructor() { }

  ngOnInit() {
  }
  test(){
    // SebmGoogleMap.backgroundColor = red;
  }

}
