import { Component, OnInit } from '@angular/core';
import { DialogSearchVendorComponent } from 'src/app/shared/component/tab-param/dialog-search-vendor/dialog-search-vendor.component';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { CopyComponent } from '../copy/copy.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(CopyComponent, {
      
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  ngOnInit() {
  }


}
