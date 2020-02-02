import { MatTableDataSource } from '@angular/material/table';
import { MasterService } from './../../../core/service/master/master.service';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSort } from '@angular/material';

@Component({
  selector: 'app-dialog-search-vendor-payment',
  templateUrl: './dialog-search-vendor-payment.component.html',
  styleUrls: ['./dialog-search-vendor-payment.component.scss'],
})
export class DialogSearchVendorPaymentComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  displayedColumns: string[] = ['choose', 'taxId', 'valueCode', 'name'];
  dataSource = new MatTableDataSource([]);
  errorMessage = '';

  constructor(
    private dialogRef: MatDialogRef<DialogSearchVendorPaymentComponent>,
    private masterService: MasterService
  ) {}

  closeDialog(): void {
    const dialogRef = this.dialogRef.close();
  }

  ngOnInit() {
    // this.loadVendor('')
  }
  loadVendor(event) {
    // console.log(textSearch.value)

    // let textSearch = event.value

    // const percent = textSearch.split('').filter(value => value === '%').length;
    // for (let i = 0; i < percent; i++) {
    //   textSearch = textSearch.replace('%', '*');
    // }
    // const text = textSearch.split('').filter(value => value === '*').length;
    // if (text > 2) {
    //   this.errorMessage = 'เงื่อนไขไม่ถูกต้อง';
    //   return false;
    // } else {
    //   const checkCondtion = textSearch.indexOf('**');

    //   if (checkCondtion === -1) {
    //     if (textSearch === '*' || textSearch === '**') {
    //       this.errorMessage = 'เงื่อนไขไม่ถูกต้อง';
    //       return false;
    //     }
    //   } else {
    //     this.errorMessage = 'เงื่อนไขไม่ถูกต้อง';
    //     return false;
    //   }
    // }
    // this.errorMessage = '';
    // this.dataSource = []

    // this.masterService.findVendorCodeWithParam(textSearch).subscribe(data => {
    //   const response = data as any;

    //   if (response.status === 'T') {
    //     this.dataSource = response.data;
    //     console.log(JSON.stringify(response.data))
    //     // this.dataSourceHeader = this.constant.HEADER_DIALOG_SEARCH.vendorTaxId;
    //   } else {
    //     this.errorMessage = response.message;
    //   }
    // });

    this.dataSource = new MatTableDataSource([
      {
        id: 286,
        valueCode: '1000000006',
        name: 'บริษัท พี.เอส.เจนเนอเรชั่น จำกัด',
        taxId: '0105525028530',
        active: true,
      },
      {
        id: 216,
        valueCode: '1000000011',
        name: 'บริษัท กรีนเวิลด์ มาร์เก็ตติ้ง จำกัด',
        taxId: '0105535159165',
        active: true,
      },
      {
        id: 287,
        valueCode: '1000000049',
        name: 'บริษัท วี.แอนด์.วี. กรุงเทพมหานคร จำกัด',
        taxId: '0125523000093',
        active: true,
      },
      {
        id: 251,
        valueCode: '1000000073',
        name: 'บริษัท เอเอบี จำกัด',
        taxId: '3100501579002',
        active: true,
      },
      {
        id: 268,
        valueCode: '1000000080',
        name: 'บริษัท เอเอซี จำกัด',
        taxId: '3100501579100',
        active: true,
      },
      {
        id: 252,
        valueCode: '1000000081',
        name: 'บริษัท เอเอดี จำกัด',
        taxId: '3100501579101',
        active: true,
      },
      {
        id: 253,
        valueCode: '1000000083',
        name: 'บริษัท เอเอเอฟ จำกัด',
        taxId: '3100501579102',
        active: true,
      },
      {
        id: 267,
        valueCode: '1000000085',
        name: 'บริษัท เอเอจี จำกัด',
        taxId: '3100501579010',
        active: true,
      },
      {
        id: 254,
        valueCode: '1000000087',
        name: 'บริษัท เอเอเอ จำกัด',
        taxId: '3100501579003',
        active: true,
      },
      {
        id: 237,
        valueCode: '1000000088',
        name: 'บริษัท เอเอเอ จำกัด',
        taxId: '3100501579166',
        active: true,
      },
      { id: 255, valueCode: '1000000089', name: 'sdsf', taxId: '456456', active: true },
      { id: 272, valueCode: '1000000090', name: 'adasd', taxId: '56097567', active: true },
      { id: 273, valueCode: '1000000091', name: 'asdasd', taxId: '00000', active: true },
      { id: 274, valueCode: '1000000092', name: 'sdf', taxId: '678679679', active: true },
      { id: 276, valueCode: '1000000093', name: 'asdsa', taxId: '6856874646', active: true },
      { id: 238, valueCode: '1000000094', name: 'asdf', taxId: '65756856868', active: true },
      { id: 277, valueCode: '1000000095', name: 'asd', taxId: '123123', active: true },
      {
        id: 278,
        valueCode: '1000000097',
        name: 'เน€เธญเน€เธญเธ�เธต',
        taxId: '3100501579999',
        active: true,
      },
      { id: 279, valueCode: '1000000098', name: 'ศราวุธ', taxId: '3423423432423', active: true },
      {
        id: 256,
        valueCode: '1000000102',
        name: 'บริษัท เอเอเอ็ม จำกัด',
        taxId: '3100501579011',
        active: true,
      },
      { id: 240, valueCode: '1000000103', name: '123', taxId: '1231233252353', active: true },
      {
        id: 224,
        valueCode: '1000000107',
        name: 'บริษัท บีเอบี จำกัด',
        taxId: '3100601579600',
        active: true,
      },
      { id: 258, valueCode: '1000000111', name: 'ทดสอบ', taxId: '3534324234234', active: true },
      { id: 293, valueCode: '1000000115', name: 'ทดสอบ2 ', taxId: '4345435345345', active: true },
      {
        id: 259,
        valueCode: '1000000116',
        name: 'บริษัท เอเอที',
        taxId: '3453453453453',
        active: true,
      },
      { id: 280, valueCode: '1000000119', name: 'บริษัท', taxId: '4543534534543', active: true },
      { id: 294, valueCode: '1000000120', name: 'ภาษาไทย', taxId: '4253453453453', active: true },
      { id: 225, valueCode: '1000000124', name: 'ภาษาไทย', taxId: '3532523523535', active: true },
      {
        id: 281,
        valueCode: '1000000125',
        name: 'บริษัท บีบีบี จำกัด',
        taxId: '1234567890001',
        active: true,
      },
      {
        id: 282,
        valueCode: '1000000128',
        name: 'บริษัท ซีเอบี จำกัด',
        taxId: '1234567890202',
        active: true,
      },
      {
        id: 283,
        valueCode: '1000000130',
        name: 'บริษัท ซีเอดี จำกัด',
        taxId: '1234567890204',
        active: true,
      },
      {
        id: 284,
        valueCode: '1000000131',
        name: 'บริษัท ซีเออี จำกัด',
        taxId: '1234567890205',
        active: true,
      },
      {
        id: 226,
        valueCode: '1000000132',
        name: 'บริษัท ซีซีเอฟ จำกัด',
        taxId: '1234567890206',
        active: true,
      },
      {
        id: 227,
        valueCode: '1000000133',
        name: 'บริษัท ซีซีไอ จำกัด',
        taxId: '1234567890207',
        active: true,
      },
      {
        id: 228,
        valueCode: '1000000134',
        name: 'บริษัท เอซีไอ จำกัด',
        taxId: '1234567890091',
        active: true,
      },
      { id: 285, valueCode: '1000000136', name: 'เอบีเอ็ม', taxId: '3100523456788', active: true },
      { id: 260, valueCode: '1000000137', name: 'หกกดหกด', taxId: '2313123123123', active: true },
      {
        id: 241,
        valueCode: '1000000138',
        name: 'บริษัท ซีเอเอ็น',
        taxId: '1234567890556',
        active: true,
      },
      {
        id: 242,
        valueCode: '1000000139',
        name: 'นายสมหวัง ดีได้ใจ',
        taxId: '1234567890120',
        active: true,
      },
      {
        id: 261,
        valueCode: '1000000140',
        name: 'บริษัท ซีเอไอ จำกัด',
        taxId: '1234567890209',
        active: true,
      },
      {
        id: 244,
        valueCode: '1000000141',
        name: 'บริษัท ซีเอเจ จำกัด',
        taxId: '1234567890210',
        active: true,
      },
      {
        id: 230,
        valueCode: '1000000142',
        name: 'บริษัท ซีเอเค จำกัด',
        taxId: '1234567890211',
        active: true,
      },
      {
        id: 245,
        valueCode: '1000000143',
        name: 'บริษัท เอสแอลเอ็ม จำกัด',
        taxId: '1234567890101',
        active: true,
      },
      {
        id: 296,
        valueCode: '1000000144',
        name: 'บริษัท เอสแอลเอ็ม จำกัด',
        taxId: '1234567890102',
        active: true,
      },
      {
        id: 231,
        valueCode: '1000000145',
        name: 'บริษัท เอสเอ็ม จำกัด',
        taxId: '1234567890105',
        active: true,
      },
      {
        id: 232,
        valueCode: '1000000146',
        name: 'บริษัท เอเอสที',
        taxId: '1234567890109',
        active: true,
      },
      {
        id: 246,
        valueCode: '1000000147',
        name: 'บริษัท เอสแอลเอ็ม จำกัด',
        taxId: '1234567890103',
        active: true,
      },
      {
        id: 262,
        valueCode: '1000000148',
        name: 'บริษัท เอสแอลเอ็ม จำกัด',
        taxId: '1234567890107',
        active: true,
      },
      {
        id: 263,
        valueCode: '1000000149',
        name: 'บริษัท เอสแอลเอ็ม จำกัด',
        taxId: '1234567890104',
        active: true,
      },
      {
        id: 297,
        valueCode: '1000000150',
        name: 'บริษัท เอสแอลเอ็ม จำกัด',
        taxId: '1000000000143',
        active: true,
      },
      {
        id: 264,
        valueCode: '1000000151',
        name: 'บริษัท เอสแอลเอ็ม จำกัด',
        taxId: '1234567890108',
        active: true,
      },
      {
        id: 299,
        valueCode: '1000000160',
        name: 'บริษัท ลิงค์เทค  จำกัด',
        taxId: '3601004682110',
        active: true,
      },
      { id: 247, valueCode: '1000000161', name: 'ซีบีเอ', taxId: '3100000000001', active: true },
      { id: 248, valueCode: '1000000162', name: 'ดีบีบี', taxId: '3100000000002', active: true },
      {
        id: 300,
        valueCode: '1000000163',
        name: 'บริษัท เอฟ.เอฟ.เอฟ กรุ๊ฟ',
        taxId: '3101912562123',
        active: true,
      },
      {
        id: 249,
        valueCode: '1000000164',
        name: 'บริษัท เอสแอลเอ็ม จำกัด',
        taxId: '3100000000000',
        active: true,
      },
      {
        id: 301,
        valueCode: '1000000165',
        name: 'บริษัท เอฟ.เอ.เอ',
        taxId: '1234567890511',
        active: true,
      },
      {
        id: 302,
        valueCode: '1000000166',
        name: 'บริษัท เอฟ.เอ.บี',
        taxId: '1234567890512',
        active: true,
      },
      {
        id: 250,
        valueCode: '1000000167',
        name: 'บริษัท เอฟ.เอ.ซี',
        taxId: '1234567890513',
        active: true,
      },
      {
        id: 193,
        valueCode: '1000000168',
        name: 'บริษัท เอฟ.เอ.ดี',
        taxId: '1234567890514',
        active: true,
      },
      {
        id: 194,
        valueCode: '1000000169',
        name: 'บริษัท เอฟ.เอ.อี',
        taxId: '1234567890515',
        active: true,
      },
      {
        id: 195,
        valueCode: '1000000170',
        name: 'บริษัท เอฟ.เอ.เอฟ',
        taxId: '1234567890516',
        active: true,
      },
      {
        id: 196,
        valueCode: '1000000171',
        name: 'บริษัท เอฟ.เอ.จี',
        taxId: '1234567890517',
        active: true,
      },
      {
        id: 197,
        valueCode: '1000000172',
        name: 'บริษัท เอฟ.เอ.เอช',
        taxId: '1234567890518',
        active: true,
      },
      {
        id: 198,
        valueCode: '1000000173',
        name: 'บริษัท เอฟ.เอ.ไอ',
        taxId: '1234567890519',
        active: true,
      },
      {
        id: 199,
        valueCode: '1000000174',
        name: 'บริษัท เอฟ.เอ.เจ',
        taxId: '1234567890520',
        active: true,
      },
      {
        id: 200,
        valueCode: '1000000175',
        name: 'บริษัท เอฟ.เอ.เค',
        taxId: '1234567890521',
        active: true,
      },
      {
        id: 201,
        valueCode: '1000000176',
        name: 'บริษัท เอฟ.เอ.แอล',
        taxId: '1234567890522',
        active: true,
      },
      {
        id: 202,
        valueCode: '1000000177',
        name: 'บริษัท เอฟ.เอ.เอ็ม',
        taxId: '1234567890523',
        active: true,
      },
      {
        id: 203,
        valueCode: '1000000178',
        name: 'บริษัท เอฟ.เอ.เอน',
        taxId: '1234567890524',
        active: true,
      },
      {
        id: 204,
        valueCode: '1000000179',
        name: 'บริษัท เอฟ.เอ.โอ',
        taxId: '1234567890525',
        active: true,
      },
      {
        id: 205,
        valueCode: '1000000180',
        name: 'บริษัท เอฟ.เอ.พี',
        taxId: '1234567890526',
        active: true,
      },
      {
        id: 206,
        valueCode: '1000000181',
        name: 'บริษัท เอฟ.เอ.คิว',
        taxId: '1234567890527',
        active: true,
      },
      {
        id: 207,
        valueCode: '1000000182',
        name: 'บริษัท เอฟ.เอ.อาร์',
        taxId: '1234567890528',
        active: true,
      },
      {
        id: 208,
        valueCode: '1000000183',
        name: 'บริษัท เอฟ.เอ.เอส',
        taxId: '1234567890529',
        active: true,
      },
      {
        id: 209,
        valueCode: '1000000184',
        name: 'บริษัท เอฟ.เอ.ที',
        taxId: '1234567890530',
        active: true,
      },
      {
        id: 169,
        valueCode: '1000000185',
        name: 'บริษัท เอ็มเอ็มเอ ',
        taxId: '3100000000003',
        active: true,
      },
      {
        id: 161,
        valueCode: '1000000186',
        name: 'บริษัท ทดสอบ จำกัด',
        taxId: '1000000000001',
        active: true,
      },
      {
        id: 187,
        valueCode: '1000000187',
        name: 'บริษัท เอสแอลเอ็ม จำกัด',
        taxId: '3100501579992',
        active: true,
      },
      { id: 164, valueCode: '1000000188', name: 'เอ', taxId: '1234567899876', active: true },
      { id: 188, valueCode: '1000000189', name: 'เอ', taxId: '9876544678990', active: true },
      { id: 170, valueCode: '1000000190', name: 'บีเอเอ', taxId: '3244356678555', active: true },
      { id: 166, valueCode: '1000000191', name: 'เอบีบี', taxId: '3100564746575', active: true },
      { id: 171, valueCode: '1000000192', name: 'เอเอบี', taxId: '1111111111110', active: true },
      { id: 210, valueCode: '1000000193', name: 'เอเอเอส', taxId: '34566777777', active: true },
      { id: 172, valueCode: '1000000194', name: 'AAD', taxId: '3333333333333', active: true },
      { id: 211, valueCode: '1000000195', name: 'เอเอเอฟ', taxId: '4567898838838', active: true },
      { id: 304, valueCode: '1000000196', name: 'บีบีเอส', taxId: '6747475857557', active: true },
      { id: 213, valueCode: '1000000197', name: 'จีจีเอ', taxId: '1234567894575', active: true },
      { id: 214, valueCode: '1000000198', name: 'จีจีเอ', taxId: '1234565554575', active: true },
      { id: 173, valueCode: '1000000199', name: 'จีจีเอ', taxId: '1234565543575', active: true },
      { id: 168, valueCode: '1000000200', name: 'เจเจบี', taxId: '7446464957557', active: true },
      {
        id: 219,
        valueCode: '7000001591',
        name: 'ไชน่า เรลเวย์ 20 บิวโร กรุ๊ป คอร์ปอเรชั่น',
        taxId: '0993000397461',
        active: true,
      },
      {
        id: 270,
        valueCode: '7000001592',
        name: 'นางสาว แอนนา',
        taxId: '6000000000001',
        active: true,
      },
      { id: 291, valueCode: '7000001593', name: '222', taxId: '111', active: true },
      { id: 271, valueCode: '7000001594', name: '123', taxId: '123', active: true },
      { id: 257, valueCode: '7000001595', name: '124', taxId: '123124', active: true },
      {
        id: 212,
        valueCode: '7000001596',
        name: 'เจเอเอ',
        taxId: '11111193848',
        active: true,
      },
      { id: 189, valueCode: '7000001597', name: 'จีเอซี', taxId: '12345678', active: true },
      { id: 190, valueCode: '7000001598', name: 'จีจีดี', taxId: '8488488544444', active: true },
      { id: 191, valueCode: '7000001599', name: 'ซีดีดี', taxId: '1111111111111', active: true },
      { id: 192, valueCode: '7000001600', name: 'ซีดีดี', taxId: '11111111111', active: true },
      { id: 175, valueCode: '7000001603', name: 'เจเจอี', taxId: '5636475837475', active: true },
      {
        id: 265,
        valueCode: '8000001031',
        name: 'บริษัท ทีโอที จำกัด (มหาชน)',
        taxId: '0107545000161',
        active: true,
      },
      {
        id: 218,
        valueCode: '8000001313',
        name: 'บริษัท ปตท. จำกัด (มหาชน)',
        taxId: '0107544000108',
        active: true,
      },
      {
        id: 266,
        valueCode: '8000002167',
        name: 'โรงพยาบาลพระรามเก้า',
        taxId: '0105520000521',
        active: true,
      },
      {
        id: 233,
        valueCode: '9000000001',
        name: 'นายธงชัย คงมั่น',
        taxId: '3101400794505',
        active: true,
      },
      {
        id: 288,
        valueCode: '9000007286',
        name: 'ร้านย่งเฮง',
        taxId: '3100700468009',
        active: true,
      },
      {
        id: 234,
        valueCode: '9000032481',
        name: 'ร้านตั้งเจริญภัณฑ์ เอ็นจิเนียริ่ง โดยนายพิเชษฐ์  ชุณห์ขจร',
        taxId: '3130300267740',
        active: true,
      },
      {
        id: 221,
        valueCode: '9000032482',
        name: 'สมหญิง สวยสมใจ',
        taxId: '3100400610003',
        active: true,
      },
      {
        id: 269,
        valueCode: '9000032484',
        name: 'นางสาว จิราภา จิรา',
        taxId: '3100501579001',
        active: true,
      },
      { id: 223, valueCode: '9000032485', name: 'asdas', taxId: '11111111', active: true },
      { id: 239, valueCode: '9000032486', name: '235235', taxId: '23434325', active: true },
      { id: 275, valueCode: '9000032487', name: 'asdasd', taxId: '67879780780', active: true },
      { id: 220, valueCode: '9000032488', name: 'asfafs', taxId: '245235253', active: true },
      { id: 292, valueCode: '9000032489', name: '12323', taxId: '12312', active: true },
      { id: 222, valueCode: '9000032490', name: '123123', taxId: '123124124', active: true },
      { id: 229, valueCode: '9000032492', name: 'ภาษาไทย', taxId: '4234324324344', active: true },
      {
        id: 243,
        valueCode: '9000032493',
        name: 'สมบูรณ์ มั่งมีทรัพย์',
        taxId: '1234567890003',
        active: true,
      },
      {
        id: 298,
        valueCode: '9000032494',
        name: 'นายเพรชดี มนตรี',
        taxId: '123456789005',
        active: true,
      },
      { id: 167, valueCode: '9000032495', name: 'สมบูรณ์', taxId: '1234567890020', active: true },
      { id: 162, valueCode: '9000032496', name: 'บีเอเอ', taxId: '3100500000100', active: true },
      { id: 163, valueCode: '9000032497', name: 'เอ', taxId: '3100500000101', active: true },
      { id: 303, valueCode: '9000032498', name: 'เอเอจี', taxId: '7773737377777', active: true },
      { id: 165, valueCode: '9000032499', name: '123123', taxId: '1231233123', active: true },
      { id: 174, valueCode: '9000032500', name: 'จีจีซี', taxId: '7575757575757', active: true },
      {
        id: 235,
        valueCode: 'A030400004',
        name: 'สนง เลขานุการกรม',
        taxId: '0300400004',
        active: true,
      },
      {
        id: 217,
        valueCode: 'A120500001',
        name: 'กรมพัฒนาพลังงานทดแทนและอนุรักษ์พลังงาน',
        taxId: '1200500001',
        active: true,
      },
      {
        id: 290,
        valueCode: 'O030400004',
        name: 'สนง เลขานุการกรม',
        taxId: '0300400004',
        active: true,
      },
      {
        id: 289,
        valueCode: 'O120500001',
        name: 'กรมพัฒนาพลังงานทดแทนและอนุรักษ์พลังงาน',
        taxId: '4102030293',
        active: true,
      },
      {
        id: 178,
        valueCode: 'V030400004',
        name: 'สนง เลขานุการกรม',
        taxId: '0300400004',
        active: true,
      },
      {
        id: 179,
        valueCode: 'V030400018',
        name: 'สนง คลังเขต 1',
        taxId: '0300400018',
        active: true,
      },
      {
        id: 180,
        valueCode: 'V030400019',
        name: 'สนง คลังจ.พระนครศรีอยุธยา',
        taxId: '0300400019',
        active: true,
      },
      {
        id: 181,
        valueCode: 'V030400020',
        name: 'สนง คลังจ.กาญจนบุรี',
        taxId: '0300400020',
        active: true,
      },
      {
        id: 182,
        valueCode: 'V030700007',
        name: 'กองคลัง กรมสรรพากร',
        taxId: '0300700007',
        active: true,
      },
      {
        id: 183,
        valueCode: 'V030700021',
        name: 'สนง สรรพากรภาค 1',
        taxId: '0300700021',
        active: true,
      },
      {
        id: 236,
        valueCode: 'V120200003',
        name: 'สำนักงานปลัดกระทรวงพลังงาน',
        taxId: '1200200003',
        active: true,
      },
      {
        id: 177,
        valueCode: 'V120500001',
        name: 'สนง เลขานุการกรม',
        taxId: '1200500001',
        active: true,
      },
      {
        id: 295,
        valueCode: 'V150200020',
        name: 'สำนักงานปลัดกระทรวงมหาดไทย',
        taxId: '1500200020',
        active: true,
      },
      {
        id: 215,
        valueCode: 'V150200022',
        name: 'สำนักงานจังหวัด สมุทรปราการ',
        taxId: '1500200022',
        active: true,
      },
      {
        id: 184,
        valueCode: 'V150200023',
        name: 'สนง จ. นนทบุรี',
        taxId: '1500200023',
        active: true,
      },
      {
        id: 185,
        valueCode: 'V150200024',
        name: 'สนง จ. ปทุมธานี',
        taxId: '1500200024',
        active: true,
      },
      {
        id: 186,
        valueCode: 'V150900000',
        name: 'กรุงเทพมหานคร',
        taxId: '1500900000',
        active: true,
      },
      {
        id: 176,
        valueCode: 'V150900001',
        name: 'กรุงเทพมหานคร',
        taxId: '1500900001',
        active: true,
      },
    ]);

    this.dataSource.sort = this.sort;
  }

  chooseDataSearch(data) {
    console.log(data);
    // this.errorMessage = '';
    this.dialogRef.close({
      event: true,
      // type: this.data.type,
      value: data.taxId,
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
