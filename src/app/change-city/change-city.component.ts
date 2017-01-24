import { Component, OnInit, Input } from '@angular/core';
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
  destinationId: number = null;
  cities: Destination[];

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private destinationService: DestinationService) { }

  ngOnInit() {
    this.cities = this.destinationService.getCities();
    console.log(this.cities)
    this.route.params.forEach((urlParametersArray) => {
      this.destinationId = parseInt(urlParametersArray['id']);
    });
    this.cityToDisplay = this.destinationService.getCityById(this.destinationId);  }

  newDestination(clickedCity: Destination)
  {
    this.router.navigate(['destination', clickedCity.id]);
    console.log(this.cityToDisplay);

    this.route.params.forEach((urlParametersArray) => {
      this.destinationId = parseInt(urlParametersArray['id']);
    });
    this.cityToDisplay = this.destinationService.getCityById(this.destinationId);
    console.log(this.cityToDisplay);
  }
}
