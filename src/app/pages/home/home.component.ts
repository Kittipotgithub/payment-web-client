import { DialogCopyParameterComponent } from './../../shared/component/dialog-copy-parameter/dialog-copy-parameter.component';
import { AppDateAdapter, APP_DATE_FORMATS } from './../../shared/format-datepicker';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTabChangeEvent, MatDialog, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { DialogSaveParameterComponent } from 'src/app/shared/component/tab-status/dialog-save-parameter/dialog-save-parameter.component';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { TabParameterComponent } from '../tab-parameter/tab-parameter.component';
import { TabAdditionalLogComponent } from '../tab-additional-log/tab-additional-log.component';
import { TabIndependentComponent } from '../tab-independent/tab-independent.component';


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

  @ViewChild(TabParameterComponent, { static: true }) private tabParameterComponent: TabParameterComponent;
  @ViewChild(TabAdditionalLogComponent, { static: true }) private tabAdditionalLogComponent: TabAdditionalLogComponent;
  @ViewChild(TabIndependentComponent, { static: true }) private tabIndependentComponent: TabIndependentComponent;


  listObjectParameterTab: object = null
  listObjectParameterTabForpayment: object = null

  listObjectAdditionLogTab: object = null
  listObjectAdditionLogTabForpayment: object = null

  listObjectIndependentTab: object = null
  listObjectIndependentTabForpayment: object = null






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


  receiveObjectFromParameter($event) {
    console.log('receiveObjectFromParameter')
    this.listObjectParameterTab = $event
    console.log(this.listObjectParameterTab)
  }
  receiveObjectFromAdditionLog($event) {
    console.log('receiveObjectFromAdditionLog')
    this.listObjectAdditionLogTab = $event
    console.log(this.listObjectAdditionLogTab)
  }


  tabChanged(tabChangeEvent: MatTabChangeEvent): void {

    this.tabSelectedIndex = tabChangeEvent.index;
    // console.log(this.tabSelectedIndex)
    if (this.tabSelectedIndex === 0) {
      this.tabParameterComponent.updateParameter()
      this.tabAdditionalLogComponent.updateParameter()

      if (this.listObjectParameterTabForpayment !== this.listObjectParameterTab) {

        const dialogRef = this.dialog.open(DialogSaveParameterComponent, {
        });

        dialogRef.afterClosed().subscribe(result => {
          // console.log('The dialog was closed');
          this.listObjectParameterTabForpayment = this.listObjectParameterTab

        });
      }



    }
    else if (this.tabSelectedIndex !== 1) {
      this.tabParameterComponent.updateParameter()
      this.tabAdditionalLogComponent.updateParameter()
    }
  }


}
