import { ErrorHandler, Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'

import { ApplicationError } from './../errors/application-error'

@Injectable({
  providedIn: 'root'
})
export class CustomErrorHandlerService implements ErrorHandler {
  constructor() {}

  handleError(error: any): void {
    if (error instanceof ApplicationError) {
      console.error(error)
      if (!environment.production) {
        alert(error.message)
      }
    } else {
      console.warn(error)
    }
    if (/Loading chunk [\d]+ failed/.test(error.message)) {
      location.reload()
    }
  }
}
