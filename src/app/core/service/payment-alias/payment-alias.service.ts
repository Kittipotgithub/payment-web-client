import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ApiService } from '../../api.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentAliasService {

  constructor(private apiService: ApiService) { }

  create(payload): Observable<any> {
    return this.apiService.post('/paymentAlias/save', payload).pipe(
      map(data => {
        console.log(data);
        return data;
      }),
      take(1)
    );
  }
  update(payload, id): Observable<any> {
    return this.apiService.put('/paymentAlias/update/' + id, payload).pipe(
      map(data => {
        console.log(data);
        return data;
      }),
      take(1)
    );
  }
  search(date, name): Observable<any> {
    return this.apiService.get('/paymentAlias/search/' + date + '/' + name).pipe(
      map(data => {
        console.log(data);
        return data;
      }),
      take(1)
    );
  }
}
