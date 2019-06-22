import { CommonModule } from '@angular/common'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { ErrorHandler, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgxSpinnerModule } from 'ngx-spinner'
import { environment } from 'src/environments/environment'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import {
  ApiModule,
  BASE_PATH,
  Configuration,
  ConfigurationParameters,
  CustomErrorHandlerService,
  CustomInterceptorService
} from './shared';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment'

export function apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    // set configuration parameters here.
    withCredentials: false
  }
  return new Configuration(params)
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    ApiModule.forRoot(apiConfigFactory),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    { provide: BASE_PATH, useValue: environment.API_BASE_PATH },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptorService,
      // 必須：HTTP_INTERCEPTORSが配列であることを示す
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: CustomErrorHandlerService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
