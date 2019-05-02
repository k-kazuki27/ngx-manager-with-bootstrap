import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'

const AUTH = 'ngx-manager-with-bootstrap'

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private authKey = AUTH + '-' + environment.ENV
  constructor() {}

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem(this.authKey)
  }
  setAuth(): void {
    sessionStorage.setItem(this.authKey, 'true')
  }
  removeAuth(): void {
    sessionStorage.removeItem(this.authKey)
  }
}
