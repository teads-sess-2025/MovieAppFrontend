import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';


// export const BACKEND_BASE_URL = 'https://movieapp.greenisland-0015b907.westeurope.azurecontainerapps.io';
export const BACKEND_BASE_URL = 'http://localhost:8080';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    provideRouter(routes, withComponentInputBinding())
  ]
};
