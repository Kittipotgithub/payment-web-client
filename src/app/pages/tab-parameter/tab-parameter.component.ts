import { DialogSearchVendorComponent } from './../../shared/component/tab-param/dialog-search-vendor/dialog-search-vendor.component';
import { DialogSearchPaymentMethodComponent } from './../../shared/component/tab-param/dialog-search-payment-method/dialog-search-payment-method.component';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChildren,
  QueryList,
  ElementRef,
} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Utils } from 'src/app/shared/utils';
import { DialogSearchVendorPaymentComponent } from 'src/app/shared/component/dialog-search-vendor-payment/dialog-search-vendor-payment.component';

@Component({
  selector: 'app-tab-parameter',
  templateUrl: './tab-parameter.component.html',
  styleUrls: ['./tab-parameter.component.scss'],
})
export class TabParameterComponent implements OnInit {
  @ViewChildren('vendorTaxIdFrom') vendorTaxIdFrom: QueryList<ElementRef>;
  @ViewChildren('vendorTaxIdTo') vendorTaxIdTo: QueryList<ElementRef>;

  // Tab
  panleExpanded = true;
  panleExpanded1 = true;

  @Input() parameter;
  @Output() messageFromParameter = new EventEmitter<any>();

  parameterForm: FormGroup;
  postDateControl: FormControl; // วันที่ผ่านรายการ
  saveDateControl: FormControl; // บันทึกเอกสาร
  paymentMethodControl: FormControl; // วิธีชำระเงิน
  paymentDateControl: FormControl; // วันชำระถัดไป
  companyControl: FormControl; // รหัสบริษัท

  listVendor = [
    { vendorTaxIdFrom: null, vendorTaxIdTo: null },
    { vendorTaxIdFrom: null, vendorTaxIdTo: null },
    { vendorTaxIdFrom: null, vendorTaxIdTo: null },
  ];

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private utils: Utils) {}

  ngOnInit() {
    console.log(this.parameter);
    this.createFormControl();
    this.createFormGroup();
    if (this.parameter) {
      this.setInputFromParameter();
    } else {
      this.defaultInput();
    }
  }
  getParameterFromCopy(object) {
    console.log(object);
    // this.listIndependent = object
    this.listVendor = object.vendor;
    this.parameterForm.patchValue({
      postDate: object.postDate, // วันที่ผ่านรายการ
      saveDate: object.saveDate, // บันทึกเอกสาร
      paymentMethod: object.paymentMethod, // วิธีชำระเงิน
      paymentDate: object.paymentDate, // วันชำระถัดไป
      company: this.utils.convertCompanyArrayToCompanyText(object.companyCondition), // รหัสบริษัท
    });
  }

  createFormControl() {
    this.postDateControl = this.formBuilder.control(''); // วันที่ผ่านรายการ
    this.saveDateControl = this.formBuilder.control(''); // บันทึกเอกสาร
    this.paymentMethodControl = this.formBuilder.control(''); // วิธีชำระเงิน
    this.paymentDateControl = this.formBuilder.control(''); // วันชำระถัดไป
    this.companyControl = this.formBuilder.control(''); // รหัสบริษัท

    // this.verdorTaxIdFormControl = this.formBuilder.control('');
    // this.verdorTaxIdToControl = this.formBuilder.control('');
  }
  createFormGroup() {
    this.parameterForm = this.formBuilder.group({
      postDate: this.postDateControl, // วันที่ผ่านรายการ
      saveDate: this.saveDateControl, // บันทึกเอกสาร
      paymentMethod: this.paymentMethodControl, // วิธีชำระเงิน
      paymentDate: this.paymentDateControl, // วันชำระถัดไป
      company: this.companyControl, // รหัสบริษัท

      // verdorTaxIdForm: this.verdorTaxIdFormControl,
      // verdorTaxIdTo: this.verdorTaxIdToControl
    });
  }
  defaultInput() {
    this.listVendor = [
      { vendorTaxIdFrom: null, vendorTaxIdTo: null },
      { vendorTaxIdFrom: null, vendorTaxIdTo: null },
      { vendorTaxIdFrom: null, vendorTaxIdTo: null },
    ];
    this.parameterForm.patchValue({
      postDate: '', // วันที่ผ่านรายการ
      saveDate: '', // บันทึกเอกสาร
      paymentMethod: '', // วิธีชำระเงิน
      paymentDate: '', // วันชำระถัดไป
      company: '', // รหัสบริษัท
    });
  }
  setInputFromParameter() {
    this.listVendor = this.parameter.vendor;
    this.parameterForm.patchValue({
      postDate: this.parameter.postDate, // วันที่ผ่านรายการ
      saveDate: this.parameter.saveDate, // บันทึกเอกสาร
      paymentMethod: this.parameter.paymentMethod, // วิธีชำระเงิน
      paymentDate: this.parameter.paymentDate, // วันชำระถัดไป
      company: this.utils.convertCompanyArrayToCompanyText(this.parameter.companyCondition), // รหัสบริษัท
    });
  }

  setVendor(index) {
    const vendorTaxIdFrom = this.vendorTaxIdFrom.toArray()[index].nativeElement.value;
    const vendorTaxIdTo = this.vendorTaxIdTo.toArray()[index].nativeElement.value;
    if (vendorTaxIdFrom) {
      this.listVendor[index].vendorTaxIdFrom = vendorTaxIdFrom;
    } else {
      this.listVendor[index].vendorTaxIdFrom = '';
    }
    if (vendorTaxIdTo) {
      this.listVendor[index].vendorTaxIdTo = vendorTaxIdTo;
    } else {
      this.listVendor[index].vendorTaxIdTo = '';
    }
    console.log(this.listVendor);
  }

  // test() {
  //   console.log(this.vendorTaxIdTo)
  //   console.log(this.vendorTaxIdFrom)

  // }
  updateParameter(): void {
    console.log(this.parameterForm.value);
    this.parameterForm.value.vendor = this.listVendor;

    this.parameterForm.value.companyCondition = this.utils.convertCompanyTextToCompanyArray(
      this.parameterForm.value.company
    );
    this.parameter = this.parameterForm.value;

    this.messageFromParameter.emit(this.parameter);
  }

  openDialogSearchVendor(index, type): void {
    const dialog = this.dialog.open(DialogSearchVendorPaymentComponent, {});
    dialog.afterClosed().subscribe(result => {
      console.log(result);
      if (result && result.event) {
        if (type === 'vendorTaxIdFrom') {
          this.listVendor[index].vendorTaxIdFrom = result.value;
        } else if (type === 'vendorTaxIdTo') {
          this.listVendor[index].vendorTaxIdTo = result.value;
        }
      }
      console.log('The dialog was closed');
    });
  }

  openDialogSearchPaymentMethod(): void {
    const paymentMethod = this.parameterForm.controls.paymentMethod.value;
    const dialog = this.dialog.open(DialogSearchPaymentMethodComponent, {
      data: { paymentMethod },
    });
    dialog.afterClosed().subscribe(result => {
      console.log(result);
      if (result && result.event) {
        this.parameterForm.patchValue({
          paymentMethod: result.value, // วิธีชำระเงิน
        });
      }
      console.log('The dialog was closed');
    });
  }
  addInputVendor() {
    this.listVendor.push({ vendorTaxIdFrom: null, vendorTaxIdTo: null });
    console.log(this.listVendor);
  }
  deleteInputVendor(index) {
    this.listVendor.splice(index, 1);
  }
}
