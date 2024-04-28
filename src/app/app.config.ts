import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';

import { DataService } from './core/services/data.service';
import { AuthorityService } from './core/services/authority.service';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptorsFromDi(),
    ),
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: DataService, useClass: DataService },
    { provide: AuthorityService, useClass: AuthorityService },
  ]
};
