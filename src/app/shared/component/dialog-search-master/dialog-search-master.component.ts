import { MasterService } from './../../../core/service/master/master.service';
import { Constant } from './../../constant';


import { Component, OnInit, Output, Inject, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Utils } from '../../utils';

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
  selector: 'app-dialog-search-master',
  templateUrl: './dialog-search-master.component.html',
  styleUrls: ['./dialog-search-master.component.scss']
})
export class DialogSearchMasterComponent implements OnInit {
  @Output() submitClicked = new EventEmitter<any>();
  title = 'ค้นหา';
  errorMessage = '';
  dataSource = [];
  dataSourceHeader = [];
  searchType = '';
  isLoading = false;

  isConditionShowSourceBudgetCode = false;

  userProfile: any

  listDocument=[
    {
      "code": "12005630000100000",
      "name": "พัฒนาระบบการให้บริการประชาชนแบบบูรณาการด้านการอนุรักษ์พลังงาน",
    },
    {
      "code": "12005630000100000",
      "name": "พัฒนาระบบการให้บริการประชาชนแบบบูรณาการด้านการอนุรักษ์พลังงาน",
    },
    
    {
      "code": "12005630000100000",
      "name": "พัฒนาระบบการให้บริการประชาชนแบบบูรณาการด้านการอนุรักษ์พลังงาน",
    },
    {
      "code": "12005630000100000",
      "name": "พัฒนาระบบการให้บริการประชาชนแบบบูรณาการด้านการอนุรักษ์พลังงาน",
    },
    {
      "code": "12005630000100000",
      "name": "พัฒนาระบบการให้บริการประชาชนแบบบูรณาการด้านการอนุรักษ์พลังงาน",
    },
    {
      "code": "12005630000100000",
      "name": "พัฒนาระบบการให้บริการประชาชนแบบบูรณาการด้านการอนุรักษ์พลังงาน",
    },
  ]


  constructor(
    public dialogRef: MatDialogRef<DialogSearchMasterComponent>,
    public constant: Constant,
    private masterService: MasterService,

    private utils: Utils,
    private _snackBar: MatSnackBar,

    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    dialogRef.disableClose = false;
  }

  ngOnInit() {
    // this.userProfile = this.localStorageService.getUserProfile();

    this.setTitle();
    this.searchType = this.data.type;
  }

  openSnackBar() {
    this._snackBar.open('เกิดความผิดพลาดขึ้น', '', {
      panelClass: '_warning',
    });
  }

  openSnackBar2() {
    this._snackBar.open('บันทึกเรียบร้อย', '', {
      panelClass: '_success',
    });
  }

  setTitle() {
    if (this.data.title !== undefined) {
      this.title = this.data.title;
    } else {
      if (this.data.type === 'departmentCode') {
        this.title = 'รหัสหน่วยงาน';
      } else if (this.data.type === 'provinceCode') {
        this.title = 'รหัสจังหวัด';
      } else if (this.data.type === 'disbursementCode') {
        this.title = 'รหัสหน่วยเบิกจ่าย';
      } else if (this.data.type === 'vendorTaxId') {
        this.title = 'รหัสผู้ขาย';
      }
    }
  }

  search(e) {
    this.errorMessage = '';
    this.dataSource = [];
    if (this.data.type === 'departmentCode') {
      this.loadDepartment(e.value);
    } else if (this.data.type === 'provinceCode') {
      this.loadArea(e.value);
    } else if (this.data.type === 'disbursementCode') {
      this.loadPaymentCenter(e.value);
    } else if (this.data.type === 'vendorTaxId') {
      this.loadVendor(e.value);
    }
  }

  onNoClick(): void {
    this.errorMessage = '';
    this.dialogRef.close({
      event: false,
      type: this.data.type,
      value: '',
    });
  }
  
