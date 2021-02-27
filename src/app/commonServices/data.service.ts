import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { EncryptionService } from './encryption.service';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(
    private readonly encryptionService: EncryptionService,
    private http: HttpClient) {
  }

  ipAddress: any;
  message: string[];
  conditionalHttpOptions = {};
  private prepareOptions(
    isContentTypeEnabled: boolean = true,
    params: any = null): any {
    let headers = new HttpHeaders();
    headers = headers
      .set('Accept', 'application/json')
    if (isContentTypeEnabled) {
      headers = headers.set('Content-Type', 'application/json');
    }
    if (params != null) {
      headers = headers.set(
        'Payload',
        this.encryptionService.encryptText(JSON.stringify(params))
      );
    }
    return { headers };

  }

  GetAll<T>(uri: string) {
    const options = this.prepareOptions();
    return this.http.get(`${uri}`, options).pipe(
      catchError(err => {
        return throwError(err);
      }),
      map((response) => {
        return response;
      })
    );
  }

  GetAllwithHeaders<T>(uri: string, params: any) {
    const options = this.prepareOptions(true, params);
    return this.http.get(`${uri}`, options).pipe(
      catchError(err => {
        return throwError(err);
      }),
      map((response) => {
        return response;
      })
    );
  }

  Get<T>(uri: string, ...params: any[]) {
    const options = this.prepareOptions();
    const encryptedParamsString: string = params
      .map(param =>
        encodeURIComponent(this.encryptionService.encryptText(param.toString()))
      )
      .join('/')
      .replace(/[%]/g, '!');
    return this.http.get(`${uri}/${encryptedParamsString}`, options).pipe(
      catchError(err => {
        return throwError(err);
      }),
      map((response) => {
        return response;
      })
    );
  }

  PostWithHeaders<T>(uri: string, params: any, httpOptions?: any) {
    const options = this.prepareOptions();
    if (httpOptions && httpOptions.responseType) {
      options.responseType = httpOptions.responseType;
    }
    return this.http
      .post(
        uri,
        this.encryptionService.encryptText(JSON.stringify(params)),
        options
      )
      .pipe(
        catchError(err => {
          return throwError(err);
        }),
        map((response) => {
          return response;
        })
      );
  }

  Post<T>(uri: string, params: any) {
    const options = this.prepareOptions();
    return this.http
      .post(
        uri,
        this.encryptionService.encryptText(JSON.stringify(params)),
        options
      )
      .pipe(
        catchError(err => {
          return throwError(err);
        }),
        map((response) => {
          return response;
        })
      );
  }

  PostForm<T>(uri: string, params: any) {
    const options = this.prepareOptions(false);
    return this.http.post(uri, params, options).pipe(
      catchError(err => {
        return throwError(err);
      }),
      map((response) => {
        return response;
      })
    );
  }

  Put<T>(uri: string, params: any) {
    const options = this.prepareOptions();
    return this.http
      .put(
        uri,
        this.encryptionService.encryptText(JSON.stringify(params)),
        options
      )
      .pipe(
        catchError(err => {
          return throwError(err);
        }),
        map((response) => {
          return response;
        })
      );
  }

  PutForm<T>(uri: string, params: any) {
    const options = this.prepareOptions(false);
    return this.http
      .put(
        uri,
        params,
        options
      )
      .pipe(
        catchError(err => {
          return throwError(err);
        }),
        map((response) => {
          return response;
        })
      );
  }

  Patch<T>(uri: string, params: any) {
    const options = this.prepareOptions();
    return this.http
      .patch(
        uri,
        this.encryptionService.encryptText(JSON.stringify(params)),
        options
      )
      .pipe(
        catchError(err => {
          return throwError(err);
        }),
        map((response) => {
          return response;
        })
      );
  }

  Delete<T>(uri: string, params: any) {
    const options = this.prepareOptions();
    const encryptedUrl = encodeURIComponent(
      this.encryptionService.encryptText(params.toString())
    ).replace(/[%]/g, '!');
    return this.http.delete(`${uri}/${encryptedUrl}`, options).pipe(
      catchError(err => {
        return throwError(err);
      }),
      map((response) => {
        return response;
      })
    );
  }
}