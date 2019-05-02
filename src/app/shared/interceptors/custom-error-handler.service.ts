import { ErrorHandler, Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class CustomErrorHandlerService implements ErrorHandler {
  constructor() {}

  handleError(error: any): void {
    console.warn(error)
    if (/Loading chunk [\d]+ failed/.test(error.message)) {
      location.reload()
    }
  }
}
