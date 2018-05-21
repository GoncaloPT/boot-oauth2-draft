import { platformBrowser } from '@angular/platform-browser';
import { ProdConfig } from './blocks/config/prod.config';
import { HealthyHabitsAppModule } from './app.module';

ProdConfig();

platformBrowser().bootstrapModule(HealthyHabitsAppModule)
.then((success) => console.log(`Application started`))
.catch((err) => console.error(err));
