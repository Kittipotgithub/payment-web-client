import { PaymentService } from './../../core/service/payment/payment.service';
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

  paymentDateControl: FormControl; // วันที่ประมวลผล
  paymentNameControl: FormControl; // การกำหนด
  statusControl: FormControl;//สถานะ


  isDisabledCopy: boolean = true


  mockupJSON = {
    "payment": {
      "paymentDate": "2020-01-29T17:00:00.000Z",
      "paymentName": "H0001",
      "status": ""
    },
    "parameter": {
      "postDate": "2019-12-31T17:00:00.000Z",
      "saveDate": "2020-01-01T17:00:00.000Z",
      "paymentMethod": "IJ04",
      "paymentDate": "2020-01-02T17:00:00.000Z",
      "company": "12005,(3004,3003),1234",
      "companyCondition": [
        {
          "companyFrom": "12005",
          "companyTo": ""
        },
        {
          "companyFrom": "3004",
          "companyTo": "3003"
        }
      ],
      "vendor": [
        {
          "vendorTaxIdFrom": "0105535159165",
          "vendorTaxIdTo": ""
        },
        {
          "vendorTaxIdFrom": "3100501579102",
          "vendorTaxIdTo": "3100501579109"
        },
        {
          "vendorTaxIdFrom": "1233",
          "vendorTaxIdTo": ""
        }
      ]
    },
    "independent": [
      {
        "fieldName": "เลขที่เอกสาร",
        "conditionField": "12005,(3004,3003)",
        "optionExclude": true,
        "dataType": "string",
        "dbName": "v",
        "tableName": "accDocNo",
        "condition": [
          {
            "conditionFieldFrom": "12005",
            "conditionFieldTo": ""
          },
          {
            "conditionFieldFrom": "3004",
            "conditionFieldTo": "3003"
          }
        ]
      },
      {
        "fieldName": "ประเภทเอกสาร",
        "conditionField": "12005",
        "optionExclude": false,
        "dataType": "string",
        "dbName": "v",
        "tableName": "accDocNo",
        "condition": [
          {
            "conditionFieldFrom": "12005",
            "conditionFieldTo": ""
          }
        ]
      },
      {
        "fieldName": "วิธีการชำระเงิน",
        "conditionField": "F,(1,2)",
        "optionExclude": true,
        "dataType": "string",
        "dbName": "v",
        "tableName": "accDocNo",
        "condition": [
          {
            "conditionFieldFrom": "F",
            "conditionFieldTo": ""
          },
          {
            "conditionFieldFrom": "1",
            "conditionFieldTo": "2"
          }
        ]
      }
    ],
    "additionLog": {
      "checkBoxDueDate": true,
      "checkBoxPaymentMethodAll": false,
      "checkBoxPaymentMethodUnSuccess": true,
      "checkBoxDisplayDetail": true,
      "vendor": [
        {
          "vendorTaxIdFrom": "222",
          "vendorTaxIdTo": ""
        },
        {
          "vendorTaxIdFrom": "111",
          "vendorTaxIdTo": ""
        },
        {
          "vendorTaxIdFrom": "333",
          "vendorTaxIdTo": "7777"
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

  paymentCondition = null

  tabSelectedIndex = 0;
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private utils: Utils,
    private formBuilder: FormBuilder,
    private paymentService: PaymentService
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
    this.paymentDateControl = this.formBuilder.control('');// วันที่ประมวลผล
    this.paymentNameControl = this.formBuilder.control('');// การกำหนด
    this.statusControl = this.formBuilder.control('');//สถานะ
  }
  createHomeFormGroup() {
    this.homeForm = this.formBuilder.group({
      paymentDate: this.paymentDateControl,// วันที่ประมวลผล
      paymentName: this.paymentNameControl,// การกำหนด
      status: this.statusControl//สถานะ
    });
  }
  defaultHomeForm() {
    this.homeForm.patchValue({
      paymentDate: '',// วันที่ประมวลผล
      paymentName: '', // การกำหนด
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



      this.paymentCondition = {
        payment: this.homeForm.value,
        parameter: this.listObjectParameterTabForpayment,
        independent: this.listObjectIndependentTabForpayment,
        additionLog: this.listObjectAdditionLogTabForpayment,

      }
      console.log(this.paymentCondition)
      const jsonObject = JSON.stringify(this.paymentCondition)
      console.log(jsonObject)
      // });

      this.createParameter(jsonObject)
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
        paymentDate: this.mockupJSON.payment.paymentDate,// วันที่ประมวลผล
        paymentName: this.mockupJSON.payment.paymentName, // การกำหนด
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
          paymentDate: '',// วันที่ประมวลผล
          paymentName: result.value, // การกำหนด
          // status: this.mockupJSON.payment.status//สถานะ
        });
      }
    });
  }

  createParameter(payload) {

    const formValue = this.homeForm.value
    const data = {
      paymentDate: formValue.paymentDate,
      paymentName: formValue.paymentName,
    }
    this.paymentService.create(data).subscribe(result => {
      console.log(result)

      this.paymentCondition = result.data
      console.log(this.paymentCondition)
    })

  }

  test() {

    if (this.isDisabledCopy) {
      this.isDisabledCopy = false
    } else {
      this.isDisabledCopy = true
    }

    console.log(this.isDisabledCopy)
  }

}
