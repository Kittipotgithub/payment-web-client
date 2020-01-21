import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-copydate',
  templateUrl: './copydate.component.html',
  styleUrls: ['./copydate.component.scss']
})
export class CopydateComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<CopydateComponent>
  ) { }
  
  closeDialog(): void {
    const dialogRef = this.dialogRef.close();

  }
  
  ngOnInit() {
  }

}
