import { PaymentBlockService } from './../../../core/service/om/payment-block.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';


import { MatSnackBar } from '@angular/material/snack-bar';
import { Constant } from '../../constant';


export interface DialogData {
  page: any;

  headerTable: [];
  document: any;
}
@Component({
  selector: 'app-dialog-detail-document',
  templateUrl: './dialog-detail-document.component.html',
  styleUrls: ['./dialog-detail-document.component.scss']
})
export class DialogDetailDocumentComponent implements OnInit {
  listResultPresave = [];
  resultSave = null;

  isPresaveSuccess = true;
  isSaveSuccess = false;
  allPage: any;
  pathPage: string;
  createPage: string;
  searchPage: string;
  backListPage: string;
  editPage: string;

  xml: string;
  jsonString: string;

  listDocument = []
  listMessageResponse = []
  p = 1;

  documentDetail

  isLoading: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<DialogDetailDocumentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,

    public constant: Constant,
    private router: Router,

    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
    // private loadingScreenService: LoadingScreenService,
    private paymentBlockService: PaymentBlockService
  ) {
    //for detect dialog close 
    dialogRef.backdropClick().subscribe(() => {
      console.log("close dialog")
      // ส่ง event param ตาม ปกติเลย
      if (this.isSaveSuccess && this.resultSave.accDocNo) {
        this.dialogRef.close({ event: 'savesucess' });
      } else {
        this.dialogRef.close({ event: 'close' });
      }
    })
  }

  ngOnInit() {

    // this.allPage = this.data.page;
    this.documentDetail = this.data.document;
    this.searchDetail(this.documentDetail)
    // this.findPage();
    // this.save(0, this.data.head, this.data.item);
  }

  // findPage() {
  //   if (this.allPage.size > 0) {
  //     for (const [key, value] of this.allPage) {
  //       if (key === 'path') {
  //         this.pathPage = value;
  //       } else if (key === 'create') {
  //         this.createPage = value;
  //       } else if (key === 'search') {
  //         this.searchPage = value;
  //       } else if (key === 'backList') {
  //         this.backListPage = value;
  //       } else if (key === 'edit') {
  //         this.editPage = value;
  //       }
  //     }
  //   }
  // }

  searchDetail(document) {
    console.log(document)
    // this.loadingScreenService.loadingToggleStatus(true)
    this.listDocument = [];
    this.paymentBlockService.searchDetail(document.compCode,document.accDocNo,document.fiscYear).subscribe(data => {
      // this.loadingScreenService.loadingToggleStatus(false)
      const response = data as any;
      const result = response.data;
      console.log(result)
      if (result) {
        if (result.length > 0 && result.length <= 500) {
          this.listDocument = result;
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
  onNoClick(): void {
   
    this.dialogRef.close({
    
    });
  }
  
}
