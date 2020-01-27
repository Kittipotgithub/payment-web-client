import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ApiService } from '../../api.service';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  constructor(private apiService: ApiService) { }
    // รหัส Company
    findCompanyCodeWithParam(textSearch): Observable<any> {
      let url = '';
      if (textSearch === '') {
        url = '/master/companyCode/getAll'
      } else {
        url = '/master/companyCode/getByValue/' + textSearch;
      }
      return this.apiService.get(url).pipe(
        map(data => {
          return data;
        })
      );
    }
      // รหัส AreaCode
  findAreaCodeWithParam(textSearch): Observable<any> {
    let url = '';
    if (textSearch === '') {
      url = '/master/areaCode/getAll'
    } else {
      url = '/master/areaCode/getByValue/' + textSearch;
    }
    return this.apiService.get(url).pipe(
      map(data => {
        return data;
      })
    );
  }
    // รหัส PaymentCenter
    findPaymentCenterCodeWithParam(textSearch): Observable<any> {
      let url = '';
      if (textSearch === '') {
        url = '/master/paymentCenter/getAll'
      } else {
        url = '/master/paymentCenter/getByValue/' + textSearch;
      }
      return this.apiService.get(url).pipe(
        map(data => {
          return data;
        })
      );
    }
  // รหัส Vendor
  findVendorCodeWithParam(textSearch): Observable<any> {
    let url = '';
    if (textSearch === '') {
      url = '/master/vendor/getAll'
    } else {
      url = '/master/vendor/getByValue/' + textSearch;
    }
    return this.apiService.get(url).pipe(
      map(data => {
        return data;
      })
    );
  }

}