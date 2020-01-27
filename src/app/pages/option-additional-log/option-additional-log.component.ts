import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-option-additional-log',
  templateUrl: './option-additional-log.component.html',
  styleUrls: ['./option-additional-log.component.scss']
})
export class OptionAdditionalLogComponent implements OnInit {



  logFormCreate: FormGroup;

  // checkBoxOneControl: FormControl; // check box
  // checkBoxOneControl: FormControl; // check box
  // checkBoxOneControl: FormControl; // check box
  // checkBoxOneControl: FormControl; // check box


  vendorTaxIdOneFromControl: FormControl; // vendor
  vendorTaxIdOneToControl: FormControl; // vendor
  vendorTaxIdTwoFromControl: FormControl; // vendor
  vendorTaxIdTwoToControl: FormControl; // vendor
  vendorTaxIdThreeFromControl: FormControl; // vendor
  vendorTaxIdThreeToControl: FormControl; // vendor





  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    // this.createIndependentFormControl();
    // this.createIndependentFormGroup();

  }
  // createIndependentFormControl() {
  //   this.filedNameOneControl = this.formBuilder.control('');
  //   this.checkBoxOneControl = this.formBuilder.control('');
  //   this.conditionFiledOneControl = this.formBuilder.control('');

  //   this.filedNameTwoControl = this.formBuilder.control('');
  //   this.checkBoxTwoControl = this.formBuilder.control('');
  //   this.conditionFiledTwoControl = this.formBuilder.control('');

  //   this.filedNameThreeControl = this.formBuilder.control('');
  //   this.checkBoxThreeControl = this.formBuilder.control('');
  //   this.conditionFiledThreeControl = this.formBuilder.control('');

  // }

  // createIndependentFormGroup() {
  //   this.independentFormCreate = this.formBuilder.group({

  //     filedNameOne: this.filedNameOneControl,
  //     checkBoxOne: this.checkBoxOneControl,
  //     conditionFiledOne: this.conditionFiledOneControl,

  //     filedNameTwo: this.filedNameTwoControl,
  //     checkBoxTwo: this.checkBoxTwoControl,
  //     conditionFiledTwo: this.conditionFiledTwoControl,

  //     filedNameThree: this.filedNameThreeControl,
  //     checkBoxThree: this.checkBoxThreeControl,
  //     conditionFiledThree: this.conditionFiledThreeControl,

  //   });

  // }

}
