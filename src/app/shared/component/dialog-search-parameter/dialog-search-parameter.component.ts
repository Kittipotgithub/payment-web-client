import { ThaidatePipe } from './../../pipe/thaidate.pipe';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PaymentAliasService } from 'src/app/core/service/payment-alias/payment-alias.service';

@Component({
  selector: 'app-dialog-search-parameter',
  templateUrl: './dialog-search-parameter.component.html',
  styleUrls: ['./dialog-search-parameter.component.scss'],
})
export class DialogSearchParameterComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  displayedColumns: string[] = ['choose', 'paymentDate', 'paymentName', 'statusName'];

  dataSource = new MatTableDataSource([]);

  pipe: ThaidatePipe;
  constructor(
    private dialogRef: MatDialogRef<DialogSearchParameterComponent>,
    private paymentAliasService: PaymentAliasService
  ) {}

  closeDialog(): void {
    const dialogRef = this.dialogRef.close();
  }

  ngOnInit() {
    this.searchAllParameter();
  }

  chooseDataSearch(data) {
    console.log(data);
    // this.errorMessage = '';
    this.dialogRef.close({
      event: true,
      // type: this.data.type,
      paymentDate: data.paymentDate,
      paymentName: data.paymentName,
    });
  }

  searchAllParameter() {
    this.paymentAliasService.searchAllParameter().then(result => {
      console.log(result);
      if (result.status === 200) {
        const data = result.data;
        if (data) {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.sort = this.sort;
          this.setDateThaiForFilter();
        }
      } else if (result.status === 404) {
      }
    });
  }
  searchByValue(event) {
    const textSearch = event.value;
    console.log(textSearch);
    if (textSearch !== '') {
      this.paymentAliasService.searchByValue(textSearch).then(result => {
        console.log(result);
        if (result.status === 200) {
          const data = result.data;
          if (data) {
            this.dataSource = new MatTableDataSource(data);
            this.dataSource.sort = this.sort;
            this.setDateThaiForFilter();
          }
        } else if (result.status === 404) {
        }
      });
    } else {
      this.searchAllParameter();
    }
  }
  applyFilter(filterValue: string) {
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  setDateThaiForFilter() {
    this.pipe = new ThaidatePipe();
    // console.log('hi', this.dataSource.filterPredicate);
    const defaultPredicate = this.dataSource.filterPredicate;
    this.dataSource.filterPredicate = (data, filter) => {
      const formatted = this.pipe.transform(data.paymentDate, '');
      return formatted.indexOf(filter) >= 0 || defaultPredicate(data, filter);
    };
  }
}
