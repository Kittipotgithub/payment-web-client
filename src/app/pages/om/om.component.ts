import { DialogDetailDocumentComponent } from './../../shared/component/dialog-detail-document/dialog-detail-document.component';
import { PaymentBlockService } from './../../core/service/om/payment-block.service';
import { DialogSearchVendorComponent } from './../../shared/component/tab-param/dialog-search-vendor/dialog-search-vendor.component';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Utils } from 'src/app/shared/utils';
import { DialogSearchMasterComponent } from 'src/app/shared/component/dialog-search-master/dialog-search-master.component';

@Component({
  selector: 'app-om',
  templateUrl: './om.component.html',
  styleUrls: ['./om.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class OmComponent implements OnInit {

  panleExpanded = true;
  panleExpanded1 = true;
  panleExpanded2 = true;


  omFormCreate: FormGroup;
  departmentCodeFromControl: FormControl; // รหัสหน่วยงาน
  departmentCodeToControl: FormControl; // รหัสหน่วยงาน
  provinceCodeFromControl: FormControl; // รหัสจังหวัด
  provinceCodeToControl: FormControl; // รหัสจังหวัด
  yearAccountControl: FormControl; // ปีบัญชี
  postDateFromControl: FormControl; // วันผ่านรายการ
  postDateToControl: FormControl; // วันผ่านรายการ
  vendorTaxIdFromControl: FormControl; // ผุ้ขาย
  vendorTaxIdToControl: FormControl; // ผุ้ขาย
  disbursementCodeFromControl: FormControl; // รหัสหน่วยเบิกจ่าย
  disbursementCodeToControl: FormControl; // รหัสหน่วยเบิกจ่าย

  docTypeFromControl: FormControl; // ประเภทเอกสาร
  docTypeToControl: FormControl; // ประเภทเอกสาร
  payMethodFromControl: FormControl; // วิธีชำระเงิน
  payMethodToControl: FormControl; // วิธีชำระเงิน
  documentDateFromControl: FormControl; // วันที่เอกสาร
  documentDateToControl: FormControl; // วันที่เอกสาร
  documentCreateDateFromControl: FormControl; // วันที่บันทึก
  documentCreateDateToControl: FormControl; // วันที่บันทึก
  specialTypeFromControl: FormControl; // แยกประเภทพิเศษ
  specialTypeToControl: FormControl; // แยกประเภทพิเศษ

  outlineControl: FormControl; // โครงร่าง


  isOpenCollapseDetail //เปิดปิด collpase


  // listDocument = [];
  listMessageResponse = [];

  listDocument = [
    {
      "id": null,
      "docType": "KC",
      "compCode": "12005",
      "userWeb": "120050000110",
      "dateDoc": 1578330000000,
      "datePost": 1578330000000,
      "reference": "P630000100",
      "currency": null,
      "revDocPost": null,
      "revReasonPost": null,
      "paymentCenter": null,
      "amount": null,
      "poDocNo": null,
      "invDocNo": null,
      "revInvDocNo": null,
      "paymentMethod": null,
      "costCenter1": null,
      "costCenter2": null,
      "brDocNo": null,
      "period": 0,
      "vendor": null,
      "vendorTaxId": null,
      "payee": null,
      "accDocNo": "3100000197",
      "revAccDocNo": null,
      "fiscYear": "2020",
      "revFiscYear": null,
      "docHeaderText": null,
      "headerDesc": null,
      "hdRefLog": "IFW201005972E02",
      "hdRef2": "1200500001",
      "previousDocNo": null,
      "postingKey": "31",
      "accType": "K",
      "drCr": "C",
      "glAcc": "2101010102",
      "fiArea": "1000",
      "costCenter": "1200500001",
      "fundSource": "6311220",
      "bgCode": "12005630017003100001",
      "bgActivity": "P1000",
      "costActivity": null,
      "reference3": null,
      "assignment": null,
      "brLine": 0,
      "bankBook": null,
      "gpsc": null,
      "subAcc": null,
      "subAccOwner": null,
      "depositAccOwner": null,
      "depositAcc": null,
      "lineItemText": null,
      "lineDesc": null,
      "paymentTerm": "1",
      "wtxType": null,
      "wtxCode": null,
      "wtxBase": null,
      "wtxAmount": null,
      "wtxTypeP": null,
      "wtxCodeP": null,
      "wtxBaseP": null,
      "wtxAmountP": null,
      "bankAccNo": null,
      "bankBranchNo": null,
      "tradingPartner": null,
      "tradingPartnerBusArea": null,
      "gpscGroup": null,
      "specialGL": null,
      "creditMemoDocNo": null,
      "creditMemoFiscalYear": null,
      "dateBaseline": 1578330000000,
      "dateValue": null,
      "assetNo": null,
      "assetSubNo": null,
      "qty": 0,
      "uom": null,
      "uomIso": null,
      "reference1": "OTH2",
      "reference2": null,
      "poLine": 0,
      "income": null,
      "paymentBlock": "B",
      "paymentRef": null
    }
  ]

  animal: string;
  name: string;
  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private utils: Utils,
    private paymentBlockService: PaymentBlockService,

  ) { }

  ngOnInit() {
    this.utils.listYear = this.utils.CalculateYear()
    this.utils.fiscYear = this.utils.CalculateFiscYear(new Date());

    this.createFormControl();
    this.createFormGroup();

  }

  createFormControl() {
    this.departmentCodeFromControl = this.formBuilder.control(''); // รหัสหน่วยงาน
    this.departmentCodeToControl = this.formBuilder.control(''); // รหัสหน่วยงาน
    this.provinceCodeFromControl = this.formBuilder.control(''); // รหัสจังหวัด
    this.provinceCodeToControl = this.formBuilder.control(''); // รหัสจังหวัด
    this.yearAccountControl = this.formBuilder.control(this.utils.fiscYear); // ปีบัญชี
    this.postDateFromControl = this.formBuilder.control(''); // วันผ่านรายการ
    this.postDateToControl = this.formBuilder.control(''); // วันผ่านรายการ
    this.vendorTaxIdFromControl = this.formBuilder.control(''); // ผุ้ขาย
    this.vendorTaxIdToControl = this.formBuilder.control(''); // ผุ้ขาย
    this.disbursementCodeFromControl = this.formBuilder.control(''); // รหัสหน่วยเบิกจ่าย
    this.disbursementCodeToControl = this.formBuilder.control(''); // รหัสหน่วยเบิกจ่าย

    this.docTypeFromControl = this.formBuilder.control(''); // ประเภทเอกสาร
    this.docTypeToControl = this.formBuilder.control(''); // ประเภทเอกสาร
    this.payMethodFromControl = this.formBuilder.control(''); // วิธีชำระเงิน
    this.payMethodToControl = this.formBuilder.control(''); // วิธีชำระเงิน
    this.documentDateFromControl = this.formBuilder.control(''); // วันที่เอกสาร
    this.documentDateToControl = this.formBuilder.control(''); // วันที่เอกสาร
    this.documentCreateDateFromControl = this.formBuilder.control(''); // วันที่บันทึก
    this.documentCreateDateToControl = this.formBuilder.control(''); // วันที่บันทึก
    this.specialTypeFromControl = this.formBuilder.control(''); // แยกประเภทพิเศษ
    this.specialTypeToControl = this.formBuilder.control(''); // แยกประเภทพิเศษ

    this.outlineControl = this.formBuilder.control(''); // โครงร่าง

  }

  createFormGroup() {
    this.omFormCreate = this.formBuilder.group({
      departmentCodeFrom: this.departmentCodeFromControl, // รหัสหน่วยงาน
      departmentCodeTo: this.departmentCodeToControl, // รหัสหน่วยงาน
      provinceCodeFrom: this.provinceCodeFromControl, // รหัสจังหวัด
      provinceCodeTo: this.provinceCodeToControl, // รหัสจังหวัด
      yearAccount: this.yearAccountControl, // ปีบัญชี
      postDateFrom: this.postDateFromControl, // วันผ่านรายการ
      postDateTo: this.postDateToControl, // วันผ่านรายการ
      vendorTaxIdFrom: this.vendorTaxIdFromControl, // ผุ้ขาย
      vendorTaxIdTo: this.vendorTaxIdToControl, // ผุ้ขาย
      disbursementCodeFrom: this.disbursementCodeFromControl, // รหัสหน่วยเบิกจ่าย
      disbursementCodeTo: this.disbursementCodeToControl, // รหัสหน่วยเบิกจ่าย

      docTypeFrom: this.docTypeFromControl, // ประเภทเอกสาร
      docTypeTo: this.docTypeToControl, // ประเภทเอกสาร
      payMethodFrom: this.payMethodFromControl, // วิธีชำระเงิน
      payMethodTo: this.payMethodToControl, // วิธีชำระเงิน
      documentDateFrom: this.documentDateFromControl, // วันที่เอกสาร
      documentDateTo: this.documentDateToControl, // วันที่เอกสาร
      documentCreateDateFrom: this.documentCreateDateFromControl, // วันที่บันทึก
      documentCreateDateTo: this.documentCreateDateToControl, // วันที่บันทึก
      specialTypeFrom: this.specialTypeFromControl, // แยกประเภทพิเศษ
      specialTypeTo: this.specialTypeToControl, // แยกประเภทพิเศษ

      outline: this.outlineControl, // โครงร่าง

    });
  }


  openDialogSearch(): void {
    const dialogRef = this.dialog.open(DialogSearchMasterComponent, {
      width: '500px',
      data: { type: 'areaCode' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  openCollapseDetail() {
    this.isOpenCollapseDetail = !this.isOpenCollapseDetail;
  }


  onSearch() {
    const form = this.omFormCreate.value;
    const payload = {
      compCodeFrom: '',
      compCodeTo: '',
      fiAreaFrom: '',
      fiAreaTo: '',
      fiscalYear: '',
      dateAcctFrom: '',
      dateAcctTo: '',
      bPartnerFrom: '',
      bPartnerTo: '',
      paymentCenterFrom: '',
      paymentCenterTo: '',
      docTypeFrom: '',
      docTypeTo: '',
      paymentMethodFrom: '',
      paymentMethodTo: '',
      dateDocFrom: '',
      dateDocTo: '',
      dateCreatedFrom: '',
      dateCreatedTo: '',
      specialGlFrom: '',
      specialGlTo: ''
    }
    //วันผ่านรายการ
    let postDateFrom = ''
    let postDateTo = ''
    if (form.postDateFrom && form.postDateTo) {
      const dayPostDateFrom = form.postDateFrom.getDate();
      const monthPostDateFrom = form.postDateFrom.getMonth() + 1;
      const yearPostDateFrom = form.postDateFrom.getFullYear();
      const dayPostDateTo = form.postDateTo.getDate();
      const monthPostDateTo = form.postDateTo.getMonth() + 1;
      const yearPostDateTo = form.postDateTo.getFullYear();
      postDateFrom = this.utils.parseDate(dayPostDateFrom, monthPostDateFrom, yearPostDateFrom);
      postDateTo = this.utils.parseDate(dayPostDateTo, monthPostDateTo, yearPostDateTo);
    }
    //วันที่เอกสาร
    let documentDateFrom = ''
    let documentDateTo = ''
    if (form.documentDateFrom && form.documentDateTo) {
      const dayDocumentDateFrom = form.documentDateFrom.getDate();
      const monthDocumentDateFrom = form.documentDateFrom.getMonth() + 1;
      const yearDocumentDateFrom = form.documentDateFrom.getFullYear();
      const dayDocumentDateTo = form.documentDateTo.getDate();
      const monthDocumentDateTo = form.documentDateTo.getMonth() + 1;
      const yearDocumentDateTo = form.documentDateTo.getFullYear();
      documentDateFrom = this.utils.parseDate(dayDocumentDateFrom, monthDocumentDateFrom, yearDocumentDateFrom);
      documentDateTo = this.utils.parseDate(dayDocumentDateTo, monthDocumentDateTo, yearDocumentDateTo);
    }
    // วันที่บันทึก
    let documentCreateDateFrom = ''
    let documentCreateDateTo = ''
    if (form.documentCreateDateFrom && form.documentCreateDateTo) {
      const dayDocumentCreateDateFrom = form.documentCreateDateFrom.getDate();
      const monthDocumentCreateDateFrom = form.documentCreateDateFrom.getMonth() + 1;
      const yearDocumentCreateDateFrom = form.documentCreateDateFrom.getFullYear();
      const dayDocumentCreateDateTo = form.documentCreateDateTo.getDate();
      const monthDocumentCreateDateTo = form.documentCreateDateTo.getMonth() + 1;
      const yearDocumentCreateDateTo = form.documentCreateDateTo.getFullYear();
      documentCreateDateFrom = this.utils.parseDate(dayDocumentCreateDateFrom, monthDocumentCreateDateFrom, yearDocumentCreateDateFrom);
      documentCreateDateTo = this.utils.parseDate(dayDocumentCreateDateTo, monthDocumentCreateDateTo, yearDocumentCreateDateTo);
    }

    payload.compCodeFrom = form.departmentCodeFrom // รหัสหน่วยงาน
    payload.compCodeTo = form.departmentCodeTo // รหัสหน่วยงาน
    payload.fiAreaFrom = form.provinceCodeFrom // รหัสจังหวัด
    payload.fiAreaTo = form.provinceCodeTo // รหัสจังหวัด
    payload.fiscalYear = this.utils.convertYearToAD(form.yearAccount) // ปีบัญชี
    payload.dateAcctFrom = postDateFrom // วันผ่านรายการ
    payload.dateAcctTo = postDateTo// วันผ่านรายการ
    payload.bPartnerFrom = form.vendorTaxIdFrom // ผุ้ขาย
    payload.bPartnerTo = form.vendorTaxIdTo // ผุ้ขาย
    payload.paymentCenterFrom = form.disbursementCodeFrom // รหัสหน่วยเบิกจ่าย
    payload.paymentCenterTo = form.disbursementCodeTo // รหัสหน่วยเบิกจ่าย

    payload.docTypeFrom = form.docTypeFrom // ประเภทเอกสาร
    payload.docTypeTo = form.docTypeTo // ประเภทเอกสาร
    payload.paymentMethodFrom = form.payMethodFrom // วิธีชำระเงิน
    payload.paymentMethodTo = form.payMethodTo // วิธีชำระเงิน
    payload.dateDocFrom = documentDateFrom// วันที่เอกสาร
    payload.dateDocTo = documentDateTo// วันที่เอกสาร
    payload.dateCreatedFrom = documentCreateDateFrom // วันที่บันทึก
    payload.dateCreatedTo = documentCreateDateTo// วันที่บันทึก
    payload.specialGlFrom = form.specialTypeFrom // แยกประเภทพิเศษ
    payload.specialGlTo = form.specialTypeTo // แยกประเภทพิเศษ

    // payload.= form.outline // โครงร่าง

    this.search(payload)



  }

  search(payload) {
    // this.loadingScreenService.loadingToggleStatus(true)
    this.listDocument = [];
    this.paymentBlockService.search(payload).subscribe(data => {
      // this.loadingScreenService.loadingToggleStatus(false)
      // this.isDataSearchloaded = true;
      const response = data as any;
      const result = response.data;
      console.log(result)
  
      if (result) {
        if (result.length > 0 && result.length <= 500) {
          // this.listDocument = result;
          // // this.selectedTabIndex = 1;
          // let i = 0
          // this.listDocument.forEach(document => {
          //   document.no = i++
          //   document.approve = false;
          //   document.notApprove = false;
          //   document.reason = ''
          // });
        } else if (result.length > 500) {
          this.listMessageResponse.push('ไม่สามารถแสดงผลการค้นหาเกิน 500 รายการได้ กรุณาเปลี่ยนเงื่อนไขการค้นหาใหม่');
        } else {
          this.listMessageResponse.push('ไม่พบเอกสาร');
        }
      } else {
        this.listMessageResponse.push('ไม่พบเอกสาร');
      }
    });
  }

  openDialogDetailDocument(document) {
    const dialogRef = this.dialog.open(DialogDetailDocumentComponent, {
      width: '1200px',
      data: {
        document
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      }
    });
  }
}
