import { DialogSearchFieldComponent } from './../../shared/component/tab-additional/dialog-search-field/dialog-search-field.component';
import { Component, OnInit, ViewChildren, QueryList, ElementRef, EventEmitter, Output, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-tab-independent',
  templateUrl: './tab-independent.component.html',
  styleUrls: ['./tab-independent.component.scss']
})
export class TabIndependentComponent implements OnInit {
  @ViewChildren('filedName') filedName: QueryList<ElementRef>;
  @ViewChildren('conditionFiled') conditionFiled: QueryList<ElementRef>;
  @ViewChildren('optionInclude') optionInclude: QueryList<ElementRef>;

  @Input() independent
  @Output() messageFromIndependent = new EventEmitter<any>();

  // Tab
  panleExpanded = true;

  // independentFormCreate: FormGroup;

  // filedNameOneControl: FormControl; // ชื่อฟิลด์
  // checkBoxOneControl: FormControl; // check box
  // conditionFiledOneControl: FormControl; //เงื่อนไข

  // filedNameTwoControl: FormControl; // ชื่อฟิลด์
  // checkBoxTwoControl: FormControl; // check box
  // conditionFiledTwoControl: FormControl; //เงื่อนไข

  // filedNameThreeControl: FormControl; // ชื่อฟิลด์
  // checkBoxThreeControl: FormControl; // check box
  // conditionFiledThreeControl: FormControl; //เงื่อนไข

  listIndependent = [
    { id: 1, filedName: '', conditionFiled: '', optionInclude: false },
    { id: 2, filedName: '', conditionFiled: '', optionInclude: false },
    { id: 3, filedName: '', conditionFiled: '', optionInclude: false },

  ];


  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
  ) { }



  ngOnInit() {
    // this.createIndependentFormControl();
    // this.createIndependentFormGroup();
    if (this.independent) {
      this.listIndependent = this.independent
    }

  }
  getIndependentFromCopy(object){
    this.listIndependent = object
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
  updateParameter(): void {

    this.independent = this.listIndependent

    this.messageFromIndependent.emit(this.independent)

  }

  setConditionFiled(index) {
    const conditionFiled = this.conditionFiled.toArray()[index].nativeElement.value;

    if (conditionFiled) {
      this.listIndependent[index].conditionFiled = conditionFiled
    } else {
      this.listIndependent[index].conditionFiled = ''
    }

    console.log(this.listIndependent)
  }
  setOptionInclude(index) {

    const valueIndex = this.optionInclude.toArray()[index] as any

    const optionInclude = valueIndex._checked
    if (optionInclude) {
      this.listIndependent[index].optionInclude = optionInclude
    } else {
      this.listIndependent[index].optionInclude = false
    }
    console.log(this.listIndependent)
  }

  addInputIndependent() {
    this.listIndependent.push({ id: this.listIndependent.length + 1, filedName: '', conditionFiled: '', optionInclude: false })
    console.log(this.listIndependent)
  }
  deleteInputIndependent(index) {
    this.listIndependent.splice(index, 1);
  }


  openDialogSearchFiled(index) {
    console.log(index)
    const dialogRef = this.dialog.open(DialogSearchFieldComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.event) {
        this.listIndependent[index].filedName = result.value
      }
    });
  }


}
