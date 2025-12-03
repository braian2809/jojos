import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'nosotros',
    loadComponent: () =>
      import('./pages/about/about').then(m => m.About)
  },
  {
    path: 'productos',
    loadComponent: () =>
      import('./pages/products/products').then(m => m.Products)
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./pages/contact/contact').then(m => m.Contact)
  },
  { path: '**', redirectTo: '' }
];
