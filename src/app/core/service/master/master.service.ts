import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, take, catchError } from 'rxjs/operators';
import { ApiService } from '../../api.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private httpClient: HttpClient) {}
  // รหัส Company
  findCompanyCodeWithParam(textSearch): Promise<any> {
    let url = '';
    if (textSearch === '') {
      url = '/master/companyCode/getAll';
    } else {
      url = '/master/companyCode/getByValue/' + textSearch;
    }
    return this.httpClient
      .get(`${environment.apiUrl}` + url)
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
  // รหัส AreaCode
  findAreaCodeWithParam(textSearch): Promise<any> {
    let url = '';
    if (textSearch === '') {
      url = '/master/areaCode/getAll';
    } else {
      url = '/master/areaCode/getByValue/' + textSearch;
    }

    return this.httpClient
      .get(`${environment.apiUrl}` + url)
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
  // รหัส PaymentCenter
  findPaymentCenterCodeWithParam(textSearch): Promise<any> {
    let url = '';
    if (textSearch === '') {
      url = '/master/paymentCenter/getAll';
    } else {
      url = '/master/paymentCenter/getByValue/' + textSearch;
    }
    return this.httpClient
      .get(`${environment.apiUrl}` + url)
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
  // รหัส Vendor
  findVendorCodeWithParam(textSearch): Promise<any> {
    let url = '';
    if (textSearch === '') {
      url = '/master/vendor/getAll';
    } else {
      url = '/master/vendor/getByValue/' + textSearch;
    }
    return this.httpClient
      .get(`${environment.apiUrl}` + url)
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
