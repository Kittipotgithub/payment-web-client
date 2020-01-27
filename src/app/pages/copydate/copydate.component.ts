import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface PeriodicElement {
  pay: string;
  code: string;
  nextpay: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { code: '07.11.2019', pay: 'H0001', nextpay: 'ผ่านรายการการชำระเงินแล้ว' },
  { code: '07.11.2019', pay: 'H0002', nextpay: 'ผ่านรายการการชำระเงินแล้ว' },
  { code: '29.10.2019', pay: 'Z-DI1', nextpay: 'ผ่านรายการการชำระเงินแล้ว' },
  { code: '29.10.2019', pay: 'Z-DI2', nextpay: 'ผ่านรายการการชำระเงินแล้ว' },
  { code: '29.10.2019', pay: 'Z-IN1', nextpay: 'ผ่านรายการการชำระเงินแล้ว' },
  { code: '10.10.2019', pay: 'Z-DI1', nextpay: 'ผ่านรายการการชำระเงินแล้ว' },
  { code: '10.10.2019', pay: 'Z-DI1', nextpay: 'ผ่านรายการการชำระเงินแล้ว' },
  { code: '10.10.2019', pay: 'Z-DI1', nextpay: 'ผ่านรายการการชำระเงินแล้ว' },
  { code: '10.10.2019', pay: 'Z-DI1', nextpay: 'ผ่านรายการการชำระเงินแล้ว' },
  { code: '10.10.2019', pay: 'Z-DI1', nextpay: 'ผ่านรายการการชำระเงินแล้ว' },
];

@Component({
  selector: 'app-copydate',
  templateUrl: './copydate.component.html',
  styleUrls: ['./copydate.component.scss']
})
export class CopydateComponent implements OnInit {
  displayedColumns: string[] = ['code', 'pay', 'nextpay'];
  dataSource = ELEMENT_DATA;
  
  constructor(
    private dialogRef: MatDialogRef<CopydateComponent>
  ) { }
  
  closeDialog(): void {
    const dialogRef = this.dialogRef.close();

  }

  ngOnInit() {
  }

}
