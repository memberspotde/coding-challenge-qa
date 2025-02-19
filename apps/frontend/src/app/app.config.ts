import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { BACKEND_URL } from 'frontend/shared/common';
import { environment } from '../environment/environment';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(),
    {
      provide: BACKEND_URL,
      useValue: environment.backendUrl,
    },
    provideAnimationsAsync(),
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {},
    },
  ],
};
