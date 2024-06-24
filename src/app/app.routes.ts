import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AttractionsComponent } from './pages/attractions/attractions.component';
import { DistrictsComponent } from './pages/districts/districts.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthComponent } from './pages/auth/auth.component';

export const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'home', component: HomeComponent },
  { path: 'attractions/:id', component: AttractionsComponent },
  { path: 'districts', component: DistrictsComponent },
];
