import { Component, OnInit, Output, Input, EventEmitter, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { DialogSearchVendorPaymentComponent } from 'src/app/shared/component/dialog-search-vendor-payment/dialog-search-vendor-payment.component';

@Component({
  selector: 'app-tab-additional-log',
  templateUrl: './tab-additional-log.component.html',
  styleUrls: ['./tab-additional-log.component.scss']
})
export class TabAdditionalLogComponent implements OnInit {
  @ViewChildren('vendorTaxIdFrom') vendorTaxIdFrom: QueryList<ElementRef>;
  @ViewChildren('vendorTaxIdTo') vendorTaxIdTo: QueryList<ElementRef>;
  // Tab
  panleExpanded = true;
  panleExpanded1 = true;

  @Input() additionLog: any
  @Output() messageFromAdditionLog = new EventEmitter<any>();

  additionLogForm: FormGroup;
  checkBoxDueDateControl: FormControl; // ตรวจสอบวันที่ครบกำหนด
  checkBoxPaymentMethodAllControl: FormControl; // เลือกวิธีชำระเงินในทุกกรณี
  checkBoxPaymentMethodUnsuccessControl: FormControl; // เลือกเฉพาะวิธีการชำระเงินไม่สำเร็จ
  checkBoxDisplayDetailControl: FormControl; //แสดงรายการบรรทัดรายการเอกสารชำระเงิน
  listVendor = [
    {  vendorTaxIdFrom: '', vendorTaxIdTo: '' },
    {  vendorTaxIdFrom: '', vendorTaxIdTo: '' },
    {  vendorTaxIdFrom: '', vendorTaxIdTo: '' },
  ];

  isDisabledCheckPaymentMethodUnsuccess: boolean = false   //for disabled checkbox
  isDisabledCheckBoxPaymentMethodAll: boolean = false//for disabled checkbox

  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.createAdditionLogFormControl();
    this.createAdditionLogFormGroup();
    if (this.additionLog) {
      this.setInputFromAddition()
    } else {
      this.defaultInputAdditionLogForm()
    }
  }
  getAdditionLogFromCopy(object) {
    this.listVendor = object.vendor
    this.isDisabledCheckPaymentMethodUnsuccess = false
    this.isDisabledCheckBoxPaymentMethodAll = false

    if (object.checkBoxPaymentMethodUnsuccess) {
      this.isDisabledCheckBoxPaymentMethodAll = true
      this.isDisabledCheckPaymentMethodUnsuccess = false
    }
    if (object.checkBoxPaymentMethodAll) {
      this.isDisabledCheckBoxPaymentMethodAll = false
      this.isDisabledCheckPaymentMethodUnsuccess = true
    }

    this.additionLogForm.patchValue({
      checkBoxDueDate: object.checkBoxDueDate, // ตรวจสอบวันที่ครบกำหนด
      checkBoxPaymentMethodAll: object.checkBoxPaymentMethodAll, // เลือกวิธีชำระเงินในทุกกรณี
      checkBoxPaymentMethodUnsuccess: object.checkBoxPaymentMethodUnsuccess, // เลือกเฉพาะวิธีการชำระเงินไม่สำเร็จ
      checkBoxDisplayDetail: object.checkBoxDisplayDetail, //แสดงรายการบรรทัดรายการเอกสารชำระเงิน
    })
  }
  createAdditionLogFormControl() {
    this.checkBoxDueDateControl = this.formBuilder.control(''); // ตรวจสอบวันที่ครบกำหนด
    this.checkBoxPaymentMethodAllControl = this.formBuilder.control(''); // เลือกวิธีชำระเงินในทุกกรณี
    this.checkBoxPaymentMethodUnsuccessControl = this.formBuilder.control(''); // เลือกเฉพาะวิธีการชำระเงินไม่สำเร็จ
    this.checkBoxDisplayDetailControl = this.formBuilder.control(''); //แสดงรายการบรรทัดรายการเอกสารชำระเงิน
  }
  createAdditionLogFormGroup() {
    this.additionLogForm = this.formBuilder.group({
      checkBoxDueDate: this.checkBoxDueDateControl, // ตรวจสอบวันที่ครบกำหนด
      checkBoxPaymentMethodAll: this.checkBoxPaymentMethodAllControl, // เลือกวิธีชำระเงินในทุกกรณี
      checkBoxPaymentMethodUnsuccess: this.checkBoxPaymentMethodUnsuccessControl, // เลือกเฉพาะวิธีการชำระเงินไม่สำเร็จ
      checkBoxDisplayDetail: this.checkBoxDisplayDetailControl, //แสดงรายการบรรทัดรายการเอกสารชำระเงิน
    });
  }
  defaultInputAdditionLogForm() {
    this.additionLogForm.patchValue({
      checkBoxDueDate: false, // ตรวจสอบวันที่ครบกำหนด
      checkBoxPaymentMethodAll: false, // เลือกวิธีชำระเงินในทุกกรณี
      checkBoxPaymentMethodUnsuccess: false, // เลือกเฉพาะวิธีการชำระเงินไม่สำเร็จ
      checkBoxDisplayDetail: false, //แสดงรายการบรรทัดรายการเอกสารชำระเงิน
    });
  }
  setInputFromAddition() {
    this.listVendor = this.additionLog.vendor

    this.isDisabledCheckPaymentMethodUnsuccess = false
    this.isDisabledCheckBoxPaymentMethodAll = false

    if (this.additionLog.checkBoxPaymentMethodUnsuccess) {
      this.isDisabledCheckBoxPaymentMethodAll = true
      this.isDisabledCheckPaymentMethodUnsuccess = false
    }
    if (this.additionLog.checkBoxPaymentMethodAll) {
      this.isDisabledCheckBoxPaymentMethodAll = false
      this.isDisabledCheckPaymentMethodUnsuccess = true
    }
    this.additionLogForm.patchValue({
      checkBoxDueDate: this.additionLog.checkBoxDueDate, // ตรวจสอบวันที่ครบกำหนด
      checkBoxPaymentMethodAll: this.additionLog.checkBoxPaymentMethodAll, // เลือกวิธีชำระเงินในทุกกรณี
      checkBoxPaymentMethodUnsuccess: this.additionLog.checkBoxPaymentMethodUnsuccess, // เลือกเฉพาะวิธีการชำระเงินไม่สำเร็จ
      checkBoxDisplayDetail: this.additionLog.checkBoxDisplayDetail, //แสดงรายการบรรทัดรายการเอกสารชำระเงิน
      vendorTaxIdOneFrom: this.additionLog.vendorTaxIdOneFrom, // vendor
      vendorTaxIdOneTo: this.additionLog.vendorTaxIdOneTo, // vendor
      vendorTaxIdTwoFrom: this.additionLog.vendorTaxIdTwoFrom, // vendor
      vendorTaxIdTwoTo: this.additionLog.vendorTaxIdTwoTo, // vendor
      vendorTaxIdThreeFrom: this.additionLog.vendorTaxIdThreeFrom, // vendor
      vendorTaxIdThreeTo: this.additionLog.venvendorTaxIdThreeTodorTax, // vendor
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
  }
  checkValidationAdditionLog(event, type) {
    console.log('checkValidationAdditionLog')
    if (type === 'paymentMethodUnsuccess') {
      if (event.checked) {
        this.isDisabledCheckBoxPaymentMethodAll = true
        this.additionLogForm.patchValue({
          checkBoxPaymentMethodUnsuccess: true, // เลือกเฉพาะวิธีการชำระเงินไม่สำเร็จ
          checkBoxPaymentMethodAll: false, // เลือกวิธีชำระเงินในทุกกรณี
        })
      } else {
        this.isDisabledCheckBoxPaymentMethodAll = false
        this.additionLogForm.patchValue({
          checkBoxPaymentMethodUnsuccess: false, // เลือกเฉพาะวิธีการชำระเงินไม่สำเร็จ
          checkBoxPaymentMethodAll: false, // เลือกวิธีชำระเงินในทุกกรณี
        })
      }
    } else if (type === 'paymentMethodAll') {
      if (event.checked) {
        this.isDisabledCheckPaymentMethodUnsuccess = true
        this.additionLogForm.patchValue({
          checkBoxPaymentMethodUnsuccess: false, // เลือกเฉพาะวิธีการชำระเงินไม่สำเร็จ
          checkBoxPaymentMethodAll: true, // เลือกวิธีชำระเงินในทุกกรณี
        })
      } else {
        this.isDisabledCheckPaymentMethodUnsuccess = false
        this.additionLogForm.patchValue({
          checkBoxPaymentMethodUnsuccess: false, // เลือกเฉพาะวิธีการชำระเงินไม่สำเร็จ
          checkBoxPaymentMethodAll: false, // เลือกวิธีชำระเงินในทุกกรณี
        })
      }
    }
  }
  updateParameter(): void {
    this.additionLogForm.value.vendor = this.listVendor
    this.additionLog = this.additionLogForm.value
    this.messageFromAdditionLog.emit(this.additionLog)
  }
  addInputVendor() {
    this.listVendor.push({  vendorTaxIdFrom: '', vendorTaxIdTo: '' });
  }
  deleteInputVendor(index) {
    this.listVendor.splice(index, 1);
  }
  openDialogSearchVendor(index, type): void {
    const dialog = this.dialog.open(DialogSearchVendorPaymentComponent, {
    });
    dialog.afterClosed().subscribe(result => {
      if (result && result.event) {
        if (type === 'vendorTaxIdFrom') {
          this.listVendor[index].vendorTaxIdFrom = result.value
        } else if (type === 'vendorTaxIdTo') {
          this.listVendor[index].vendorTaxIdTo = result.value
        }
      }
    });
  }
}
