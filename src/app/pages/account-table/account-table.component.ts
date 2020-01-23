import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface PeriodicElement {
  pay: number;
  code: string;
  nextpay: string;
  name: string;
  seller: string;
  code1: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { code: '0000242003' , pay: 50000 , nextpay: 'อ.เมือง จ.เชียงใหม่'
  , name:'ห้างหุ้นส่วนสามัญนิติบุคคล', seller: '1000002699' , code1: 1205 },
  { code: '0103508002' , pay: 10300 , nextpay: 'กรุงเทพฯ'
  , name:'ห้างหุ้นส่วนจำกัด สามประสาน', seller: '1000001860' , code1: 1205 },
  { code: '0103533033' , pay: 10260 , nextpay: 'กรุงเทพฯ'
  , name:'ห้างหุ้นส่วนจำกัด เอส.โอ.', seller: '1000009718' , code1: 1205 },
  { code: '0103539036' , pay: 12120 , nextpay: 'ปทุมธานี'
  , name:'ห้างหุ้นส่วนจำกัด สหรุ่ง', seller: '100007261' , code1: 1205 },
  { code: '0103547010' , pay: 10240 , nextpay: 'กรุงเทพฯ'
  , name:'ห้างหุ้นส่วนจำกัด เอฟยู', seller: '100020270' , code1: 1205 },
  { code: '0103553023' , pay: 10800 , nextpay: 'กรุงเทพฯ'
  , name:'ห้างหุ้นส่วนจำกัด มนัส', seller: '100083573' , code1: 1205 },
  
];

@Component({
  selector: 'app-account-table',
  templateUrl: './account-table.component.html',
  styleUrls: ['./account-table.component.scss']
})
export class AccountTableComponent implements OnInit {
  
  displayedColumns: string[] = ['code', 'pay', 'nextpay', 'name','seller','code1'];
  dataSource = ELEMENT_DATA;

  constructor(
    private dialogRef: MatDialogRef<AccountTableComponent>
  ) { }

  ngOnInit() {
  }

  closeDialog(): void {
    const dialogRef = this.dialogRef.close();

  }

}
