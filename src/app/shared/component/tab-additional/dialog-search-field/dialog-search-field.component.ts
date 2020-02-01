import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { PaymentService } from 'src/app/core/service/payment/payment.service';
import { ThrowStmt } from '@angular/compiler';
import { group } from '@angular/animations';
import { PaymentIndependentService } from 'src/app/core/service/payment-independent/payment-independent.service';

export interface DialogData {
  type: string;
  title: string;
  specialCase: {
    departmentCode: '';
    disbursementCode: '';
    areaCode: '';

    bankCode: '';
    vendorTaxId: '';
    year: '';
    condition: '';
    formId: '';
  };
}

@Component({
  selector: 'app-dialog-search-field',
  templateUrl: './dialog-search-field.component.html',
  styleUrls: ['./dialog-search-field.component.scss'],
})
export class DialogSearchFieldComponent implements OnInit, AfterViewInit {
  searchFiledFormCreate: FormGroup;

  typeControl: FormControl; // ชื่อฟิลด์

  errorMessage = '';

  displayedColumns: string[] = ['choose', 'filedName', 'filedTable'];

  dataSource = [];

  constructor(
    private dialogRef: MatDialogRef<DialogSearchFieldComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formBuilder: FormBuilder,
    private paymentService: PaymentService,
    private paymentIndependentService: PaymentIndependentService
  ) {}

  ngOnInit() {
    this.createSearchFiledFormControl();
    this.createSearchFiledFormGroup();
  }

  ngAfterViewInit() {
    this.searchStandard();
  }

  createSearchFiledFormControl() {
    this.typeControl = this.formBuilder.control('1');
  }

  createSearchFiledFormGroup() {
    this.searchFiledFormCreate = this.formBuilder.group({
      type: this.typeControl,
    });
  }
  closeDialog(): void {
    const dialogRef = this.dialogRef.close();
  }
  chooseDataSearch(row) {
    console.log('show', row);

    this.dialogRef.close({
      event: true,
      // type: row.,
      value: row.fieldName,
    });
  }
  search(groupName) {
    this.paymentIndependentService.search(groupName).then(value => {
      console.log(value.data);
      this.dataSource = value.data;
    });
  }

  searchStandard() {
    this.paymentIndependentService.searchStandard().then(value => {
      console.log(value.data);
      this.dataSource = value.data;
    });
  }
  changeType(event) {
    console.log(event);
    if (event.value === '1') {
      this.searchStandard();
    } else if (event.value === '2') {
      this.search('Document');
    } else if (event.value === '3') {
      this.search('Vendor');
    }
  }
}
