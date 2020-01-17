import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  
}
@Component({
  selector: 'app-dialog-search-vendor',
  templateUrl: './dialog-search-vendor.component.html',
  styleUrls: ['./dialog-search-vendor.component.scss']
})
export class DialogSearchVendorComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogSearchVendorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      dialogRef.disableClose = false;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
