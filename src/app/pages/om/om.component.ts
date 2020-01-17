import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DialogSearchVendorComponent } from 'src/app/shared/component/tab-param/dialog-search-vendor/dialog-search-vendor.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-om',
  templateUrl: './om.component.html',
  styleUrls: ['./om.component.scss']
})
export class OmComponent implements OnInit {
  omFormCreate: FormGroup;
  departmentCodeFromControl: FormControl; // รหัสหน่วยงาน
  departmentCodeToControl: FormControl; // รหัสหน่วยงาน
  provinceCodeFromControl: FormControl; // รหัสจังหวัด
  provinceCodeToControl: FormControl; // รหัสจังหวัด
  yearAccountControl: FormControl; // ปีบัญชี
  postDateFromControl: FormControl; // วันผ่านรายการ
  postDateToControl: FormControl; // วันผ่านรายการ
  vendorTaxIdFromControl: FormControl; // ผุ้ขาย
  vendorTaxIdToControl: FormControl; // ผุ้ขาย
  disbursementCodeFromControl: FormControl; // รหัสหน่วยเบิกจ่าย
  disbursementCodeToControl: FormControl; // รหัสหน่วยเบิกจ่าย

  docTypeFromControl: FormControl; // ประเภทเอกสาร
  docTypeToControl: FormControl; // ประเภทเอกสาร
  payMethodFromControl: FormControl; // วิธีชำระเงิน
  payMethodToControl: FormControl; // วิธีชำระเงิน
  documentDateFromControl: FormControl; // วันที่เอกสาร
  documentDateToControl: FormControl; // วันที่เอกสาร
  documentCreateDateFromControl: FormControl; // วันที่บันทึก
  documentCreateDateToControl: FormControl; // วันที่บันทึก
  specialTypeFromControl: FormControl; // แยกประเภทพิเศษ
  specialTypeToControl: FormControl; // แยกประเภทพิเศษ

  outlineControl: FormControl; // โครงร่าง


  isOpenCollapseDetail //เปิดปิด collpase

  animal: string;
  name: string;
  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog, ) { }

  ngOnInit() {
    this.createFormControl();
    this.createFormGroup();
  }

  createFormControl() {
    this.departmentCodeFromControl = this.formBuilder.control(''); // รหัสหน่วยงาน
    this.departmentCodeToControl = this.formBuilder.control(''); // รหัสหน่วยงาน
    this.provinceCodeFromControl = this.formBuilder.control(''); // รหัสจังหวัด
    this.provinceCodeToControl = this.formBuilder.control(''); // รหัสจังหวัด
    this.yearAccountControl = this.formBuilder.control(''); // ปีบัญชี
    this.postDateFromControl = this.formBuilder.control(''); // วันผ่านรายการ
    this.postDateToControl = this.formBuilder.control(''); // วันผ่านรายการ
    this.vendorTaxIdFromControl = this.formBuilder.control(''); // ผุ้ขาย
    this.vendorTaxIdToControl = this.formBuilder.control(''); // ผุ้ขาย
    this.disbursementCodeFromControl = this.formBuilder.control(''); // รหัสหน่วยเบิกจ่าย
    this.disbursementCodeToControl = this.formBuilder.control(''); // รหัสหน่วยเบิกจ่าย

    this.docTypeFromControl = this.formBuilder.control(''); // ประเภทเอกสาร
    this.docTypeToControl = this.formBuilder.control(''); // ประเภทเอกสาร
    this.payMethodFromControl = this.formBuilder.control(''); // วิธีชำระเงิน
    this.payMethodToControl = this.formBuilder.control(''); // วิธีชำระเงิน
    this.documentDateFromControl = this.formBuilder.control(''); // วันที่เอกสาร
    this.documentDateToControl = this.formBuilder.control(''); // วันที่เอกสาร
    this.documentCreateDateFromControl = this.formBuilder.control(''); // วันที่บันทึก
    this.documentCreateDateToControl = this.formBuilder.control(''); // วันที่บันทึก
    this.specialTypeFromControl = this.formBuilder.control(''); // แยกประเภทพิเศษ
    this.specialTypeToControl = this.formBuilder.control(''); // แยกประเภทพิเศษ

    this.outlineControl = this.formBuilder.control(''); // โครงร่าง

  }

  createFormGroup() {
    this.omFormCreate = this.formBuilder.group({
      departmentCodeFrom: this.departmentCodeFromControl, // รหัสหน่วยงาน
      departmentCodeTo: this.departmentCodeToControl, // รหัสหน่วยงาน
      provinceCodeFrom: this.provinceCodeFromControl, // รหัสจังหวัด
      provinceCodeTo: this.provinceCodeToControl, // รหัสจังหวัด
      yearAccount: this.yearAccountControl, // ปีบัญชี
      postDateFrom: this.postDateFromControl, // วันผ่านรายการ
      postDateTo: this.postDateToControl, // วันผ่านรายการ
      vendorTaxIdFrom: this.vendorTaxIdFromControl, // ผุ้ขาย
      vendorTaxIdTo: this.vendorTaxIdToControl, // ผุ้ขาย
      disbursementCodeFrom: this.disbursementCodeFromControl, // รหัสหน่วยเบิกจ่าย
      disbursementCodeTo: this.disbursementCodeToControl, // รหัสหน่วยเบิกจ่าย

      docTypeFrom: this.docTypeFromControl, // ประเภทเอกสาร
      docTypeTo: this.docTypeToControl, // ประเภทเอกสาร
      payMethodFrom: this.payMethodFromControl, // วิธีชำระเงิน
      payMethodTo: this.payMethodToControl, // วิธีชำระเงิน
      documentDateFrom: this.documentDateFromControl, // วันที่เอกสาร
      documentDateTo: this.documentDateToControl, // วันที่เอกสาร
      documentCreateDateFrom: this.documentCreateDateFromControl, // วันที่บันทึก
      documentCreateDateTo: this.documentCreateDateToControl, // วันที่บันทึก
      specialTypeFrom: this.specialTypeFromControl, // แยกประเภทพิเศษ
      specialTypeTo: this.specialTypeToControl, // แยกประเภทพิเศษ

      outline: this.outlineControl, // โครงร่าง

    });
  }

  // openDialogSearch(type) {

  //   const dialogRef = this.dialog.open(DialogSearchVendorComponent, {
  //     height: '400px',
  //     width: '600px',
  //     data: {},
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {

  //     }
  //   });
  // }
  openDialogSearch(): void {
    const dialogRef = this.dialog.open(DialogSearchVendorComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  openCollapseDetail() {
    this.isOpenCollapseDetail = !this.isOpenCollapseDetail;
  }

}
