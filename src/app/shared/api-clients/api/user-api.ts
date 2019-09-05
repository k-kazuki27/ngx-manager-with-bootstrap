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

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

import { UserDTO } from '../model/user-dto';
import { UserResultDTO } from '../model/user-result-dto';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class UserApi {

    protected basePath = 'http://localhost';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {

        if (configuration) {
            this.configuration = configuration;
            this.configuration.basePath = configuration.basePath || basePath || this.basePath;

        } else {
            this.configuration.basePath = basePath || this.basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }



    /**
     * Create User
     * @param userDTO List of user object
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createUser(userDTO: UserDTO, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public createUser(userDTO: UserDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public createUser(userDTO: UserDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public createUser(userDTO: UserDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (userDTO === null || userDTO === undefined) {
            throw new Error('Required parameter userDTO was null or undefined when calling createUser.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.configuration.basePath}/user`,
            userDTO,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Edit User
     * @param userDTO List of user object
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public editUser(userDTO: UserDTO, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public editUser(userDTO: UserDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public editUser(userDTO: UserDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public editUser(userDTO: UserDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (userDTO === null || userDTO === undefined) {
            throw new Error('Required parameter userDTO was null or undefined when calling editUser.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<any>(`${this.configuration.basePath}/user`,
            userDTO,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * find users
     * @param itemsPerPage 取得件数
     * @param pageNo ページ番号
     * @param userId 
     * @param lastName 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findUsers(itemsPerPage?: number, pageNo?: number, userId?: string, lastName?: string, observe?: 'body', reportProgress?: boolean): Observable<UserResultDTO>;
    public findUsers(itemsPerPage?: number, pageNo?: number, userId?: string, lastName?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserResultDTO>>;
    public findUsers(itemsPerPage?: number, pageNo?: number, userId?: string, lastName?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserResultDTO>>;
    public findUsers(itemsPerPage?: number, pageNo?: number, userId?: string, lastName?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (itemsPerPage !== undefined && itemsPerPage !== null) {
            queryParameters = queryParameters.set('itemsPerPage', <any>itemsPerPage);
        }
        if (pageNo !== undefined && pageNo !== null) {
            queryParameters = queryParameters.set('pageNo', <any>pageNo);
        }
        if (userId !== undefined && userId !== null) {
            queryParameters = queryParameters.set('userId', <any>userId);
        }
        if (lastName !== undefined && lastName !== null) {
            queryParameters = queryParameters.set('lastName', <any>lastName);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json:'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<UserResultDTO>(`${this.configuration.basePath}/user`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * find user
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getUser(id: number, observe?: 'body', reportProgress?: boolean): Observable<UserDTO>;
    public getUser(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserDTO>>;
    public getUser(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserDTO>>;
    public getUser(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getUser.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json:'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<UserDTO>(`${this.configuration.basePath}/user/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Remove User
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public removeUser(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public removeUser(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public removeUser(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public removeUser(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling removeUser.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.delete<any>(`${this.configuration.basePath}/user/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
