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
    return this.apiService.post('/paymentBlock/search', payload).pipe(
      map(data => {
        console.log(data);
        return data;
      })
    );
  }
  searchDetail(companyCode, docNo, year): Observable<any> {
    return this.apiService.get('/paymentBlock/searchDetail/' + companyCode + '/' + docNo + '/' + year + '/').pipe(
      map(data => {
        console.log(data);
        return data;
      })
    );
  }
  changePaymentBlock(payload): Observable<any> {
    return this.apiService.post('/paymentBlock/changePaymentBlock', payload).pipe(
      map(data => {
        console.log(data);
        return data;
      })
    );
  }

}