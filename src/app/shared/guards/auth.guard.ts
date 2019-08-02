import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { Observable } from 'rxjs'

import { StorageService } from '../services'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private storageService: StorageService) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.storageService.isAuthenticated()) {
      return true
    }

    this.router.navigate(['/auth/login'])
    return false
  }
}
