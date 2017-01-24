import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { DestinationComponent } from './destination/destination.component';
import { ApiKey } from './apikey';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DestinationComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBIMMcstzYB9KjqISrLKpyu4343JadAhbQ"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
