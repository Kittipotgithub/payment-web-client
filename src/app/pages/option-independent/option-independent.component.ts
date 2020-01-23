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

  containers = [];

  add() {
    this.containers.push(this.containers.length);
  }

  del() {
    this.containers.splice(this.containers.length-1);
  }

  //modifedtext: string;

  constructor() { }

  public show;
  public show1;
  public show2;
  public show3;
  public show4;
  
  ngOnInit() {
  }

  toggle() {
    this.show = true;
  }

  toggle1() {
    this.show1 = true;
  }

  toggle2() {
    this.show2 = true;
  }

  toggle3() {
    this.show3 = true;
  }

  /*toggle4() {
    this.show4 = true;
  }*/

}
