import { Site } from './site.model';

export class Destination {
  constructor(public name:string, public lat: number, public lng: number, public sites:Site[], public id:number){};
}
