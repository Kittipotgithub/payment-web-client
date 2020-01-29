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
  @ViewChildren('fieldName') fieldName: QueryList<ElementRef>;
  @ViewChildren('conditionfield') conditionfield: QueryList<ElementRef>;
  @ViewChildren('optionInclude') optionInclude: QueryList<ElementRef>;
  
  @Input() independent
  @Output() messageFromIndependent = new EventEmitter<any>();

  // Tab
  panleExpanded = true;

  // independentFormCreate: FormGroup;

  // fieldNameOneControl: FormControl; // ชื่อฟิลด์
  // checkBoxOneControl: FormControl; // check box
  // conditionfieldOneControl: FormControl; //เงื่อนไข

  // fieldNameTwoControl: FormControl; // ชื่อฟิลด์
  // checkBoxTwoControl: FormControl; // check box
  // conditionfieldTwoControl: FormControl; //เงื่อนไข

  // fieldNameThreeControl: FormControl; // ชื่อฟิลด์
  // checkBoxThreeControl: FormControl; // check box
  // conditionfieldThreeControl: FormControl; //เงื่อนไข

  listIndependent = [
    { id: 1, fieldName: '', conditionfield: '', optionInclude: false },
    { id: 2, fieldName: '', conditionfield: '', optionInclude: false },
    { id: 3, fieldName: '', conditionfield: '', optionInclude: false },

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
  //   this.fieldNameOneControl = this.formBuilder.control('');
  //   this.checkBoxOneControl = this.formBuilder.control('');
  //   this.conditionfieldOneControl = this.formBuilder.control('');

  //   this.fieldNameTwoControl = this.formBuilder.control('');
  //   this.checkBoxTwoControl = this.formBuilder.control('');
  //   this.conditionfieldTwoControl = this.formBuilder.control('');

  //   this.fieldNameThreeControl = this.formBuilder.control('');
  //   this.checkBoxThreeControl = this.formBuilder.control('');
  //   this.conditionfieldThreeControl = this.formBuilder.control('');

  // }

  // createIndependentFormGroup() {
  //   this.independentFormCreate = this.formBuilder.group({

  //     fieldNameOne: this.fieldNameOneControl,
  //     checkBoxOne: this.checkBoxOneControl,
  //     conditionfieldOne: this.conditionfieldOneControl,

  //     fieldNameTwo: this.fieldNameTwoControl,
  //     checkBoxTwo: this.checkBoxTwoControl,
  //     conditionfieldTwo: this.conditionfieldTwoControl,

  //     fieldNameThree: this.fieldNameThreeControl,
  //     checkBoxThree: this.checkBoxThreeControl,
  //     conditionfieldThree: this.conditionfieldThreeControl,

  //   });

  // }
  updateParameter(): void {

    this.independent = this.listIndependent

    this.messageFromIndependent.emit(this.independent)

  }

  setConditionfield(index) {
    const conditionfield = this.conditionfield.toArray()[index].nativeElement.value;

    if (conditionfield) {
      this.listIndependent[index].conditionfield = conditionfield
    } else {
      this.listIndependent[index].conditionfield = ''
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
    this.listIndependent.push({ id: this.listIndependent.length + 1, fieldName: '', conditionfield: '', optionInclude: false })
    console.log(this.listIndependent)
  }
  deleteInputIndependent(index) {
    this.listIndependent.splice(index, 1);
  }


  openDialogSearchfield(index) {
    console.log(index)
    const dialogRef = this.dialog.open(DialogSearchFieldComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.event) {
        this.listIndependent[index].fieldName = result.value
      }
    });
  }


}
