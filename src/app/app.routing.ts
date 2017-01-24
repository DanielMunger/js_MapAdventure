import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { DestinationComponent } from './destination/destination.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'destination',
    component: DestinationComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
