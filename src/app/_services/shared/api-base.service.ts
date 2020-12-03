import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ApiBaseService {

  constructor(private http: HttpClient) { }

  private headers(identityToken: boolean = true, extraHeaders?: [any]): HttpHeaders {

    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');

    // if (identityToken) {
    //   const identityTokenString = this.identityService.getToken();
    //   headers = headers.append('IdentityToken', identityTokenString);
    // }

    if (extraHeaders) {
      _.forEach(extraHeaders, header => {
        if (header.name && header.value) {
          headers.append(header.name, header.value);
        }
      });
    }

    return headers;
  }

  public get(url: string, identityToken?: boolean, extraHeaders?: [any]) {

    // API call logging
    console.log('get request: ' + url);

    let headers: HttpHeaders;

    headers = this.headers(identityToken, extraHeaders);

    return this.http.get(url, {headers: headers, observe: 'response'})
      .pipe(
        map(
          (response: HttpResponse<any>) => {
            //return this.handleResponse(response);
            return response.body;
          }
        ),
        catchError(error => {
          // const response = this.catSamErrorAdaptor.adapt(error);
          // this.errorHandler.handleError(response);
          return throwError(error);
        })
      );
  }

  public post(url: string, body: any, identityToken?: boolean, extraHeaders?: [any]) {

    // API call logging
    console.log('post request: ' + url);

    let headers: any;

    headers = this.headers(identityToken, extraHeaders);

    return this.http.post(url, JSON.stringify(body), {headers: headers, observe: 'response'})
    .pipe(
      map(
        (response: HttpResponse<any>) => {
          // return this.handleResponse(response);
          return response.body
        }
      ),
      catchError(error => {
        // const response = this.catSamErrorAdaptor.adapt(error);
        // this.errorHandler.handleError(response);
        return throwError(error);
      })
    );
  }

//   public handleResponse(res: HttpResponse<any>) {

//     // Refresh Identity Token
//     if (res.headers.has('IdentityToken')) {
//       this.identityService.setToken(res.headers.get('IdentityToken'));
//     }

//     // Get body
//     if (res.status !== 200) {
//       return this.errorHandler.handleError(this.catSamErrorAdaptor.adapt(res.body));
//     } else {
//       if (res.body['Custom'] !== undefined) {
//         return this.catSamCoreGenericResponseAdaptor.adapt(res.body).Custom;
//       } else {
//         return res.body;
//       }
//     }
//  }
}
