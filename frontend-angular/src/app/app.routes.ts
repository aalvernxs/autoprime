import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard';

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
    canActivate: [AuthGuard],
    loadComponent: () => import('./pages/admin/admin-panel/admin-panel').then(m => m.AdminPanelComponent)
  },
  {
    path: 'admin/cadastro',
    canActivate: [AuthGuard],
    loadComponent: () => import('./pages/admin/car-form/car-form').then(m => m.CarFormComponent)
  },
  {
  path: 'admin/editar/:id',
  canActivate: [AuthGuard],
  loadComponent: () => import('./pages/admin/car-edit/car-edit').then(m => m.CarEditComponent)
},
  {
    path: 'admin/dashboard',
    canActivate: [AuthGuard],
    loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.DashboardComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];