import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('frontend/feature/home').then((m) => m.HomeComponent),
  },
  {
    path: 'thumbnail',
    loadComponent: () =>
      import('frontend/feature/thumbnail').then(
        (m) => m.ThumbnailViewComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
