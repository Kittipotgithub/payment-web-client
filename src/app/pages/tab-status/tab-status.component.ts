import { PaymentAliasService } from 'src/app/core/service/payment-alias/payment-alias.service';
import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tab-status',
  templateUrl: './tab-status.component.html',
  styleUrls: ['./tab-status.component.scss'],
})
export class TabStatusComponent implements OnInit {
  @Output() actionFromStatus = new EventEmitter<any>();
  // Open panal
  panleExpanded = true;

  isDisabledParameterStatus: boolean = true;
  isDisabledProposalStatus: boolean = true;
  isDisabledRunStatus: boolean = true;
  listSearchPaymentDetail: any = null; //data from search
  listShowMessage = [];

  constructor(private paymentAliasService: PaymentAliasService) {}

  ngOnInit() {}

  showStatus(have, object) {
    console.log('showStatus');
    console.log(object);
    this.listSearchPaymentDetail = object;
    this.listShowMessage = [];
    if (have) {
      console.log(object);
      const parameterStatus = object.parameterStatus;
      const proposalStatus = object.proposalStatus;
      const runStatus = object.runStatus;

      if (parameterStatus) {
        if (parameterStatus === 'S') {
          this.listShowMessage.push('บันทึกพารามิเตอร์แล้ว');
        } else {
          this.listShowMessage.push('ยังไม่บันทึกพารามิเตอร์แล้ว');
        }
      }

      if (proposalStatus) {
        if (proposalStatus === 'S') {
          this.listShowMessage.push('สร้างข้อเสนอสำเร็จ');
        } else {
          this.listShowMessage.push('สร้างข้อเสนอไม่สำเร็จ');
        }
      }
      if (runStatus) {
        if (runStatus === 'S') {
          this.listShowMessage.push('ประมวลผลชำระเงินสำเร็จ');
        } else {
          this.listShowMessage.push('ประมวลผลชำระเงินไม่สำเร็จ');
        }
      }
      console.log(this.listShowMessage);

      console.log('have');
    } else {
      console.log('no have');
      this.listShowMessage.push('ยังไม่บันทึกพารามิเตอร์แล้ว');
    }
  }
  deleteProposal() {
    console.log(this.listSearchPaymentDetail);
    if (this.listSearchPaymentDetail) {
      if (this.listSearchPaymentDetail.id) {
        const data = {
          paymentDate: this.listSearchPaymentDetail.paymentDate,
          paymentName: this.listSearchPaymentDetail.paymentName,
          proposalStatus: 'DELETE',
        };

        this.paymentAliasService.update(data, this.listSearchPaymentDetail.id).then(result => {
          console.log(result);
          this.actionFromStatus.emit();
          // this.searchPaymentDetail();
          // console.log(result);
        });
      }
    }
  }
}
