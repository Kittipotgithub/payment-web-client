import { DialogSearchFieldComponent } from './../../shared/component/tab-additional/dialog-search-field/dialog-search-field.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

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


  independentFormCreate: FormGroup;

  filedNameOneControl: FormControl; // ชื่อฟิลด์
  checkBoxOneControl: FormControl; // check box
  conditionFiledOneControl: FormControl; //เงื่อนไข

  filedNameTwoControl: FormControl; // ชื่อฟิลด์
  checkBoxTwoControl: FormControl; // check box
  conditionFiledTwoControl: FormControl; //เงื่อนไข

  filedNameThreeControl: FormControl; // ชื่อฟิลด์
  checkBoxThreeControl: FormControl; // check box
  conditionFiledThreeControl: FormControl; //เงื่อนไข



  foods: Food[] = [
    { value: '1', viewValue: 'เลขที่เอกสาร' },
    { value: '2', viewValue: 'ประเภทเอกสาร' },
    { value: '3', viewValue: 'วันผ่านรายการ' },
    { value: '4', viewValue: 'การอ้างอิง' },
    { value: '5', viewValue: 'แหล่งของเงิน' },
    { value: '6', viewValue: 'วิธีการชำระเงิน' },
    { value: '7', viewValue: 'การระงับการชำระเงิน' },
    // {value: '8', viewValue: 'อื่นๆ'}
  ];

  containers = [];

  //modifedtext: string;

  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
  ) { }

  public show;
  public show1;
  public show2;
  public show3;
  public show4;

  ngOnInit() {
    this.createIndependentFormControl();
    this.createIndependentFormGroup();

  }
  createIndependentFormControl() {
    this.filedNameOneControl = this.formBuilder.control('');
    this.checkBoxOneControl = this.formBuilder.control('');
    this.conditionFiledOneControl = this.formBuilder.control('');

    this.filedNameTwoControl = this.formBuilder.control('');
    this.checkBoxTwoControl = this.formBuilder.control('');
    this.conditionFiledTwoControl = this.formBuilder.control('');

    this.filedNameThreeControl = this.formBuilder.control('');
    this.checkBoxThreeControl = this.formBuilder.control('');
    this.conditionFiledThreeControl = this.formBuilder.control('');

  }

  createIndependentFormGroup() {
    this.independentFormCreate = this.formBuilder.group({

      filedNameOne: this.filedNameOneControl,
      checkBoxOne: this.checkBoxOneControl,
      conditionFiledOne: this.conditionFiledOneControl,

      filedNameTwo: this.filedNameTwoControl,
      checkBoxTwo: this.checkBoxTwoControl,
      conditionFiledTwo: this.conditionFiledTwoControl,

      filedNameThree: this.filedNameThreeControl,
      checkBoxThree: this.checkBoxThreeControl,
      conditionFiledThree: this.conditionFiledThreeControl,

    });

  }
  aaa() {
    console.log(this.independentFormCreate.value)
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

  add() {
    this.containers.push(this.containers.length);
  }

  del() {
    this.containers.splice(this.containers.length - 1);
  }


  /*toggle4() {
    this.show4 = true;
  }*/


  openDialogSearchFiled(type) {

    const dialogRef = this.dialog.open(DialogSearchFieldComponent, {
      data: { type },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.event) {
        this.independentFormCreate.patchValue({ [result.type]: result.value });
      }
    });
  }


}
