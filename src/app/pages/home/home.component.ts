<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { DialogSearchVendorComponent } from 'src/app/shared/component/tab-param/dialog-search-vendor/dialog-search-vendor.component';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { CopyComponent } from '../copy/copy.component';

=======
import { Component, OnInit, Input } from '@angular/core';
import { MatTabChangeEvent, MatDialog } from '@angular/material';
import { DialogSaveParameterComponent } from 'src/app/shared/component/tab-status/dialog-save-parameter/dialog-save-parameter.component';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
>>>>>>> b0c8077c236df75a7c4d5fd0b5d8a2443ebb8b47

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

<<<<<<< HEAD
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(CopyComponent, {
      
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
=======
  listObjectParameterTab = []
  listObjectIndependentTab = []

  m_select='23'


  tabSelectedIndex = 0;
  constructor(
    private dialog: MatDialog,
    private router: Router,
  ) { }
>>>>>>> b0c8077c236df75a7c4d5fd0b5d8a2443ebb8b47

  ngOnInit() {

    // // this.test()
    // this.router.events.pipe(filter((event: RouterEvent) => event instanceof NavigationEnd)).subscribe(() => {
    //   console.log(this.listObjectParameterTab)

    // });

  }
  test() {

    console.log('boss')
    const data = {
      boss: 1
    }
    this.listObjectParameterTab.push(data)
    console.log(this.listObjectParameterTab)
    // this.router.navigate(['']);

  }

  receiveObjectFromParameter($event) {
    console.log('receiveObjectFromParameter')
    console.log($event)
    this.listObjectParameterTab = $event
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {

    this.tabSelectedIndex = tabChangeEvent.index;
    // console.log(this.tabSelectedIndex)
    if (this.tabSelectedIndex === 0) {
      const dialogRef = this.dialog.open(DialogSaveParameterComponent, {
        width: '250px',
        data: {}
      });

      dialogRef.afterClosed().subscribe(result => {
        // console.log('The dialog was closed');

      });
    }
  }


}
