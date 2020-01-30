import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ApiService } from '../../api.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private apiService: ApiService) { }

  createParamter(payload): Observable<any> {
    return this.apiService.post('/payment/create/parameter', payload).pipe(
      map(data => {
        console.log(data);
        return data;
      })
    );
  }
}
