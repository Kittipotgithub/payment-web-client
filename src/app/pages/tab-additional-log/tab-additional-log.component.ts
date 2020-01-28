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
    this.createAdditionLogFormControl();
    this.createAdditionLogFormGroup();
    this.defaultInputAdditionLogForm()

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
  checkValidationAdditionLog(event, type) {
    if (type === 'dueDate') {
      if (event.checked) {
        this.isDisabledCheckBoxPaymentMethodAll = true
      } else {
        this.isDisabledCheckBoxPaymentMethodAll = false
      }
    } else if (type === 'paymentMethodAll') {
      if (event.checked) {
        this.isDisabledCheckBoxDueDate = true
      } else {
        this.isDisabledCheckBoxDueDate = false
      }
    }
  }
  updateParameter(): void {
    // this.additionLogForm.value.vendor = this.listVendor
    this.additionLog = this.additionLogForm.value

    this.messageFromAdditionLog.emit(this.additionLog)

  }

}
