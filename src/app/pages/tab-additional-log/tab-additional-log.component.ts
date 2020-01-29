import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-tab-additional-log',
  templateUrl: './tab-additional-log.component.html',
  styleUrls: ['./tab-additional-log.component.scss']
})
export class TabAdditionalLogComponent implements OnInit {

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
  vendorTaxIdOneFromControl: FormControl; // vendor
  vendorTaxIdOneToControl: FormControl; // vendor
  vendorTaxIdTwoFromControl: FormControl; // vendor
  vendorTaxIdTwoToControl: FormControl; // vendor
  vendorTaxIdThreeFromControl: FormControl; // vendor
  vendorTaxIdThreeToControl: FormControl; // vendor

  isDisabledCheckBoxDueDate: boolean = false   //for disabled checkbox
  isDisabledCheckBoxPaymentMethodAll: boolean = false//for disabled checkbox

  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    console.log(this.additionLog)
    this.createAdditionLogFormControl();
    this.createAdditionLogFormGroup();
    if (this.additionLog) {
      this.setInputFromAddition()
    } else {
      this.defaultInputAdditionLogForm()
    }
  }
  getIndependentFromCopy(object) {
    console.log(object)
    

    this.isDisabledCheckBoxDueDate = false
    this.isDisabledCheckBoxPaymentMethodAll = false

    if (object.checkBoxDueDate) {
      this.isDisabledCheckBoxPaymentMethodAll = true
      this.isDisabledCheckBoxDueDate = false
    }
    if (object.checkBoxPaymentMethodAll) {
      this.isDisabledCheckBoxPaymentMethodAll = false
      this.isDisabledCheckBoxDueDate = true
    }

    this.additionLogForm.patchValue({
      checkBoxDueDate: object.checkBoxDueDate, // ตรวจสอบวันที่ครบกำหนด
      checkBoxPaymentMethodAll: object.checkBoxPaymentMethodAll, // เลือกวิธีชำระเงินในทุกกรณี
      checkBoxPaymentMethodUnsuccess: object.checkBoxPaymentMethodUnsuccess, // เลือกเฉพาะวิธีการชำระเงินไม่สำเร็จ
      checkBoxDisplayDetail: object.checkBoxDisplayDetail, //แสดงรายการบรรทัดรายการเอกสารชำระเงิน
      vendorTaxIdOneFrom: object.vendorTaxIdOneFrom, // vendor
      vendorTaxIdOneTo: object.vendorTaxIdOneTo, // vendor
      vendorTaxIdTwoFrom: object.vendorTaxIdTwoFrom, // vendor
      vendorTaxIdTwoTo: object.vendorTaxIdTwoTo, // vendor
      vendorTaxIdThreeFrom: object.vendorTaxIdThreeFrom, // vendor
      vendorTaxIdThreeTo: object.venvendorTaxIdThreeTodorTax, // vendor
    })
  }
  createAdditionLogFormControl() {
    this.checkBoxDueDateControl = this.formBuilder.control(''); // ตรวจสอบวันที่ครบกำหนด
    this.checkBoxPaymentMethodAllControl = this.formBuilder.control(''); // เลือกวิธีชำระเงินในทุกกรณี
    this.checkBoxPaymentMethodUnsuccessControl = this.formBuilder.control(''); // เลือกเฉพาะวิธีการชำระเงินไม่สำเร็จ
    this.checkBoxDisplayDetailControl = this.formBuilder.control(''); //แสดงรายการบรรทัดรายการเอกสารชำระเงิน
    this.vendorTaxIdOneFromControl = this.formBuilder.control(''); // vendor
    this.vendorTaxIdOneToControl = this.formBuilder.control(''); // vendor
    this.vendorTaxIdTwoFromControl = this.formBuilder.control(''); // vendor
    this.vendorTaxIdTwoToControl = this.formBuilder.control(''); // vendor
    this.vendorTaxIdThreeFromControl = this.formBuilder.control(''); // vendor
    this.vendorTaxIdThreeToControl = this.formBuilder.control(''); // vendor
  }
  createAdditionLogFormGroup() {
    this.additionLogForm = this.formBuilder.group({
      checkBoxDueDate: this.checkBoxDueDateControl, // ตรวจสอบวันที่ครบกำหนด
      checkBoxPaymentMethodAll: this.checkBoxPaymentMethodAllControl, // เลือกวิธีชำระเงินในทุกกรณี
      checkBoxPaymentMethodUnsuccess: this.checkBoxPaymentMethodUnsuccessControl, // เลือกเฉพาะวิธีการชำระเงินไม่สำเร็จ
      checkBoxDisplayDetail: this.checkBoxDisplayDetailControl, //แสดงรายการบรรทัดรายการเอกสารชำระเงิน
      vendorTaxIdOneFrom: this.vendorTaxIdOneFromControl, // vendor
      vendorTaxIdOneTo: this.vendorTaxIdOneToControl, // vendor
      vendorTaxIdTwoFrom: this.vendorTaxIdTwoFromControl, // vendor
      vendorTaxIdTwoTo: this.vendorTaxIdTwoToControl, // vendor
      vendorTaxIdThreeFrom: this.vendorTaxIdThreeFromControl, // vendor
      vendorTaxIdThreeTo: this.vendorTaxIdThreeToControl, // vendor
    });
  }
  defaultInputAdditionLogForm() {
    this.additionLogForm.patchValue({
      checkBoxDueDate: false, // ตรวจสอบวันที่ครบกำหนด
      checkBoxPaymentMethodAll: false, // เลือกวิธีชำระเงินในทุกกรณี
      checkBoxPaymentMethodUnsuccess: false, // เลือกเฉพาะวิธีการชำระเงินไม่สำเร็จ
      checkBoxDisplayDetail: false, //แสดงรายการบรรทัดรายการเอกสารชำระเงิน
      vendorTaxIdOneFrom: '', // vendor
      vendorTaxIdOneTo: '', // vendor
      vendorTaxIdTwoFrom: '', // vendor
      vendorTaxIdTwoTo: '', // vendor
      vendorTaxIdThreeFrom: '', // vendor
      vendorTaxIdThreeTo: '', // vendor
    });
  }
  setInputFromAddition() {

    this.isDisabledCheckBoxDueDate = false
    this.isDisabledCheckBoxPaymentMethodAll = false

    // if (this.additionLog.checkBoxDueDate) {
    //   this.isDisabledCheckBoxPaymentMethodAll = true
    //   this.isDisabledCheckBoxDueDate = false
    // }
    // if (this.additionLog.checkBoxPaymentMethodAll) {
    //   this.isDisabledCheckBoxPaymentMethodAll = false
    //   this.isDisabledCheckBoxDueDate = true
    // }

    
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
  checkValidationAdditionLog(event, type) {
    console.log('checkValidationAdditionLog')
    if (type === 'dueDate') {
      if (event.checked) {
        this.isDisabledCheckBoxPaymentMethodAll = true
        this.additionLogForm.patchValue({
          checkBoxDueDate: true, // ตรวจสอบวันที่ครบกำหนด
          checkBoxPaymentMethodAll: false, // เลือกวิธีชำระเงินในทุกกรณี

        })
      } else {
        this.isDisabledCheckBoxPaymentMethodAll = false
        this.additionLogForm.patchValue({
          checkBoxDueDate: false, // ตรวจสอบวันที่ครบกำหนด
          checkBoxPaymentMethodAll: false, // เลือกวิธีชำระเงินในทุกกรณี

        })
      }
    } else if (type === 'paymentMethodAll') {
      if (event.checked) {
        this.isDisabledCheckBoxDueDate = true
        this.additionLogForm.patchValue({
          checkBoxDueDate: false, // ตรวจสอบวันที่ครบกำหนด
          checkBoxPaymentMethodAll: true, // เลือกวิธีชำระเงินในทุกกรณี

        })
      } else {
        this.isDisabledCheckBoxDueDate = false
        this.additionLogForm.patchValue({
          checkBoxDueDate: false, // ตรวจสอบวันที่ครบกำหนด
          checkBoxPaymentMethodAll: false, // เลือกวิธีชำระเงินในทุกกรณี

        })
      }
    }
  }
  updateParameter(): void {
    // this.additionLogForm.value.vendor = this.listVendor
    this.additionLog = this.additionLogForm.value


    this.messageFromAdditionLog.emit(this.additionLog)

  }

}
