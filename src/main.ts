import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app/app.module'
import { environment } from './environments/environment'

if (environment.production) {
  enableProdMode()
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(moduleRef => {
    // const applicationRef = moduleRef.injector.get(ApplicationRef)
    // const appComponent = applicationRef.components[0]
    // enableDebugTools(appComponent)
    // ng.profiler.timeChangeDetection({record: true})
  })

  .catch(err => console.error(err))
