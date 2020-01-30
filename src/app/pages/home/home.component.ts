import { Utils } from 'src/app/shared/utils';
import { DialogCopyParameterComponent } from './../../shared/component/dialog-copy-parameter/dialog-copy-parameter.component';
import { AppDateAdapter, APP_DATE_FORMATS } from './../../shared/format-datepicker';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTabChangeEvent, MatDialog, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { DialogSaveParameterComponent } from 'src/app/shared/component/tab-status/dialog-save-parameter/dialog-save-parameter.component';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { TabParameterComponent } from '../tab-parameter/tab-parameter.component';
import { TabAdditionalLogComponent } from '../tab-additional-log/tab-additional-log.component';
import { TabIndependentComponent } from '../tab-independent/tab-independent.component';
import { filter } from 'rxjs/operators';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
import { DialogSearchParameterComponent } from 'src/app/shared/component/dialog-search-parameter/dialog-search-parameter.component';


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


  homeForm: FormGroup;

  dateDocumentControl: FormControl; // วันที่ประมวลผล
  defineControl: FormControl; // การกำหนด
  statusControl: FormControl;//สถานะ




  mockupJSON = {
    "payment": {
      "dateDocument": "2020-01-29T17:00:00.000Z",
      "define": "ABCD",
      "status": "S"
    },
    "parameter": {
      "postDate": "2019-12-31T17:00:00.000Z",
      "saveDate": "2020-01-03T17:00:00.000Z",
      "paymentMethod": "13IJ602457",
      "paymentDate": "2019-12-31T17:00:00.000Z",
      "companyCode": [
        {
          "companyCodeFrom": "12005",
          "companyCodeTo": ""
        }
      ],
      "vendor": [
        {
          "id": 1,
          "vendorTaxIdFrom": "111111111111",
          "vendorTaxIdTo": ""
        },
        {
          "id": 2,
          "vendorTaxIdFrom": "222222",
          "vendorTaxIdTo": "33333"
        },
        {
          "id": 3,
          "vendorTaxIdFrom": "5555",
          "vendorTaxIdTo": ""
        },
        {
          "id": 4,
          "vendorTaxIdFrom": "999",
          "vendorTaxIdTo": ""
        },
        {
          "id": 5,
          "vendorTaxIdFrom": "888",
          "vendorTaxIdTo": ""
        },
        {
          "id": 6,
          "vendorTaxIdFrom": "",
          "vendorTaxIdTo": ""
        }
      ]
    },
    "independent": [
      {
        "id": 1,
        "fieldName": "วันผ่านรายการ",
        "conditionfield": "12321123",
        "optionInclude": false
      },
      {
        "id": 2,
        "fieldName": "การอ้างอิง",
        "conditionfield": "aaaaaa",
        "optionInclude": true
      },
      {
        "id": 3,
        "fieldName": "วิธีการชำระเงิน",
        "conditionfield": "F",
        "optionInclude": false
      }
    ],
    "additionLog": {
      "checkBoxDueDate": true,
      "checkBoxPaymentMethodAll": false,
      "checkBoxPaymentMethodUnsuccess": true,
      "checkBoxDisplayDetail": true,
      "vendor": [
        {
          "id": 1,
          "vendorTaxIdFrom": "aa",
          "vendorTaxIdTo": "f"
        },
        {
          "id": 2,
          "vendorTaxIdFrom": "bb",
          "vendorTaxIdTo": ""
        },
        {
          "id": 3,
          "vendorTaxIdFrom": "cc",
          "vendorTaxIdTo": "g"
        }
      ]
    }
  }

  testList =
    {
      "postDate": "",
      "saveDate": "",
      "paymentMethod": "",
      "paymentDate": "",
      "companyCode": "",
      "vendor": [
        {
          "id": 1,
          "vendorTaxIdFrom": "",
          "vendorTaxIdTo": ""
        },
        {
          "id": 2,
          "vendorTaxIdFrom": "",
          "vendorTaxIdTo": ""
        }
      ]
    }
  testList1 =
    {
      "postDate": "",
      "saveDate": "",
      "paymentMethod": "",
      "paymentDate": "",
      "companyCode": "",
      "vendor": [
        {
          "id": 1,
          "vendorTaxIdFrom": "",
          "vendorTaxIdTo": ""
        },
        {
          "id": 2,
          "vendorTaxIdFrom": "",
          "vendorTaxIdTo": ""
        }
      ]
    }


  tabSelectedIndex = 0;
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private utils: Utils,
    private formBuilder: FormBuilder,
  ) {

  }

 


  ngOnInit() {
    // console.log(JSON.stringify(this.testList.vendor))
    // console.log(JSON.stringify(this.testList1.vendor))
    // if (JSON.stringify(this.testList.vendor) === JSON.stringify(this.testList1.vendor)) {
    //   console.log('boss')
    // } else {
    //   console.log('aaa')
    // }


    // this.listObjectParameterTab = this.mockupJSON.parameter
    // this.listObjectIndependentTab = this.mockupJSON.independent
    // this.listObjectAdditionLogTab = this.mockupJSON.additionLog
    this.createHomeFormControl()
    this.createHomeFormGroup()
    this.defaultHomeForm()
  }

  createHomeFormControl() {
    this.dateDocumentControl = this.formBuilder.control('');// วันที่ประมวลผล
    this.defineControl = this.formBuilder.control('');// การกำหนด
    this.statusControl = this.formBuilder.control('');//สถานะ
  }
  createHomeFormGroup() {
    this.homeForm = this.formBuilder.group({
      dateDocument: this.dateDocumentControl,// วันที่ประมวลผล
      define: this.defineControl,// การกำหนด
      status: this.statusControl//สถานะ
    });
  }
  defaultHomeForm() {
    this.homeForm.patchValue({
      dateDocument: '',// วันที่ประมวลผล
      define: '', // การกำหนด
      status: ''//สถานะ
    });
  }

  receiveObjectFromParameter($event) {
    // console.log('receiveObjectFromParameter')
    this.listObjectParameterTab = $event
    // console.log(this.listObjectParameterTab)
  }
  receiveObjectFromAdditionLog($event) {
    // console.log('receiveObjectFromAdditionLog')
    this.listObjectAdditionLogTab = $event
    // console.log(this.listObjectAdditionLogTab)
  }
  receiveObjectFromIndependent($event) {
    // console.log('receiveObjectFromIndependent')
    this.listObjectIndependentTab = $event
    // console.log(this.listObjectIndependentTab)
  }


  tabChanged(tabChangeEvent: MatTabChangeEvent): void {

    this.tabSelectedIndex = tabChangeEvent.index;
    // console.log(this.tabSelectedIndex)
    if (this.tabSelectedIndex === 0) {


      this.tabParameterComponent.updateParameter()
      this.tabAdditionalLogComponent.updateParameter()
      this.tabIndependentComponent.updateParameter()


      console.log(this.testList.vendor)
      console.log(this.listObjectParameterTabForpayment)
      console.log(this.listObjectParameterTab)

      const jsonParameterForPayment = JSON.stringify(this.listObjectParameterTabForpayment)
      const jsonParameter = JSON.stringify(this.listObjectParameterTab)
      console.log(jsonParameterForPayment)
      console.log(jsonParameter)



      if (jsonParameterForPayment === jsonParameter) {
        console.log('boss1')
      } else {
        console.log('pop')
      }
      this.listObjectParameterTabForpayment = this.listObjectParameterTab


      // const dialogRef = this.dialog.open(DialogSaveParameterComponent, {
      // });

      // dialogRef.afterClosed().subscribe(result => {
      //   // console.log('The dialog was closed');
      this.listObjectParameterTabForpayment = this.listObjectParameterTab
      this.listObjectIndependentTabForpayment = this.listObjectIndependentTab
      this.listObjectAdditionLogTabForpayment = this.listObjectAdditionLogTab


      this.homeForm.patchValue({
        status: 'S'
      })
      const object = {
        payment: this.homeForm.value,
        parameter: this.listObjectParameterTabForpayment,
        independent: this.listObjectIndependentTabForpayment,
        additionLog: this.listObjectAdditionLogTabForpayment,
     
      }
      console.log(object)
      const jsonObject = JSON.stringify(object)
      console.log(jsonObject)
      // });

    }
    // else if (this.tabSelectedIndex !== 1) {
    //   this.tabParameterComponent.updateParameter()
    //   this.tabAdditionalLogComponent.updateParameter()
    //   this.tabIndependentComponent.updateParameter()
    // }
    else if (this.tabSelectedIndex === 1) {
      if (this.listObjectParameterTab) {
        this.tabParameterComponent.ngOnInit()
      }
    }
    else if (this.tabSelectedIndex === 2) {
      if (this.listObjectIndependentTab) {
        this.tabIndependentComponent.ngOnInit()
      }
    }
    else if (this.tabSelectedIndex === 3) {
      if (this.listObjectAdditionLogTab) {
        this.tabAdditionalLogComponent.ngOnInit()
      }
    }
  }
  openDialogCopyParameterComponent(): void {
    const dialogRef = this.dialog.open(DialogCopyParameterComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.listObjectParameterTab = this.mockupJSON.parameter
      this.listObjectIndependentTab = this.mockupJSON.independent
      this.listObjectAdditionLogTab = this.mockupJSON.additionLog

      // this.router.events.pipe(filter((event: RouterEvent) => event instanceof NavigationEnd)).subscribe(() => {
      //   this.tabParameterComponent.ngOnInit()
      //   this.tabIndependentComponent.ngOnInit()
      //   this.tabAdditionalLogComponent.ngOnInit()

      // });
      // this.tabParameterComponent.ngOnInit()
      this.homeForm.patchValue({
        dateDocument: this.mockupJSON.payment.dateDocument,// วันที่ประมวลผล
        define: this.mockupJSON.payment.define, // การกำหนด
        status: this.mockupJSON.payment.status//สถานะ
      });
      this.tabParameterComponent.getParameterFromCopy(this.listObjectParameterTab)
      this.tabIndependentComponent.getIndependentFromCopy(this.listObjectIndependentTab)
      this.tabAdditionalLogComponent.getAdditionLogFromCopy(this.listObjectAdditionLogTab)
      // this.tabAdditionalLogComponent.ngOnInit()
      console.log(this.listObjectParameterTab)
      console.log(this.listObjectIndependentTab)
      console.log(this.listObjectAdditionLogTab)

    
    });
  }
  openDialogSearchParameterComponent(): void {
    const dialog = this.dialog.open(DialogSearchParameterComponent, {
    });

    dialog.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result && result.event) {
        this.homeForm.patchValue({
          dateDocument: '',// วันที่ประมวลผล
          define: result.value, // การกำหนด
          // status: this.mockupJSON.payment.status//สถานะ
        });
      }
    });
  }

}
