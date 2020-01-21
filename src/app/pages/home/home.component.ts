import { Component, OnInit, Input } from '@angular/core';
import { MatTabChangeEvent, MatDialog } from '@angular/material';
import { DialogSaveParameterComponent } from 'src/app/shared/component/tab-status/dialog-save-parameter/dialog-save-parameter.component';

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

  listObjectParameterTab = []
  listObjectIndependentTab = []


  tabSelectedIndex = 0;
  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit() {


  }

  receiveObjectFromParameter($event) {
    console.log('receiveObjectFromParameter')
    console.log($event)
    this.listObjectParameterTab = $event
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
   
    this.tabSelectedIndex = tabChangeEvent.index;
    console.log(this.tabSelectedIndex)
    if(this.tabSelectedIndex === 0){
       const dialogRef = this.dialog.open(DialogSaveParameterComponent, {
        width: '250px',
        data: {}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');

      });
    }
  }

}
