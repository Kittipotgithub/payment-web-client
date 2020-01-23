import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AccountTableComponent } from '../account-table/account-table.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<AccountComponent>
  ) { }

  test(): void {
    const dialogRef = this.dialog.open(AccountTableComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  closeDialog(): void {
    const dialogRef = this.dialogRef.close();

  }

  ngOnInit() {
  }

}
