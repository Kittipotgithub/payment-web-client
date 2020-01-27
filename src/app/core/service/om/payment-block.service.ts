import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ApiService } from '../../api.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentBlockService {

  constructor(private apiService: ApiService) { }
  
  search(payload): Observable<any> {
    return this.apiService.post('/payment/search', payload).pipe(
      map(data => {
        console.log(data);
        return data;
      })
    );
  }
  searchDetail(payload): Observable<any> {
    return this.apiService.get('/payment/searchDetail/'+ payload).pipe(
      map(data => {
        console.log(data);
        return data;
      })
    );
  }
  changePaymentBlock(payload): Observable<any> {
    return this.apiService.post('/payment/changePaymentBlock', payload).pipe(
      map(data => {
        console.log(data);
        return data;
      })
    );
  }

}