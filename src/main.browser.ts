import './polyfills.browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

const platformRef = platformBrowserDynamic();
platformRef.bootstrapModule(AppModule)
