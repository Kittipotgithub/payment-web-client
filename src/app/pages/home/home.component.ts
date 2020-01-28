import { DialogCopyParameterComponent } from './../../shared/component/dialog-copy-parameter/dialog-copy-parameter.component';
import { AppDateAdapter, APP_DATE_FORMATS } from './../../shared/format-datepicker';
import { Component, OnInit, Input } from '@angular/core';
import { MatTabChangeEvent, MatDialog, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { DialogSaveParameterComponent } from 'src/app/shared/component/tab-status/dialog-save-parameter/dialog-save-parameter.component';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
   providers: [
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
  ],
})
export class HomeComponent implements OnInit {

  listObjectParameterTab = []
  listObjectIndependentTab = []



  tabSelectedIndex = 0;
  constructor(
    private dialog: MatDialog,
    private router: Router,
  ) { }

  openDialogCopyParameterComponent(): void {
    const dialogRef = this.dialog.open(DialogCopyParameterComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  

  ngOnInit() {



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
      });

      dialogRef.afterClosed().subscribe(result => {
        // console.log('The dialog was closed');

      });
    }
  }


}
