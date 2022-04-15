import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Gatekeeper } from 'gatekeeper-client-sdk';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

Gatekeeper.initialize('447995a6-7be6-46b8-9600-d968f7c81824');

platformBrowserDynamic().bootstrapModule(AppModule);
