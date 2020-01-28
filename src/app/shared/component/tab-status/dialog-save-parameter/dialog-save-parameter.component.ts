import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {

}
@Component({
  selector: 'app-dialog-save-parameter',
  templateUrl: './dialog-save-parameter.component.html',
  styleUrls: ['./dialog-save-parameter.component.scss']
})
export class DialogSaveParameterComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogSaveParameterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  closeDialog(): void {
    this.dialogRef.close();

  }

  ngOnInit() {
  }

}
