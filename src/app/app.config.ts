import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);

import { provideNzI18n, en_US } from 'ng-zorro-antd/i18n';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideNzI18n(en_US), importProvidersFrom(NoopAnimationsModule)],
};
