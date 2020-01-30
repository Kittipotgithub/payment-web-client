import { MasterService } from './../../../core/service/master/master.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface PeriodicElement {
  pay: string;
  code: string;
  nextpay: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   { code: '07.11.2019', pay: 'H0001', nextpay: 'ผ่านรายการการชำระเงินแล้ว' },
//   { code: '07.11.2019', pay: 'H0002', nextpay: 'ผ่านรายการการชำระเงินแล้ว' },
//   { code: '29.10.2019', pay: 'Z-DI1', nextpay: 'ผ่านรายการการชำระเงินแล้ว' },
//   { code: '29.10.2019', pay: 'Z-DI2', nextpay: 'ผ่านรายการการชำระเงินแล้ว' },
//   { code: '29.10.2019', pay: 'Z-IN1', nextpay: 'ผ่านรายการการชำระเงินแล้ว' },
//   { code: '10.10.2019', pay: 'Z-DI1', nextpay: 'ผ่านรายการการชำระเงินแล้ว' },
//   { code: '10.10.2019', pay: 'Z-DI1', nextpay: 'ผ่านรายการการชำระเงินแล้ว' },
//   { code: '10.10.2019', pay: 'Z-DI1', nextpay: 'ผ่านรายการการชำระเงินแล้ว' },
//   { code: '10.10.2019', pay: 'Z-DI1', nextpay: 'ผ่านรายการการชำระเงินแล้ว' },
//   { code: '10.10.2019', pay: 'Z-DI1', nextpay: 'ผ่านรายการการชำระเงินแล้ว' },
// ];


@Component({
  selector: 'app-dialog-search-vendor-payment',
  templateUrl: './dialog-search-vendor-payment.component.html',
  styleUrls: ['./dialog-search-vendor-payment.component.scss']
})
export class DialogSearchVendorPaymentComponent implements OnInit {
  displayedColumns: string[] = ['choose', 'taxId', 'valueCode', 'name'];
  dataSource = []
  errorMessage = ''

  constructor(
    private dialogRef: MatDialogRef<DialogSearchVendorPaymentComponent>,
    private masterService: MasterService
  ) { }

  closeDialog(): void {
    const dialogRef = this.dialogRef.close();

  }

  ngOnInit() {
    // this.loadVendor('')
  }
  loadVendor(event) {
    // console.log(textSearch.value)

    let textSearch = event.value

    const percent = textSearch.split('').filter(value => value === '%').length;
    for (let i = 0; i < percent; i++) {
      textSearch = textSearch.replace('%', '*');
    }
    const text = textSearch.split('').filter(value => value === '*').length;
    if (text > 2) {
      this.errorMessage = 'เงื่อนไขไม่ถูกต้อง';
      return false;
    } else {
      const checkCondtion = textSearch.indexOf('**');

      if (checkCondtion === -1) {
        if (textSearch === '*' || textSearch === '**') {
          this.errorMessage = 'เงื่อนไขไม่ถูกต้อง';
          return false;
        }
      } else {
        this.errorMessage = 'เงื่อนไขไม่ถูกต้อง';
        return false;
      }
    }
    this.errorMessage = '';
    this.dataSource = []

    this.masterService.findVendorCodeWithParam(textSearch).subscribe(data => {
      const response = data as any;

      if (response.status === 'T') {
        this.dataSource = response.data;
        // this.dataSourceHeader = this.constant.HEADER_DIALOG_SEARCH.vendorTaxId;
      } else {
        this.errorMessage = response.message;
      }
    });
  }

  chooseDataSearch(data) {
    console.log(data)
    // this.errorMessage = '';
    this.dialogRef.close({
      event: true,
      // type: this.data.type,
      value: data.taxId,

    });
  }


}
