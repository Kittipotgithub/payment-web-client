import { Component, OnInit } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-option-independent',
  templateUrl: './option-independent.component.html',
  styleUrls: ['./option-independent.component.scss']
})
export class OptionIndependentComponent implements OnInit {

  modifedtext: string;
  
  foods: Food[] = [
    {value: '1', viewValue: 'เลขที่เอกสาร'},
    {value: '2', viewValue: 'ประเภทเอกสาร'},
    {value: '3', viewValue: 'วันผ่านรายการ'},
    {value: '4', viewValue: 'การอ้างอิง'},
    {value: '5', viewValue: 'แหล่งของเงิน'},
    {value: '6', viewValue: 'วิธีการชำระเงิน'},
    {value: '7', viewValue: 'การระงับการชำระเงิน'},
    {value: '8', viewValue: 'อื่นๆ'}
  ];

  constructor() { }

  ngOnInit() {
  }


}
