import { Destination } from './destination.model';
import { Site } from './site.model';
export var cities: Destination[] = [
  new Destination("Denver", 39.7392, -104.9903,[new Site("Denver Museam of Nature and Science", 39.7478, -104.9436, "http://www.criswellphotography.com/wp-content/uploads/2013/06/6-2013-Denver-Science-Center1.jpg"), new Site("Coors Field", 39.7559, -104.9941, "https://denverwater.files.wordpress.com/2016/03/coorsfield.jpg")], 0),
  new Destination("Portland", 45.5231, -122.6765, [new Site("Japanese Gardens", 45.5188, -122.7108, "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSGTdfngc2FDMWDXO4D3fGcYqvu4Oi0zduyA6EfKkKqzIengPbE"), new Site("My Father's Place", 45.5193, -122.6612, "https://static1.squarespace.com/static/5748bb1d7da24ffddd03399d/5748cdbee32140af98df63b0/5748cdbfb09f953f296eaa95/1464389056668/2deb4951-9a36-4605-9da4-1e2e1ff53d50.jpg?format=750w")], 1),
  new Destination("Moscow", 55.7558, 37.6173, [new Site("Kremlin", 55.7531, 37.6172, "http://www.joemygod.com/wp-content/uploads/2016/12/Kremlin.jpg"), new Site("Bolshoi Theater", 55.7529, 37.6154, "http://www.jackdevant.com/wp-content/uploads/2014/07/bolshoi-theatre-moscow-101.jpg")], 2),
  new Destination("San Francisco", 37.7749, -122.4194, [new Site("La Taqueria", 37.7509, -122.4183, "https://www.zagat.com/proxy/v1.4?m=image&a=resize&url=http%3A//storage.googleapis.com/zgt-photos/0x808f7e46d50136ad_0x21fce96ce541e475/ecfe680e5057daecae4f791ff07951d2.jpg&width=497&height=286&key=abbc09b7c840c10937a4db331422c98b"), new Site("AT&T Park", 37.7798, -122.3932, "http://www.ballparksofbaseball.com/wp-content/uploads/2016/03/attv5.jpg")], 3)

];
