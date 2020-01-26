

import { Component, OnInit, Output, Inject, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor() { }

  ngOnInit() {
  }

}
