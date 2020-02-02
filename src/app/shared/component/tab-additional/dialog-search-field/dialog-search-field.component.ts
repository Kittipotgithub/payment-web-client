import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, Inject, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { PaymentService } from 'src/app/core/service/payment/payment.service';
import { ThrowStmt } from '@angular/compiler';
import { group } from '@angular/animations';
import { PaymentIndependentService } from 'src/app/core/service/payment-independent/payment-independent.service';
import { MatSort } from '@angular/material';

@Component({
  selector: 'app-dialog-search-field',
  templateUrl: './dialog-search-field.component.html',
  styleUrls: ['./dialog-search-field.component.scss'],
})
export class DialogSearchFieldComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  searchFiledFormCreate: FormGroup;

  typeControl: FormControl; // ชื่อฟิลด์

  errorMessage = '';

  displayedColumns: string[] = ['choose', 'fieldName', 'dbName'];

  dataSource = new MatTableDataSource([]);

  constructor(
    private dialogRef: MatDialogRef<DialogSearchFieldComponent>,
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
  chooseDataSearch(data) {
    console.log('show', data);

    this.dialogRef.close({
      event: true,
      fieldName: data.fieldName,
      dataType: data.dataType,
      dbName: data.dbName,
      tableName: data.tableName,
    });
  }
  search(groupName) {
    this.paymentIndependentService.search(groupName).then(value => {
      console.log(value.data);
      this.dataSource = new MatTableDataSource(value.data);
      this.dataSource.sort = this.sort;
    });
  }

  searchStandard() {
    this.paymentIndependentService.searchStandard().then(value => {
      console.log(value.data);
      this.dataSource = new MatTableDataSource(value.data);
      this.dataSource.sort = this.sort;
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
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
