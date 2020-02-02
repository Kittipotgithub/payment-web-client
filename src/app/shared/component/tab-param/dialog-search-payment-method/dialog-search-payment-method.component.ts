import { Component, OnInit, ViewChildren, ElementRef, QueryList, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';
import { PaymentMethodService } from 'src/app/core/service/payment-method/payment-method';

export interface DialogData {
  paymentMethod: string;
}
@Component({
  selector: 'app-dialog-search-payment-method',
  templateUrl: './dialog-search-payment-method.component.html',
  styleUrls: ['./dialog-search-payment-method.component.scss'],
})
export class DialogSearchPaymentMethodComponent implements OnInit {
  @ViewChildren('checkBoxPaymentMethod') checkBoxPaymentMethod: QueryList<ElementRef>;
  // @ViewChild(MatSort, { static: true }) sort: MatSort;

  paymentMethod = [];

  paymentSelected = '';
  dataSource = new MatTableDataSource([]);
  constructor(
    private dialogRef: MatDialogRef<DialogSearchPaymentMethodComponent>,
    private paymentMethodService: PaymentMethodService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    dialogRef.disableClose = false;
    dialogRef.backdropClick().subscribe(() => {
      console.log('close dialog');
      // ส่ง event param ตาม ปกติเลย
      this.dialogRef.close({ event: false });
    });
  }

  ngOnInit() {
    this.searchPayment().then(() => {
      if (this.data.paymentMethod) {
        this.paymentSelected = this.data.paymentMethod;
        this.checkPaymentMethodSelecet();
      }
    });

    // this.searchPayment();
  }

  checkPaymentMethodSelecet() {
    if (this.paymentSelected.length > 0 && this.paymentSelected) {
      const paymentAll = this.paymentSelected.split('');
      console.log(this.paymentMethod);
      paymentAll.forEach(payment => {
        console.log(paymentAll);
        this.paymentMethod.forEach(item => {
          if (item.valueCode === payment) {
            item.selected = true;
          }
        });
      });
    }
  }

  async searchPayment() {
    await this.paymentMethodService.search().then(value => {
      console.log('print', value.data);
      this.paymentMethod = value.data;
    });
  }
  closeDialog(): void {
    this.dialogRef.close({
      event: false,
    });
  }
  confirmSelect() {
    this.paymentSelected = '';
    this.checkBoxPaymentMethod.toArray().forEach(item => {
      const data = item as any;
      if (data._checked) {
        this.paymentSelected += data.value;
      }
    });
    this.dialogRef.close({
      event: true,
      value: this.paymentSelected,
    });
  }
}
