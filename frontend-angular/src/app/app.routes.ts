import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent)
  },
  {
    path: 'carro/:id',
    loadComponent: () => import('./pages/car-detail/car-detail').then(m => m.CarDetailComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then(m => m.Login)
  },
  {
    path: '**',
    redirectTo: ''
  }
];