import { Route } from '@angular/router';

import { FrontendFeatureHomeComponent } from 'frontend/feature/home';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: FrontendFeatureHomeComponent,
  },
];
