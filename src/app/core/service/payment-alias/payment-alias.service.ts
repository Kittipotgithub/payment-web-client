import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map, take, catchError } from 'rxjs/operators';
import { ApiService } from '../../api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PaymentAliasService {
  constructor(private httpClient: HttpClient) {}

  create(payload): Observable<any> {
    return this.httpClient.post('/paymentAlias/save', payload).pipe(
      map(data => {
        console.log(data);
        return data;
      }),
      take(1)
    );
  }
  update(payload, id): Observable<any> {
    return this.httpClient.put('/paymentAlias/update/' + id, payload).pipe(
      map(data => {
        console.log(data);
        return data;
      }),
      take(1)
    );
  }
  search(date, name): Promise<any> {
    return this.httpClient
      .get('/paymentAlias/search/' + date + '/' + name)
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
