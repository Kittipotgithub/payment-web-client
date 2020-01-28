import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-search-payment-method',
  templateUrl: './dialog-search-payment-method.component.html',
  styleUrls: ['./dialog-search-payment-method.component.scss']
})
export class DialogSearchPaymentMethodComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DialogSearchPaymentMethodComponent>
  ) { }

  closeDialog(): void {
    const dialogRef = this.dialogRef.close();

  }

  ngOnInit() {
  }
}
