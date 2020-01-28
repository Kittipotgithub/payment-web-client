import { Component, OnInit, ViewChildren, ElementRef, QueryList, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  paymentMethod: string;

}
@Component({
  selector: 'app-dialog-search-payment-method',
  templateUrl: './dialog-search-payment-method.component.html',
  styleUrls: ['./dialog-search-payment-method.component.scss']
})
export class DialogSearchPaymentMethodComponent implements OnInit {
  @ViewChildren('checkBoxPaymentMethod') checkBoxPaymentMethod: QueryList<ElementRef>;



  paymentMethod = [

    { id: '1', name: '1 - จ่ายตรงผู้ขาย เงินงบประมาณ', selected: false },
    { id: '3', name: '3 - จ่ายตรงผู้ขายเงินนอกงบประมาณ', selected: false },
    { id: 'I', name: 'I - จ่ายตรงผู้ขายที่เป็นสรก. ในงบ', selected: false },
    { id: 'J', name: 'J - จ่ายตรงผู้ขายที่เป็นสรก. นอกงบ', selected: false },
    { id: '6', name: '6 - จ่ายสำรองค.กเงินกู้ตปท. - Direct', selected: false },

    { id: '0', name: '0 - จ่ายตรงจากแหล่งเงินกู้ นอก TR1', selected: false },
    { id: '2', name: '2 - จ่ายเงินในงบให้ Agency-Indirect', selected: false },
    { id: '4', name: '4 - จ่ายเงินนอกงบให้ Agency-Indirect', selected: false },
    { id: '5', name: '5 - จ่ายเงินนอกงปม. นอก TR1', selected: false },
    { id: '7', name: '7 - จ่ายสำรองค.ก.เงินกู้ตปท. -Indir', selected: false }
  ]

  paymentSelected = ''

  constructor(
    private dialogRef: MatDialogRef<DialogSearchPaymentMethodComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    dialogRef.disableClose = false;
    dialogRef.backdropClick().subscribe(() => {
      console.log("close dialog")
      // ส่ง event param ตาม ปกติเลย
      this.dialogRef.close({ event: false });
    })
  }


  ngOnInit() {
    if (this.data.paymentMethod) {
      this.paymentSelected = this.data.paymentMethod
      this.checkPaymentMethodSelecet()
    }
  }

  checkPaymentMethodSelecet() {
    if (this.paymentSelected.length > 0 && this.paymentSelected) {
      let paymentAll = this.paymentSelected.split('')
      paymentAll.forEach(payment => {
        this.paymentMethod.forEach(item => {
          if (item.id === payment) {
            item.selected = true
          }
        })
      })
    }
  }


  closeDialog(): void {
    this.dialogRef.close(
      {
        event: false
      }
    );
  }
  confirmSelect() {
    this.paymentSelected = ''
    this.checkBoxPaymentMethod.toArray().forEach(item => {
      const data = item as any
      if (data._checked) {
        this.paymentSelected += data.value
      }
    })
    this.dialogRef.close(
      {
        event: true,
        value: this.paymentSelected
      });
  }

}
