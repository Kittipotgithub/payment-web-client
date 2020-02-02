import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tab-status',
  templateUrl: './tab-status.component.html',
  styleUrls: ['./tab-status.component.scss'],
})
export class TabStatusComponent implements OnInit {
  // Open panal
  panleExpanded = true;

  isDisabledParameterStatus: boolean = true;
  isDisabledProposalStatus: boolean = true;
  isDisabledRunStatus: boolean = true;

  listShowMessage = [];

  constructor() {}

  ngOnInit() {}

  showStatus(have, object) {
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
}
