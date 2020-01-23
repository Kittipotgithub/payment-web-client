import { ChangeDetectionStrategy, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogSearchVendorComponent } from 'src/app/shared/component/tab-param/dialog-search-vendor/dialog-search-vendor.component';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { AccountComponent } from '../account/account.component';
import { CopyComponent } from '../copy/copy.component';
import { PaymentComponent } from '../payment/payment.component';

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
  styleUrls: ['./parameter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParameterComponent implements OnInit {
  displayedColumns: string[] = ['code', 'pay', 'nextpay'];
  dataSource = ELEMENT_DATA;

  @Input('parameter') parameter
  set test(value) {
    console.log(value)

  }


  // @Input() set m_select(m_select: String) {

  //   console.log('m_select11213213', m_select);

  // }
  //   get allowDay(): boolean 
  //   set allowDay(value: boolean) {
  //    console.log(value)
  // }
  listParameterTab = [];
  @Output() messageFromParameter = new EventEmitter<any>();

  parameterForm: FormGroup;
  verdorTaxIdFormControl: FormControl; // รหัสผู้ขายจาก
  verdorTaxIdToControl: FormControl; // รหัสผู้ขายถึง

  containers = [];

  add() {
    this.containers.push(this.containers.length);
    this.show = true;
  }

  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
  ) { }

  public show;


  openDialog(): void {
    const dialogRef = this.dialog.open(CopyComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  

  OpenAcc(): void {
    const dialog = this.dialog.open(AccountComponent, {
    });

    dialog.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  OpenPayment(): void {
    const dialog = this.dialog.open(PaymentComponent, {
    });

    dialog.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    console.log(this.parameter)
    this.createFormControl()
    this.createFormGroup()
    this.defaultInput()
  }

  createFormControl() {
    this.verdorTaxIdFormControl = this.formBuilder.control('');
    this.verdorTaxIdToControl = this.formBuilder.control('');
  }
  createFormGroup() {
    this.parameterForm = this.formBuilder.group({
      verdorTaxIdForm: this.verdorTaxIdFormControl,
      verdorTaxIdTo: this.verdorTaxIdToControl
    })
  }
  defaultInput() {
    this.parameterForm.patchValue({
      verdorTaxIdForm: '9999',
      verdorTaxIdTo: '1234',
    })
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
    this.listParameterTab.push(data)
    this.messageFromParameter.emit(this.listParameterTab)

    //   const dialogRef = this.dialog.open(DialogSearchVendorComponent, {
    //     width: '250px',
    //     data: {}
    //   });

    //   dialogRef.afterClosed().subscribe(result => {
    //     console.log('The dialog was closed');

    //   });
  }

}
