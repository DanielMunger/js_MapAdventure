import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Destination } from '../destination.model';
import { DestinationService } from '../destination.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css'],
  providers: [DestinationService]
})
export class DestinationComponent implements OnInit {
  destinationId: number = null;
  cityToDisplay: Destination;
  cities: Destination[];

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private destinationService: DestinationService) { }

  ngOnInit() {
    this.cities = this.destinationService.getCities();
    this.route.params.forEach((urlParametersArray) => {
      this.destinationId = parseInt(urlParametersArray['id']);
    });
    this.cityToDisplay = this.destinationService.getCityById(this.destinationId);
  }
  changeCity(city){
    this.cityToDisplay = city;
  }

}
