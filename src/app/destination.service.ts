import { Injectable } from '@angular/core';
import { Destination } from './destination.model';
import { cities } from './city-list';

@Injectable()
export class DestinationService {

  constructor() { }

  getCities()
  {
    return cities;
  }
  getCityById(cityId: number)
  {
    for(var i = 0; i<=cities.length; i++)
    {
      if(cities[i].id === cityId)
      {
        return cities[i];
      }
    }
  }
}
