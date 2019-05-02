import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { NgxSpinnerService } from 'ngx-spinner'
import { Observable, of, throwError } from 'rxjs'
import { catchError, delay, finalize } from 'rxjs/operators'

import { DUMMY_USER, DUMMY_USERS } from './../mock/user'

@Injectable({
  providedIn: 'root'
})
export class CustomInterceptorService implements HttpInterceptor {
  constructor(private router: Router, private spinner: NgxSpinnerService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.reportProgress) {
      this.spinner.show()
    }
    // APIがないため、MOCKに差し替え
    return (httpMock(req) || next.handle(req)).pipe(
      delay(new Date(Date.now() + 1000)), // 意図的に遅延
      catchError((res: HttpErrorResponse) => {
        switch (res.status) {
          case 401:
            this.router.navigate(['/login'])
            break
          default:
            console.log(res)
        }
        return throwError(res)
      }),
      finalize(() => {
        if (req.reportProgress) {
          this.spinner.hide()
        }
      })
    )
  }
}

export function httpMock(
  request: HttpRequest<any>
): Observable<HttpEvent<any>> | false {
  let result: Observable<HttpEvent<any>> | false = false

  const url = request.url
  const method = request.method

  if (!url.includes('login') && method !== 'GET') {
    // tslint:disable-next-line: deprecation
    result = of(
      new HttpResponse({
        status: 200,
        body: {}
      })
    )
  }
  if (url.includes('login') && method === 'POST') {
    // tslint:disable-next-line: deprecation
    result = of(
      new HttpResponse({
        status: 200,
        body: DUMMY_USER
      })
    )
  }
  if (url.includes('user') && method === 'GET') {
    // tslint:disable-next-line: deprecation
    result = of(
      new HttpResponse({
        status: 200,
        body: DUMMY_USERS
      })
    )
  }

  return result
}
