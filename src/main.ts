import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

document.getElementsByTagName('body')[0].style.setProperty('--vh', `${window.innerHeight}px`);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
