import { DialogSearchVendorComponent } from './../../shared/component/tab-param/dialog-search-vendor/dialog-search-vendor.component';
import { DialogSearchPaymentMethodComponent } from './../../shared/component/tab-param/dialog-search-payment-method/dialog-search-payment-method.component';
import { ChangeDetectionStrategy, Component, OnInit, Input, Output, EventEmitter, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-tab-parameter',
  templateUrl: './tab-parameter.component.html',
  styleUrls: ['./tab-parameter.component.scss']
})
export class TabParameterComponent implements OnInit {
  @ViewChildren('vendorTaxIdFrom') vendorTaxIdFrom: QueryList<ElementRef>;
  @ViewChildren('vendorTaxIdTo') vendorTaxIdTo: QueryList<ElementRef>;



  @Input() parameter
  @Output() messageFromParameter = new EventEmitter<any>();

  parameterForm: FormGroup;
  postDateControl: FormControl;  // วันที่ผ่านรายการ
  saveDateControl: FormControl;  // บันทึกเอกสาร
  paymentMethodControl: FormControl;  // วิธีชำระเงิน  
  paymentDateControl: FormControl;  // วันชำระถัดไป
  companyCodeControl: FormControl;  // รหัสบริษัท

  // verdorTaxIdFormControl: FormControl; // รหัสผู้ขายจาก
  // verdorTaxIdToControl: FormControl; // รหัสผู้ขายถึง

  listVendor = [
    { id: 1, vendorTaxIdFrom: '', vendorTaxIdTo: '' },
    { id: 2, vendorTaxIdFrom: '', vendorTaxIdTo: '' },
    { id: 3, vendorTaxIdFrom: '', vendorTaxIdTo: '' },
    { id: 4, vendorTaxIdFrom: '', vendorTaxIdTo: '' },
    { id: 5, vendorTaxIdFrom: '', vendorTaxIdTo: '' },
    { id: 6, vendorTaxIdFrom: '', vendorTaxIdTo: '' },
  ];


  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
  ) { }




  ngOnInit() {
    console.log(this.parameter)
    this.createFormControl()
    this.createFormGroup()
    if (this.parameter) {
      this.setInputFromParameter()
    } else {
      this.defaultInput()
    }

  }

  createFormControl() {
    this.postDateControl = this.formBuilder.control('');  // วันที่ผ่านรายการ
    this.saveDateControl = this.formBuilder.control('');  // บันทึกเอกสาร
    this.paymentMethodControl = this.formBuilder.control('');  // วิธีชำระเงิน  
    this.paymentDateControl = this.formBuilder.control('');  // วันชำระถัดไป
    this.companyCodeControl = this.formBuilder.control('');  // รหัสบริษัท

    // this.verdorTaxIdFormControl = this.formBuilder.control('');
    // this.verdorTaxIdToControl = this.formBuilder.control('');
  }
  createFormGroup() {
    this.parameterForm = this.formBuilder.group({
      postDate: this.postDateControl,  // วันที่ผ่านรายการ
      saveDate: this.saveDateControl,  // บันทึกเอกสาร
      paymentMethod: this.paymentMethodControl,  // วิธีชำระเงิน  
      paymentDate: this.paymentDateControl,  // วันชำระถัดไป
      companyCode: this.companyCodeControl,  // รหัสบริษัท

      // verdorTaxIdForm: this.verdorTaxIdFormControl,
      // verdorTaxIdTo: this.verdorTaxIdToControl
    })
  }
  defaultInput() {
    this.parameterForm.patchValue({
      postDate: '',  // วันที่ผ่านรายการ
      saveDate: '',  // บันทึกเอกสาร
      paymentMethod: '',  // วิธีชำระเงิน  
      paymentDate: '',  // วันชำระถัดไป
      companyCode: '',  // รหัสบริษัท
    })
  }
  setInputFromParameter() {
    this.listVendor = this.parameter.vendor
    this.parameterForm.patchValue({
      postDate: this.parameter.postDate,  // วันที่ผ่านรายการ
      saveDate: this.parameter.saveDate,  // บันทึกเอกสาร
      paymentMethod: this.parameter.paymentMethod,  // วิธีชำระเงิน  
      paymentDate: this.parameter.paymentDate,  // วันชำระถัดไป
      companyCode: this.parameter.companyCode,  // รหัสบริษัท
    })
  }

  setVendor(index) {
    const vendorTaxIdFrom = this.vendorTaxIdFrom.toArray()[index].nativeElement.value;
    const vendorTaxIdTo = this.vendorTaxIdTo.toArray()[index].nativeElement.value;
    if (vendorTaxIdFrom) {
      this.listVendor[index].vendorTaxIdFrom = vendorTaxIdFrom
    } else {
      this.listVendor[index].vendorTaxIdFrom = ''
    }
    if (vendorTaxIdTo) {
      this.listVendor[index].vendorTaxIdTo = vendorTaxIdTo
    } else {
      this.listVendor[index].vendorTaxIdTo = ''
    }
    console.log(this.listVendor)
  }

  // test() {
  //   console.log(this.vendorTaxIdTo)
  //   console.log(this.vendorTaxIdFrom)

  // }
  updateParameter(): void {
    this.parameterForm.value.vendor = this.listVendor
    this.parameter = this.parameterForm.value

    this.messageFromParameter.emit(this.parameter)

  }



  openDialogSearchVendor(index, type): void {
    const dialog = this.dialog.open(DialogSearchPaymentMethodComponent, {
    });
    dialog.afterClosed().subscribe(result => {
      console.log(result)
      if (result && result.event) {
        if (type === 'vendorTaxIdFrom') {
          this.listVendor[index].vendorTaxIdFrom = result.value
        } else if (type === 'vendorTaxIdTo') {
          this.listVendor[index].vendorTaxIdTo = result.value
        }
      }
      console.log('The dialog was closed');
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
  addInputVendor() {
    this.listVendor.push({ id: this.listVendor.length + 1, vendorTaxIdFrom: '', vendorTaxIdTo: '' });
    console.log(this.listVendor)
  }
  deleteInputVendor(index) {
    this.listVendor.splice(index, 1);
  }

}
