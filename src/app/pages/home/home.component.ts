import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  /*navLinks = [
    {path: 'status', label: 'สถานะ'},
    {path: 'parameter', label: 'พาราฯ'},
    {path: 'freedom', label: 'การเลือกอิสระ'},
    {path: 'log', label: 'Log เพิ่มเติม'},
    {path: 'report', label: 'รายงาน/สื่อกลางข้อมูล'},
  ];*/

  test ='3435'

  constructor() { }

  ngOnInit() {
   
  }

}