  loadDepartment(textSearch) {
    const percent = textSearch.split('').filter(value => value === '%').length;
    for (let i = 0; i < percent; i++) {
      textSearch = textSearch.replace('%', '*');
    }
    const text = textSearch.split('').filter(value => value === '*').length;
    if (text > 2) {
      this.errorMessage = 'เงื่อนไขไม่ถูกต้อง';
      return false;
    } else {
      const checkCondtion = textSearch.indexOf('**');

      if (checkCondtion === -1) {
        if (textSearch === '*' || textSearch === '**') {
          this.errorMessage = 'เงื่อนไขไม่ถูกต้อง';
          return false;
        }
      } else {
        this.errorMessage = 'เงื่อนไขไม่ถูกต้อง';
        return false;
      }
    }
    this.errorMessage = '';
    this.isLoading = true;
    this.masterService.findCompanyCodeWithParam(textSearch).subscribe(data => {
      const response = data as any;
      this.isLoading = false;
      if (response.status === 'T') {
        this.dataSource = response.data;
        this.dataSourceHeader = this.constant.HEADER_DIALOG_SEARCH.areaCode;
      } else {
        this.errorMessage = response.message;
      }
    });
  }
  loadArea(textSearch) {
    const percent = textSearch.split('').filter(value => value === '%').length;
    for (let i = 0; i < percent; i++) {
      textSearch = textSearch.replace('%', '*');
    }
    const text = textSearch.split('').filter(value => value === '*').length;
    if (text > 2) {
      this.errorMessage = 'เงื่อนไขไม่ถูกต้อง';
      return false;
    } else {
      const checkCondtion = textSearch.indexOf('**');

      if (checkCondtion === -1) {
        if (textSearch === '*' || textSearch === '**') {
          this.errorMessage = 'เงื่อนไขไม่ถูกต้อง';
          return false;
        }
      } else {
        this.errorMessage = 'เงื่อนไขไม่ถูกต้อง';
        return false;
      }
    }
    this.errorMessage = '';
    this.isLoading = true;
    this.masterService.findAreaCodeWithParam(textSearch).subscribe(data => {
      const response = data as any;
      this.isLoading = false;
      if (response.status === 'T') {
        this.dataSource = response.data;
        this.dataSourceHeader = this.constant.HEADER_DIALOG_SEARCH.areaCode;
      } else {
        this.errorMessage = response.message;
      }
    });
  }

  loadPaymentCenter(textSearch) {
    const percent = textSearch.split('').filter(value => value === '%').length;
    for (let i = 0; i < percent; i++) {
      textSearch = textSearch.replace('%', '*');
    }
    const text = textSearch.split('').filter(value => value === '*').length;
    if (text > 2) {
      this.errorMessage = 'เงื่อนไขไม่ถูกต้อง';
      return false;
    } else {
      const checkCondtion = textSearch.indexOf('**');

      if (checkCondtion === -1) {
        if (textSearch === '*' || textSearch === '**') {
          this.errorMessage = 'เงื่อนไขไม่ถูกต้อง';
          return false;
        }
      } else {
        this.errorMessage = 'เงื่อนไขไม่ถูกต้อง';
        return false;
      }
    }
    this.errorMessage = '';
    this.isLoading = true;
    this.masterService.findPaymentCenterCodeWithParam(textSearch).subscribe(data => {
      const response = data as any;
      this.isLoading = false;
      if (response.status === 'T') {
        this.dataSource = response.data;
        this.dataSourceHeader = this.constant.HEADER_DIALOG_SEARCH.areaCode;
      } else {
        this.errorMessage = response.message;
      }
    });
  }
  loadVendor(textSearch) {
    const percent = textSearch.split('').filter(value => value === '%').length;
    for (let i = 0; i < percent; i++) {
      textSearch = textSearch.replace('%', '*');
    }
    const text = textSearch.split('').filter(value => value === '*').length;
    if (text > 2) {
      this.errorMessage = 'เงื่อนไขไม่ถูกต้อง';
      return false;
    } else {
      const checkCondtion = textSearch.indexOf('**');

      if (checkCondtion === -1) {
        if (textSearch === '*' || textSearch === '**') {
          this.errorMessage = 'เงื่อนไขไม่ถูกต้อง';
          return false;
        }
      } else {
        this.errorMessage = 'เงื่อนไขไม่ถูกต้อง';
        return false;
      }
    }
    this.errorMessage = '';
    this.isLoading = true;
    this.masterService.findVendorCodeWithParam(textSearch).subscribe(data => {
      const response = data as any;
      this.isLoading = false;
      if (response.status === 'T') {
        this.dataSource = response.data;
        this.dataSourceHeader = this.constant.HEADER_DIALOG_SEARCH.areaCode;
      } else {
        this.errorMessage = response.message;
      }
    });
  }

  chooseDataSearch(value, name, optional, optionalName) {
    this.errorMessage = '';
    this.dialogRef.close({
      event: true,
      type: this.data.type,
      value,
      name,
      optional,
      optionalName,
    });
  }
  chooseDataSearchBudgetReserve(value, name, optional1, optionalName1, optional2, optionalName2) {
    this.errorMessage = '';
    this.dialogRef.close({
      event: true,
      type: this.data.type,
      value,
      name,
      optional1,
      optionalName1,
      optional2,
      optionalName2,
    });
  }
}
