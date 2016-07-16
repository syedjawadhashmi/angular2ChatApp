import {
    AuthMethods,
    defaultFirebase,
    FIREBASE_PROVIDERS,
    firebaseAuthConfig
} from 'angularfire2';


export const FIREBASE_APP_PROVIDERS: any[] = [
    FIREBASE_PROVIDERS,
    defaultFirebase({
        apiKey: 'AIzaSyBbsvBdvLSyUJ-krE9Jn9zQOJzx9lVf3hg',
        authDomain: 'angular2chatapp-49b70.firebaseapp.com',
        databaseURL: 'https://angular2chatapp-49b70.firebaseio.com',
        storageBucket: 'angular2chatapp-49b70.appspot.com'
    }),
    firebaseAuthConfig({
        method: AuthMethods.Popup,
        remember: 'default'
    })
];
