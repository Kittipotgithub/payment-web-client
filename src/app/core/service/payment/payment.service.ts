import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ApiService } from '../../api.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private apiService: ApiService) { }

  create(payload): Observable<any> {
    return this.apiService.post('/paymentAlias/save', payload).pipe(
      map(data => {
        console.log(data);
        return data;
      })
    );
  }
  update(payload): Observable<any> {
    return this.apiService.put('/paymentAlias/save', payload).pipe(
      map(data => {
        console.log(data);
        return data;
      })
    );
  }
}
