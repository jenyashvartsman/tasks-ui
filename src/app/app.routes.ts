import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'tasks',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/task/task').then((m) => m.Task),
      },
      {
        path: ':id',
        loadComponent: () => import('./pages/task/task').then((m) => m.Task),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
