import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-statuspopup',
  templateUrl: './statuspopup.component.html',
  styleUrls: ['./statuspopup.component.scss']
})
export class StatuspopupComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<StatuspopupComponent>,private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  closeDialog(): void {
    const dialogRef = this.dialogRef.close();

  }

}
