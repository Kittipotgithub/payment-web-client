import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface PeriodicElement {
  name: string;
  date: any;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  
  { date: 1580556948725, name: 'A0001', description: 'ผ่านรายการการชำระเงินแล้ว' },
  { date: 1580556948725, name: 'H0001', description: 'ผ่านรายการการชำระเงินแล้ว' },
  { date: 1580556948725, name: 'C0001', description: 'ผ่านรายการการชำระเงินแล้ว' },
  { date: 1577879219000, name: 'A0002', description: 'ผ่านรายการการชำระเงินแล้ว' },
  { date: 1577879219000, name: 'B0002', description: 'ผ่านรายการการชำระเงินแล้ว' },
  { date: 1577879219000, name: 'C0002', description: 'ผ่านรายการการชำระเงินแล้ว' },
  { date: 1578052019000, name: 'A0002', description: 'ผ่านรายการการชำระเงินแล้ว' },
  { date: 1578052019000, name: 'B0002', description: 'ผ่านรายการการชำระเงินแล้ว' },
  { date: 1578052019000, name: 'C0002', description: 'ผ่านรายการการชำระเงินแล้ว' },
  { date: 1580039219000, name: 'A0002', description: 'ผ่านรายการการชำระเงินแล้ว' },
  { date: 1580039219000, name: 'B0002', description: 'ผ่านรายการการชำระเงินแล้ว' },
  { date: 1580039219000, name: 'C0002', description: 'ผ่านรายการการชำระเงินแล้ว' },

];

@Component({
  selector: 'app-dialog-search-parameter',
  templateUrl: './dialog-search-parameter.component.html',
  styleUrls: ['./dialog-search-parameter.component.scss']
})
export class DialogSearchParameterComponent implements OnInit {
  displayedColumns: string[] = ['choose', 'date', 'name', 'description'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private dialogRef: MatDialogRef<DialogSearchParameterComponent>
  ) { }

  closeDialog(): void {
    const dialogRef = this.dialogRef.close();

  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  chooseDataSearch(data) {
    console.log(data)
    // this.errorMessage = '';
    this.dialogRef.close({
      event: true,
      // type: this.data.type,
      date: data.date,
      name: data.name,

    });
  }
}
