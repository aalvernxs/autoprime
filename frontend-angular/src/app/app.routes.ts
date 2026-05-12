import { Routes } from '@angular/router';
import { HomeComponent} from './pages/home/home';
import { CarDetailComponent } from './pages/car-detail/car-detail';
import { Login} from './pages/login/login';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'carro/:id', component: CarDetailComponent},
  { path: 'login', component: Login },
  { path: '**', redirectTo: '' }
];