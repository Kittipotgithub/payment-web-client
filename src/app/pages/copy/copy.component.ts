import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CopydateComponent } from '../copydate/copydate.component';

@Component({
  selector: 'app-copy',
  templateUrl: './copy.component.html',
  styleUrls: ['./copy.component.scss']
})
export class CopyComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<CopyComponent>,private dialog: MatDialog
  ) { }

  OpenDiaDate(): void {
    const dialog = this.dialog.open(CopydateComponent, {
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
