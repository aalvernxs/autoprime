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
    path: 'admin',
    loadComponent: () => import('./pages/admin/admin-panel/admin-panel').then(m => m.AdminPanelComponent)
  },
  {
    path: 'admin/cadastro',
    loadComponent: () => import('./pages/admin/car-form/car-form').then(m => m.CarFormComponent)
  },
  {
    path: 'admin/editar/:id',
    loadComponent: () => import('./pages/admin/car-list/car-list').then(m => m.CarEditComponent)
  },
   {
    path: 'admin/dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.DashboardComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];