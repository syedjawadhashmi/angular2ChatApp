import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './components/main/app.component.ts';
import { APP_ROUTER_PROVIDERS } from './routing/app.routes';

if (process.env.ENV === 'production') {
  enableProdMode();
}
bootstrap(AppComponent,  [
  APP_ROUTER_PROVIDERS
]).catch(err => console.error(err));;
