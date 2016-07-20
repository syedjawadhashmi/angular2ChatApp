import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './components/main/app.component.ts';
import { APP_ROUTER_PROVIDERS } from './routing/app.routes';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (process.env.ENV === 'production') {
  enableProdMode();
}
bootstrap(AppComponent,  [
  APP_ROUTER_PROVIDERS,
  FIREBASE_PROVIDERS,
  // Initialize Firebase app
  defaultFirebase({
    apiKey: 'AIzaSyBbsvBdvLSyUJ-krE9Jn9zQOJzx9lVf3hg',
    authDomain: 'angular2chatapp-49b70.firebaseapp.com',
    databaseURL: 'https://angular2chatapp-49b70.firebaseio.com',
    storageBucket: 'angular2chatapp-49b70.appspot.com'
  }),
]).catch(err => console.error(err));;
