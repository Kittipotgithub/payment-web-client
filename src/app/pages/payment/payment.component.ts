import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface Food {
  value: string;
  viewValue: string;
}

export interface Food1 {
  value1: string;
  viewValue1: string;
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  foods: Food[] = [
    {value: '1', viewValue: 'จ่ายตรงผู้ขาย เงินงบประมาณ'},
    {value: '3', viewValue: 'จ่ายตรงผู้ขายเงินนอกงบประมาณ'},
    {value: 'I', viewValue: 'จ่ายตรงผู้ขายที่เป็นสรก. ในงบ'},
    {value: 'J', viewValue: 'จ่ายตรงผู้ขายที่เป็นสรก. นอกงบ'},
    {value: '6', viewValue: 'จ่ายสำรองค.กเงินกู้ตปท. - Direct'}
  ];

  foods1: Food1[] = [
    {value1: '0', viewValue1: 'จ่ายตรงจากแหล่งเงินกู้ นอก TR1'},
    {value1: '2', viewValue1: 'จ่ายเงินในงบให้ Agency-Indirect'},
    {value1: '4', viewValue1: 'จ่ายเงินนอกงบให้ Agency-Indirect'},
    {value1: '5', viewValue1: 'จ่ายเงินนอกงปม. นอก TR1'},
    {value1: '7', viewValue1: 'จ่ายสำรองค.ก.เงินกู้ตปท. -Indir'}
  ];

  constructor(
    private dialogRef: MatDialogRef<PaymentComponent>
  ) { }

  closeDialog(): void {
    const dialogRef = this.dialogRef.close();

  }

  ngOnInit() {
  }

}
