import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ApiService } from '../../api.service';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  constructor(private apiService: ApiService) { }
  // รหัสบัญชีแยกประเภท type Account code
  findTypeAccountWithParam(textSearch): Observable<any> {
    return this.apiService.get('/master/typeAccount/getByValue/' + textSearch).pipe(
      map(data => {
        return data;
      })
    );
  }
}