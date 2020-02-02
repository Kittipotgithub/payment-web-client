import { PaymentAliasService } from './../../core/service/payment-alias/payment-alias.service';
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
import { TabStatusComponent } from '../tab-status/tab-status.component';

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
  @ViewChild(TabStatusComponent, { static: true })
  private tabStatusComponent: TabStatusComponent;
  @ViewChild(TabParameterComponent, { static: true })
  private tabParameterComponent: TabParameterComponent;
  @ViewChild(TabAdditionalLogComponent, { static: true })
  private tabAdditionalLogComponent: TabAdditionalLogComponent;
  @ViewChild(TabIndependentComponent, { static: true })
  private tabIndependentComponent: TabIndependentComponent;

  listObjectParameterTab: any = null;
  // listObjectParameterTabForpayment: object = null

  listObjectAdditionLogTab: any = null;
  // listObjectAdditionLogTabForpayment: object = null

  listObjectIndependentTab: any = null;
  // listObjectIndependentTabForpayment: object = null

  homeForm: FormGroup;

  paymentDateControl: FormControl; // วันที่ประมวลผล
  paymentNameControl: FormControl; // การกำหนด

  isDisabledCopy = false;

  paymentCondition = null;

  tabSelectedIndex = 0;
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private utils: Utils,
    private formBuilder: FormBuilder,
    private paymentAliasService: PaymentAliasService
  ) {}

  ngOnInit() {
    localStorage.setItem('parameterTabForpayment', null);
    localStorage.setItem('independentTabForpayment', null);
    localStorage.setItem('additionLogTabForpayment', null);

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
    this.createHomeFormControl();
    this.createHomeFormGroup();
    this.defaultHomeForm();

    this.tabStatusComponent.showStatus(false, []);
  }

  createHomeFormControl() {
    this.paymentDateControl = this.formBuilder.control(''); // วันที่ประมวลผล
    this.paymentNameControl = this.formBuilder.control(''); // การกำหนด
  }
  createHomeFormGroup() {
    this.homeForm = this.formBuilder.group({
      paymentDate: this.paymentDateControl, // วันที่ประมวลผล
      paymentName: this.paymentNameControl, // การกำหนด
    });
  }
  defaultHomeForm() {
    this.homeForm.patchValue({
      paymentDate: '', // วันที่ประมวลผล
      paymentName: '', // การกำหนด
    });
  }
  clearInputAll() {
    this.defaultHomeForm();
    this.tabParameterComponent.defaultInput();
    this.tabIndependentComponent.defaultIndependet();
    this.tabAdditionalLogComponent.defaultInputAdditionLogForm();
    this.isDisabledCopy = false;
    this.tabStatusComponent.showStatus(false, []);
  }

  receiveObjectFromParameter($event) {
    // console.log('receiveObjectFromParameter')
    this.listObjectParameterTab = $event;
    // console.log(this.listObjectParameterTab)
  }
  receiveObjectFromAdditionLog($event) {
    // console.log('receiveObjectFromAdditionLog')
    this.listObjectAdditionLogTab = $event;
    // console.log(this.listObjectAdditionLogTab)
  }
  receiveObjectFromIndependent($event) {
    // console.log('receiveObjectFromIndependent')
    this.listObjectIndependentTab = $event;
    // console.log(this.listObjectIndependentTab)
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.tabSelectedIndex = tabChangeEvent.index;
    if (this.tabSelectedIndex === 0) {
      this.tabParameterComponent.updateParameter();
      this.tabAdditionalLogComponent.updateParameter();
      this.tabIndependentComponent.updateParameter();

      const parameterTabForpaymentString = localStorage.getItem('parameterTabForpayment');
      const listObjectParameterTabString = JSON.stringify(this.listObjectParameterTab);

      const independentTabForpaymentString = localStorage.getItem('independentTabForpayment');
      const listObjectIndependentTabString = JSON.stringify(this.listObjectIndependentTab);

      const additionLogTabForpaymentString = localStorage.getItem('additionLogTabForpayment');
      const listObjectAdditionLogTabString = JSON.stringify(this.listObjectAdditionLogTab);

      const formValue = this.homeForm.value;
      if (
        (parameterTabForpaymentString !== listObjectParameterTabString ||
          independentTabForpaymentString !== listObjectIndependentTabString ||
          additionLogTabForpaymentString !== listObjectAdditionLogTabString) &&
        formValue.paymentDate &&
        formValue.paymentName
      ) {
        const dialogRef = this.dialog.open(DialogSaveParameterComponent, {});

        dialogRef.afterClosed().subscribe(result => {
          console.log(result);
          if (result.event) {
            if (result.value === 'Save') {
              this.paymentCondition = {
                parameter: this.listObjectParameterTab,
                independent: this.listObjectIndependentTab,
                additionLog: this.listObjectAdditionLogTab,
              };
              localStorage.setItem(
                'parameterTabForpayment',
                JSON.stringify(this.listObjectParameterTab)
              );
              localStorage.setItem(
                'independentTabForpayment',
                JSON.stringify(this.listObjectIndependentTab)
              );
              localStorage.setItem(
                'additionLogTabForpayment',
                JSON.stringify(this.listObjectAdditionLogTab)
              );
              this.searchParameterAfterCreateOrUpdate();
            } else if (result.value === 'UnSave') {
              console.log(localStorage.getItem('parameterTabForpayment'));
              this.tabParameterComponent.getParameterFromCopy(
                JSON.parse(localStorage.getItem('parameterTabForpayment'))
              );
              this.tabIndependentComponent.getIndependentFromCopy(
                JSON.parse(localStorage.getItem('independentTabForpayment'))
              );
              this.tabAdditionalLogComponent.getAdditionLogFromCopy(
                JSON.parse(localStorage.getItem('additionLogTabForpayment'))
              );
            }
          }
        });
      }
    }
  }
  openDialogCopyParameterComponent(type): void {
    const dialogRef = this.dialog.open(DialogCopyParameterComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result && result.event) {
        const data = result.value;
        if (type === 'copy') {
          this.searchPaymentDetailFromCopy(data, 'copy');
        } else if (type === 'search') {
          this.homeForm.patchValue({
            paymentDate: new Date(data.paymentDate), // วันที่ประมวลผล
            paymentName: data.paymentName, // การกำหนด
          });
          this.searchPaymentDetailFromCopy(data, 'search');
        }
      }
    });
  }

  onPaymentDate() {
    const formValue = this.homeForm.value;
    if (formValue.paymentDate && formValue.paymentName) {
      this.searchPaymentDetailFromCopy(formValue, 'search');
    }
  }

  onBlurPaymentName() {
    const formValue = this.homeForm.value;
    if (formValue.paymentDate && formValue.paymentName) {
      this.searchPaymentDetailFromCopy(formValue, 'search');
    }
  }

  searchPaymentDetailFromCopy(copy, type) {
    console.log(copy);
    const value = copy;
    const date = new Date(value.paymentDate);
    const dayPaymentDate = date.getDate();
    const monthPaymentDate = date.getMonth() + 1;
    const yearPaymentDate = date.getFullYear();
    const paymentDate = this.utils.parseDate(dayPaymentDate, monthPaymentDate, yearPaymentDate);
    const paymentName = value.paymentName;
    this.paymentAliasService.search(paymentDate, paymentName).then(result => {
      console.log(result);
      if (result.status === 200) {
        const formValue = this.homeForm.value;
        const data = result.data;
        if (data) {
          // console.log('The dialog was closed');
          const jsonObject = JSON.parse(data.jsonText);
          const proposalStatus = data.proposalStatus;
          const runStatus = data.runStatus;

          if (type === 'search') {
            if (proposalStatus) {
              this.isDisabledCopy = true;
            } else if (proposalStatus) {
              this.isDisabledCopy = false;
            } else if (runStatus) {
              this.isDisabledCopy = true;
            } else if (!runStatus) {
              this.isDisabledCopy = false;
            }
          } else {
            this.isDisabledCopy = false;
          }
          this.listObjectParameterTab = jsonObject.parameter as any;
          this.listObjectIndependentTab = jsonObject.independent;
          this.listObjectAdditionLogTab = jsonObject.additionLog;
          if (copy.adjustDate) {
            if (formValue.paymentDate) {
              this.listObjectParameterTab.postDate = formValue.paymentDate;
              this.listObjectParameterTab.saveDate = formValue.paymentDate;
            }
          }
          this.tabParameterComponent.getParameterFromCopy(this.listObjectParameterTab);
          this.tabIndependentComponent.getIndependentFromCopy(this.listObjectIndependentTab);
          this.tabAdditionalLogComponent.getAdditionLogFromCopy(this.listObjectAdditionLogTab);
          if (type === 'search') {
            this.tabStatusComponent.showStatus(true, data);
          } else {
            this.tabStatusComponent.showStatus(false, data);
          }
        }
      } else if (result.status === 404) {
        const data = result.error;
        this.tabStatusComponent.showStatus(false, data);
      }
    });
  }

  searchParameterAfterCreateOrUpdate() {
    const formValue = this.homeForm.value;
    const date = new Date(formValue.paymentDate);
    const dayPaymentDate = date.getDate();
    const monthPaymentDate = date.getMonth() + 1;
    const yearPaymentDate = date.getFullYear();
    const paymentDate = this.utils.parseDate(dayPaymentDate, monthPaymentDate, yearPaymentDate);
    const paymentName = formValue.paymentName;
    this.paymentAliasService.search(paymentDate, paymentName).then(result => {
      console.log(result);
      if (result.status === 200) {
        const data = result.data;
        if (data) {
          this.updateParameter(this.paymentCondition, data);
          this.tabStatusComponent.showStatus(true, data);
        }
      } else if (result.status === 404) {
        const data = result.error;
        this.createParameter(this.paymentCondition);
        this.tabStatusComponent.showStatus(false, data);
      }
    });
  }

  createParameter(jsonObject) {
    const formValue = this.homeForm.value;
    const data = {
      paymentDate: formValue.paymentDate,
      paymentName: formValue.paymentName,
      jsonText: JSON.stringify(jsonObject),
    };
    this.paymentAliasService.create(data).then(result => {
      console.log(result);
      this.searchPaymentDetail();
    });
  }
  updateParameter(jsonObject, response) {
    const formValue = this.homeForm.value;
    const data = {
      paymentDate: formValue.paymentDate,
      paymentName: formValue.paymentName,
      jsonText: JSON.stringify(jsonObject),
    };
    console.log(data);
    this.paymentAliasService.update(data, response.id).then(result => {
      this.searchPaymentDetail();
      console.log(result);
    });
  }
  searchPaymentDetail() {
    const formValue = this.homeForm.value;
    const date = new Date(formValue.paymentDate);
    const dayPaymentDate = date.getDate();
    const monthPaymentDate = date.getMonth() + 1;
    const yearPaymentDate = date.getFullYear();
    const paymentDate = this.utils.parseDate(dayPaymentDate, monthPaymentDate, yearPaymentDate);
    const paymentName = formValue.paymentName;
    this.paymentAliasService.search(paymentDate, paymentName).then(result => {
      console.log('boss');
      console.log(result.status);
      if (result.status === 200) {
        const data = result.data;
        if (data) {
          this.tabStatusComponent.showStatus(true, data);
        }
      } else if (result.status === 404) {
        const data = result.error;
        this.tabStatusComponent.showStatus(false, data);
      }
    });
  }

  test() {
    if (this.isDisabledCopy) {
      this.isDisabledCopy = false;
    } else {
      this.isDisabledCopy = true;
    }

    console.log(this.isDisabledCopy);
  }
}
