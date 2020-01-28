import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogSearchParameterComponent } from '../dialog-search-parameter/dialog-search-parameter.component';

@Component({
  selector: 'app-dialog-copy-parameter',
  templateUrl: './dialog-copy-parameter.component.html',
  styleUrls: ['./dialog-copy-parameter.component.scss']
})
export class DialogCopyParameterComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DialogSearchParameterComponent>,private dialog: MatDialog
  ) { }

  OpenDiaDate(): void {
    const dialog = this.dialog.open(DialogSearchParameterComponent, {
    });

    dialog.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
  closeDialog(): void {
    const dialogRef = this.dialogRef.close();

  }

  ngOnInit() {
  }

}
