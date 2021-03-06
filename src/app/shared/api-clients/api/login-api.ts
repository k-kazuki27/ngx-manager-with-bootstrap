/**
 * Mock API
 * Mock API
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core'
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
  HttpEvent,
  HttpParameterCodec
} from '@angular/common/http'
import { CustomHttpParameterCodec } from '../encoder'
import { Observable } from 'rxjs'

import { LoginDTO } from '../model/login-dto'
import { UserDTO } from '../model/user-dto'

import { BASE_PATH, COLLECTION_FORMATS } from '../variables'
import { Configuration } from '../configuration'

@Injectable({
  providedIn: 'root'
})
export class LoginApi {
  protected basePath = 'http://localhost'
  public defaultHeaders = new HttpHeaders()
  public configuration = new Configuration()
  public encoder: HttpParameterCodec

  constructor(
    protected httpClient: HttpClient,
    @Optional() @Inject(BASE_PATH) basePath: string,
    @Optional() configuration: Configuration
  ) {
    if (configuration) {
      this.configuration = configuration
      this.configuration.basePath =
        configuration.basePath || basePath || this.basePath
    } else {
      this.configuration.basePath = basePath || this.basePath
    }
    this.encoder = this.configuration.encoder || new CustomHttpParameterCodec()
  }

  /**
   * Login
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getCurrentAuthenticatedUser(
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<UserDTO>
  public getCurrentAuthenticatedUser(
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<UserDTO>>
  public getCurrentAuthenticatedUser(
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<UserDTO>>
  public getCurrentAuthenticatedUser(
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    let headers = this.defaultHeaders

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json:']
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts)
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected)
    }

    return this.httpClient.get<UserDTO>(
      `${this.configuration.basePath}/login/user`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    )
  }

  /**
   * Login
   * @param loginDTO List of user object
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public login(
    loginDTO: LoginDTO,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<UserDTO>
  public login(
    loginDTO: LoginDTO,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<UserDTO>>
  public login(
    loginDTO: LoginDTO,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<UserDTO>>
  public login(
    loginDTO: LoginDTO,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (loginDTO === null || loginDTO === undefined) {
      throw new Error(
        'Required parameter loginDTO was null or undefined when calling login.'
      )
    }

    let headers = this.defaultHeaders

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json:']
    const httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts)
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected)
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json']
    const httpContentTypeSelected:
      | string
      | undefined = this.configuration.selectHeaderContentType(consumes)
    if (httpContentTypeSelected !== undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected)
    }

    return this.httpClient.post<UserDTO>(
      `${this.configuration.basePath}/login`,
      loginDTO,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    )
  }
}
