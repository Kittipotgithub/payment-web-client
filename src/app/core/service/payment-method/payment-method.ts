import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map, take, catchError } from 'rxjs/operators';
import { ApiService } from '../../api.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PaymentMethodService {
  constructor(private httpClient: HttpClient) {}


  search(): Promise<any> {
    return this.httpClient
      .get(`${environment.apiUrl}` + '/paymentMethod/getAll')
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
