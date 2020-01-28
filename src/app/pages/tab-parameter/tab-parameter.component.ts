import { DialogSearchVendorComponent } from './../../shared/component/tab-param/dialog-search-vendor/dialog-search-vendor.component';
import { DialogSearchPaymentMethodComponent } from './../../shared/component/tab-param/dialog-search-payment-method/dialog-search-payment-method.component';
import { ChangeDetectionStrategy, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-tab-parameter',
  templateUrl: './tab-parameter.component.html',
  styleUrls: ['./tab-parameter.component.scss']
})
export class TabParameterComponent implements OnInit {


  listParameterTab = [];
  @Output() messageFromParameter = new EventEmitter<any>();

  parameterForm: FormGroup;
  postDateControl: FormControl;  // วันที่ผ่านรายการ
  saveDateControl: FormControl;  // บันทึกเอกสาร
  paymentMethodControl: FormControl;  // วิธีชำระเงิน  
  paymentDateControl: FormControl;  // วันชำระถัดไป
  companyCodeControl: FormControl;  // รหัสบริษัท

  verdorTaxIdFormControl: FormControl; // รหัสผู้ขายจาก
  verdorTaxIdToControl: FormControl; // รหัสผู้ขายถึง

  containers = [];



  add() {
    this.containers.push(this.containers.length);
    this.show = true;
  }

  del() {
    this.containers.splice(this.containers.length - 1);
  }

  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
  ) { }

  public show;


  ngOnInit() {

    this.createFormControl()
    this.createFormGroup()
    this.defaultInput()
  }

  createFormControl() {
    this.postDateControl = this.formBuilder.control('');  // วันที่ผ่านรายการ
    this.saveDateControl = this.formBuilder.control('');  // บันทึกเอกสาร
    this.paymentMethodControl = this.formBuilder.control('');  // วิธีชำระเงิน  
    this.paymentDateControl = this.formBuilder.control('');  // วันชำระถัดไป
    this.companyCodeControl = this.formBuilder.control('');  // รหัสบริษัท

    this.verdorTaxIdFormControl = this.formBuilder.control('');
    this.verdorTaxIdToControl = this.formBuilder.control('');
  }
  createFormGroup() {
    this.parameterForm = this.formBuilder.group({
      postDate: this.postDateControl,  // วันที่ผ่านรายการ
      saveDate: this.saveDateControl,  // บันทึกเอกสาร
      paymentMethod: this.paymentMethodControl,  // วิธีชำระเงิน  
      paymentDate: this.paymentDateControl,  // วันชำระถัดไป
      companyCode: this.companyCodeControl,  // รหัสบริษัท

      verdorTaxIdForm: this.verdorTaxIdFormControl,
      verdorTaxIdTo: this.verdorTaxIdToControl
    })
  }
  defaultInput() {
    this.parameterForm.patchValue({
      postDate: '',  // วันที่ผ่านรายการ
      saveDate: '',  // บันทึกเอกสาร
      paymentMethod: '',  // วิธีชำระเงิน  
      paymentDate: '',  // วันชำระถัดไป
      companyCode: '',  // รหัสบริษัท

      verdorTaxIdForm: '9999',
      verdorTaxIdTo: '1234',
    })
  }

  openDialogSearchVendorTest(): void {
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



  openDialogSearchVendor(): void {
    const dialog = this.dialog.open(DialogSearchVendorComponent, {
    });

    dialog.afterClosed().subscribe(result => {
      console.log('The dialog was closed ');
    });
  }

  openDialogSearchPaymentMethod(): void {
    const paymentMethod = this.parameterForm.controls.paymentMethod.value
    const dialog = this.dialog.open(DialogSearchPaymentMethodComponent, {
      data: { paymentMethod }
    });
    dialog.afterClosed().subscribe(result => {
      console.log(result)
      if (result && result.event) {
        this.parameterForm.patchValue({
          paymentMethod: result.value,  // วิธีชำระเงิน  
        })
      }
      console.log('The dialog was closed');
    });
  }

}
