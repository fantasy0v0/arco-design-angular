import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations'
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { ArcoThemeModule } from 'arco-design-angular/theme';
import { routes } from './app.routes'

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      ArcoThemeModule
    ),
    provideHttpClient(),
    provideAnimations(),
    provideRouter(routes)
  ]
};
