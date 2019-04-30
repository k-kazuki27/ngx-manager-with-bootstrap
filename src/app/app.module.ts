import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
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
  ConfigurationParameters
} from './shared'

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
    ApiModule.forRoot(apiConfigFactory)
  ],
  providers: [{ provide: BASE_PATH, useValue: environment.API_BASE_PATH }],
  bootstrap: [AppComponent]
})
export class AppModule {}
