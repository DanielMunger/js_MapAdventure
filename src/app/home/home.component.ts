import { Component, OnInit } from '@angular/core';
import { MapComponent } from '../map/map.component';
import { Traveller } from '../traveller';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  addTraveler(name:string, job:string){
    let newTraveller: Traveller = new Traveller (name, job)
  }
}
