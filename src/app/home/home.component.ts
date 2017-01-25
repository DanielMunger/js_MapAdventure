import { Component, OnInit, Input } from '@angular/core';
import { MapComponent } from '../map/map.component';
import { Traveller } from '../traveller.model';
import { Destination } from '../destination.model';
import { Router } from '@angular/router';
import { DestinationService } from '../destination.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DestinationService]
})
export class HomeComponent implements OnInit {
  @Input() cityToDisplay: Destination;
  cities: Destination[];

  constructor(private router: Router, private destinationService: DestinationService) { }
  ngOnInit() {
    this.cities = this.destinationService.getCities();
    this.cityToDisplay = this.cities[1];
    console.log(this.cityToDisplay);
    }
  addTraveler(name:string, job:string){
    let newTraveller: Traveller = new Traveller (name, job)
  }
  newDestination(clickedCity: Destination)
  {
    this.router.navigate(['destination', clickedCity.id]);
  }

}
