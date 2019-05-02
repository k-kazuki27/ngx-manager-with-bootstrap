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

import { DUMMY_USERS } from './../mock/user'

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
    console.log('httpMock', req.reportProgress)
    const url = req.url
    const method = req.method
    return (httpMock(url, method, req) || next.handle(req)).pipe(
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
  url: string,
  method: string,
  request: HttpRequest<any>
): Observable<HttpEvent<any>> | false {
  let result: Observable<HttpEvent<any>> | false = false

  if (method === 'OPTIONS') {
    // tslint:disable-next-line: deprecation
    result = of(
      new HttpResponse({
        status: 200,
        body: {}
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
