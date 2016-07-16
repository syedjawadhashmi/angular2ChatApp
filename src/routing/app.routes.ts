import { provideRouter, RouterConfig }  from '@angular/router';
import { Page1Component } from '../components/page1/page1.component';
import { Page2Component } from '../components/page2/page2.component';



export const routes: RouterConfig = [
  {
    path: 'page1',
    component: Page1Component
  },
  {
    path: 'page2',
    component: Page2Component
  },
  { path: '',
    component: Page1Component
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];



