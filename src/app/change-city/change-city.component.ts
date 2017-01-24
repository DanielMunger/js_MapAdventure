import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Destination } from '../destination.model';
import { Router } from '@angular/router';
import { DestinationService } from '../destination.service';


@Component({
  selector: 'app-change-city',
  templateUrl: './change-city.component.html',
  styleUrls: ['./change-city.component.css'],
  providers: [ DestinationService]
})
export class ChangeCityComponent implements OnInit {
  @Input() cityToDisplay: Destination;
  @Output() citySender = new EventEmitter();

  destinationId: number = null;
  cities: Destination[];

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private destinationService: DestinationService) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.cities = this.destinationService.getCities();
      this.destinationId = parseInt(urlParametersArray['id']);
      this.cityToDisplay = this.destinationService.getCityById(this.destinationId);
    });
  }

  newDestination(clickedCity: Destination){

    this.route.params.forEach((urlParametersArray) => {
      this.cityToDisplay = this.destinationService.getCityById(clickedCity.id);
      this.router.navigate(['destination', clickedCity.id]);
      this.citySender.emit(this.cityToDisplay);
    });
  }
}
