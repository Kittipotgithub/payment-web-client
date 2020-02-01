import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map, take, catchError } from 'rxjs/operators';
import { ApiService } from '../../api.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PaymentAliasService {
  constructor(private httpClient: HttpClient) {}

  create(payload): Promise<any> {
    return this.httpClient
      .post(`${environment.apiUrl}` + '/paymentAlias/save', payload)
      .pipe(
        map(data => {
          console.log(data);
          return data;
        }),
        catchError(err => {
          console.log(err);
          return of(err);
        }),
        take(1)
      )
      .toPromise();
  }
  update(payload, id): Promise<any> {
    return this.httpClient
      .put(`${environment.apiUrl}` + '/paymentAlias/update/' + id, payload)
      .pipe(
        map(data => {
          console.log(data);
          return data;
        }),
        catchError(err => {
          console.log(err);
          return of(err);
        }),
        take(1)
      )
      .toPromise();
  }
  search(date, name): Promise<any> {
    return this.httpClient
      .get(`${environment.apiUrl}` + '/paymentAlias/search/' + date + '/' + name)
      .pipe(
        map(data => {
          console.log(data);
          return data;
        }),
        catchError(err => {
          console.log(err);
          return of(err);
        }),
        take(1)
      )
      .toPromise();
  }
  searchAllParameter(): Promise<any> {
    return this.httpClient
      .get(`${environment.apiUrl}` + '/paymentAlias/getAll')
      .pipe(
        map(data => {
          console.log(data);
          return data;
        }),
        catchError(err => {
          console.log(err);
          return of(err);
        }),
        take(1)
      )
      .toPromise();
  }
  searchByValue(key): Promise<any> {
    return this.httpClient
      .get(`${environment.apiUrl}` + '/paymentAlias/getByValue/' + key)
      .pipe(
        map(data => {
          console.log(data);
          return data;
        }),
        catchError(err => {
          console.log(err);
          return of(err);
        }),
        take(1)
      )
      .toPromise();
  }
}
