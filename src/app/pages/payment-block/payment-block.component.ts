import { PaymentBlockService } from './../../core/service/om/payment-block.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-block',
  templateUrl: './payment-block.component.html',
  styleUrls: ['./payment-block.component.scss']
})
export class PaymentBlockComponent implements OnInit {

  listDocument = [];
  listMessageResponse = [];
  constructor(

    private paymentBlockService: PaymentBlockService,
  ) { }

  ngOnInit() {
    this.onSearch()
  }

  onSearch() {
    // const form = this.omFormCreate.value;
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
    // //วันผ่านรายการ
    // let postDateFrom = ''
    // let postDateTo = ''
    // if (form.postDateFrom && form.postDateTo) {
    //   const dayPostDateFrom = form.postDateFrom.getDate();
    //   const monthPostDateFrom = form.postDateFrom.getMonth() + 1;
    //   const yearPostDateFrom = form.postDateFrom.getFullYear();
    //   const dayPostDateTo = form.postDateTo.getDate();
    //   const monthPostDateTo = form.postDateTo.getMonth() + 1;
    //   const yearPostDateTo = form.postDateTo.getFullYear();
    //   postDateFrom = this.utils.parseDate(dayPostDateFrom, monthPostDateFrom, yearPostDateFrom);
    //   postDateTo = this.utils.parseDate(dayPostDateTo, monthPostDateTo, yearPostDateTo);
    // }
    // //วันที่เอกสาร
    // let documentDateFrom = ''
    // let documentDateTo = ''
    // if (form.documentDateFrom && form.documentDateTo) {
    //   const dayDocumentDateFrom = form.documentDateFrom.getDate();
    //   const monthDocumentDateFrom = form.documentDateFrom.getMonth() + 1;
    //   const yearDocumentDateFrom = form.documentDateFrom.getFullYear();
    //   const dayDocumentDateTo = form.documentDateTo.getDate();
    //   const monthDocumentDateTo = form.documentDateTo.getMonth() + 1;
    //   const yearDocumentDateTo = form.documentDateTo.getFullYear();
    //   documentDateFrom = this.utils.parseDate(dayDocumentDateFrom, monthDocumentDateFrom, yearDocumentDateFrom);
    //   documentDateTo = this.utils.parseDate(dayDocumentDateTo, monthDocumentDateTo, yearDocumentDateTo);
    // }
    // // วันที่บันทึก
    // let documentCreateDateFrom = ''
    // let documentCreateDateTo = ''
    // if (form.documentCreateDateFrom && form.documentCreateDateTo) {
    //   const dayDocumentCreateDateFrom = form.documentCreateDateFrom.getDate();
    //   const monthDocumentCreateDateFrom = form.documentCreateDateFrom.getMonth() + 1;
    //   const yearDocumentCreateDateFrom = form.documentCreateDateFrom.getFullYear();
    //   const dayDocumentCreateDateTo = form.documentCreateDateTo.getDate();
    //   const monthDocumentCreateDateTo = form.documentCreateDateTo.getMonth() + 1;
    //   const yearDocumentCreateDateTo = form.documentCreateDateTo.getFullYear();
    //   documentCreateDateFrom = this.utils.parseDate(dayDocumentCreateDateFrom, monthDocumentCreateDateFrom, yearDocumentCreateDateFrom);
    //   documentCreateDateTo = this.utils.parseDate(dayDocumentCreateDateTo, monthDocumentCreateDateTo, yearDocumentCreateDateTo);
    // }

    // payload.compCodeFrom = form.departmentCodeFrom // รหัสหน่วยงาน
    // payload.compCodeTo = form.departmentCodeTo // รหัสหน่วยงาน
    // payload.fiAreaFrom = form.provinceCodeFrom // รหัสจังหวัด
    // payload.fiAreaTo = form.provinceCodeTo // รหัสจังหวัด
    // payload.fiscalYear = this.utils.convertYearToAD(form.yearAccount) // ปีบัญชี
    // payload.dateAcctFrom = postDateFrom // วันผ่านรายการ
    // payload.dateAcctTo = postDateTo// วันผ่านรายการ
    // payload.bPartnerFrom = form.vendorTaxIdFrom // ผุ้ขาย
    // payload.bPartnerTo = form.vendorTaxIdTo // ผุ้ขาย
    // payload.paymentCenterFrom = form.disbursementCodeFrom // รหัสหน่วยเบิกจ่าย
    // payload.paymentCenterTo = form.disbursementCodeTo // รหัสหน่วยเบิกจ่าย

    // payload.docTypeFrom = form.docTypeFrom // ประเภทเอกสาร
    // payload.docTypeTo = form.docTypeTo // ประเภทเอกสาร
    // payload.paymentMethodFrom = form.payMethodFrom // วิธีชำระเงิน
    // payload.paymentMethodTo = form.payMethodTo // วิธีชำระเงิน
    // payload.dateDocFrom = documentDateFrom// วันที่เอกสาร
    // payload.dateDocTo = documentDateTo// วันที่เอกสาร
    // payload.dateCreatedFrom = documentCreateDateFrom // วันที่บันทึก
    // payload.dateCreatedTo = documentCreateDateTo// วันที่บันทึก
    // payload.specialGlFrom = form.specialTypeFrom // แยกประเภทพิเศษ
    // payload.specialGlTo = form.specialTypeTo // แยกประเภทพิเศษ

    // payload.= form.outline // โครงร่าง

    this.search(payload)



  }

  search(payload) {
    // this.loadingScreenService.loadingToggleStatus(true)
    // this.listDocument = [];
    this.paymentBlockService.search(payload).subscribe(data => {
      // this.loadingScreenService.loadingToggleStatus(false)
      // this.isDataSearchloaded = true;
      const response = data as any;
      const result = response.data;
      console.log(result)
      if (result) {
        if (result.length > 0 && result.length <= 500) {
          this.listDocument = result;



         
          // this.selectedTabIndex = 1;
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
}
