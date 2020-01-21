import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogSearchVendorComponent } from 'src/app/shared/component/tab-param/dialog-search-vendor/dialog-search-vendor.component';

export interface PeriodicElement {
  pay: string;
  code: number;
  nextpay: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { code: 101010, pay: '11/11/11', nextpay: '12/12/12' },
  { code: 101011, pay: '12/11/11', nextpay: '13/12/12' },
  { code: 101012, pay: '13/11/11', nextpay: '14/12/12' },
  { code: 101013, pay: '14/11/11', nextpay: '15/12/12' },
  { code: 101014, pay: '15/11/11', nextpay: '16/12/12' },
];

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.scss']
})
export class ParameterComponent implements OnInit {
  displayedColumns: string[] = ['code', 'pay', 'nextpay'];
  dataSource = ELEMENT_DATA;



  @Output() messageFromParameter = new EventEmitter<string>();

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit() {

  }


  openDialogSearchVendor(): void {
    console.log('openDialogSearchVendor')
    //for test send para
    const data: any = {
      typeAccountName: 'glAccName',
      centerName: 'costCenterName',
      sourceMoneyName: 'fundSourceName',
      sourceBudgetName: 'bgCodeName',
      mainActivityName: 'bgActivityName',
      subActivityName: 'costActivityName',
      subAccountName: 'subAccName',
      ownSubAccountName: 'subAccOwnerName',
      packageName: 'gpscGroupName',
    }
    this.messageFromParameter.emit(data)

    //   const dialogRef = this.dialog.open(DialogSearchVendorComponent, {
    //     width: '250px',
    //     data: {}
    //   });

    //   dialogRef.afterClosed().subscribe(result => {
    //     console.log('The dialog was closed');

    //   });
  }

}
