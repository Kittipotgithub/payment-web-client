import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogSearchParameterComponent } from '../dialog-search-parameter/dialog-search-parameter.component';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from '../../format-datepicker';

@Component({
  selector: 'app-dialog-copy-parameter',
  templateUrl: './dialog-copy-parameter.component.html',
  styleUrls: ['./dialog-copy-parameter.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
  ],
})
export class DialogCopyParameterComponent implements OnInit {
  copyParameterForm: FormGroup;

  paymentDateControl: FormControl; // วันที่ประมวลผล
  paymentNameControl: FormControl; // การกำหนด
  adjustDateControl: FormControl; // รายละเอียดวันที่ปรับปรุง

  constructor(
    private dialogRef: MatDialogRef<DialogSearchParameterComponent>,
    private dialog: MatDialog,
    private formBuilder: FormBuilder
  ) {
    dialogRef.backdropClick().subscribe(() => {
      console.log('close dialog');
      // ส่ง event param ตาม ปกติเลย
      this.dialogRef.close({ event: false });
    });
  }

  ngOnInit() {
    this.createCopyParameterFormControl();
    this.createCopyParameterFormGroup();
    this.defaultCopyParameterForm();
  }
  createCopyParameterFormControl() {
    this.paymentDateControl = this.formBuilder.control(''); // วันที่ประมวลผล
    this.paymentNameControl = this.formBuilder.control(''); // การกำหนด
    this.adjustDateControl = this.formBuilder.control(''); // รายละเอียดวันที่ปรับปรุง
  }
  createCopyParameterFormGroup() {
    this.copyParameterForm = this.formBuilder.group({
      paymentDate: this.paymentDateControl, // วันที่ประมวลผล
      paymentName: this.paymentNameControl, // การกำหนด
      adjustDate: this.adjustDateControl, // รายละเอียดวันที่ปรับปรุง
    });
  }
  defaultCopyParameterForm() {
    this.copyParameterForm.patchValue({
      paymentDate: '', // วันที่ประมวลผล
      paymentName: '', // การกำหนด
      adjustDate: false, // รายละเอียดวันที่ปรับปรุง
    });
  }

  openDialogSearchParameterComponent(): void {
    const dialog = this.dialog.open(DialogSearchParameterComponent, {});

    dialog.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result && result.event) {
        this.copyParameterForm.patchValue({
          paymentDate: new Date(result.paymentDate), // วันที่ประมวลผล
          paymentName: result.paymentName, // การกำหนด
        });
      }
    });
  }

  clickSave() {
    this.dialogRef.close({
      event: true,
      value: this.copyParameterForm.value,
    });
  }

  clickCancel() {
    this.dialogRef.close({
      event: true,
      value: 'Cancel',
    });
  }
}
