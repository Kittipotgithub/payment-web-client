import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';


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
  styleUrls: ['./dialog-search-field.component.scss']
})
export class DialogSearchFieldComponent implements OnInit {
  searchFiledFormCreate: FormGroup;

  typeControl: FormControl; // ชื่อฟิลด์


  displayedColumns: string[] = ['filedName', 'filedTable'];

  dataSource = [];
  defaultFiled =
    [
      { filedTable: '1', filedName: 'เลขที่เอกสาร' },
      { filedTable: '2', filedName: 'ประเภทเอกสาร' },
      { filedTable: '3', filedName: 'วันผ่านรายการ' },
      { filedTable: '4', filedName: 'การอ้างอิง' },
      { filedTable: '5', filedName: 'แหล่งของเงิน' },
      { filedTable: '6', filedName: 'วิธีการชำระเงิน' },
      { filedTable: '7', filedName: 'การระงับการชำระเงิน' }
    ]
  documentFiled =
    [
      { filedTable: '1', filedName: 'เลขที่เอกสาร' },

    ]
  vendorFiled =
    [

      { filedTable: '6', filedName: 'วิธีการชำระเงิน' },
      { filedTable: '7', filedName: 'การระงับการชำระเงิน' }
    ]

  constructor(
    private dialogRef: MatDialogRef<DialogSearchFieldComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formBuilder: FormBuilder,

  ) {

    this.dataSource = this.defaultFiled

  }

  ngOnInit() {
    this.createSearchFiledFormControl();
    this.createSearchFiledFormGroup();

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
    // this.errorMessage = '';
    this.dialogRef.close({
      event: true,
      type: this.data.type,
      value: row.filedName,

    });
  }
  changeType(event) {
    if (event.value === '1') {
      this.dataSource = this.defaultFiled
    } else if (event.value === '2') {
      this.dataSource = this.documentFiled
    } else if (event.value === '3') {
      this.dataSource = this.vendorFiled
    }

  }
}
