import { Utils } from 'src/app/shared/utils';
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
  @ViewChildren('conditionField') conditionField: QueryList<ElementRef>;
  @ViewChildren('optionExclude') optionExclude: QueryList<ElementRef>;

  @Input() independent
  @Output() messageFromIndependent = new EventEmitter<any>();

  // Tab
  panleExpanded = true;

  listIndependent = [
    { fieldName: null, conditionField: null, optionExclude: false, dataType: null, dbName: null, tableName: null, condition: [] },
    { fieldName: null, conditionField: null, optionExclude: false, dataType: null, dbName: null, tableName: null, condition: [] },
    { fieldName: null, conditionField: null, optionExclude: false, dataType: null, dbName: null, tableName: null, condition: [] },

  ];

  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private utils: Utils
  ) { }



  ngOnInit() {

    // if (this.independent) {
    //   this.independent.forEach(item => {
    //     console.log(item)
    //     if (item.conditionField && item.conditionField !== '') {

    //       item.conditionField = this.utils.convertConditionFieldArrayToConditionFieldText(item.conditionField)
    //     }
    //   })
    //   this.listIndependent = this.independent
    // }

  }
  getIndependentFromCopy(object) {
    object.forEach(item => {
      console.log(item)
      if (item.conditionField && item.conditionField !== '') {

        item.conditionField = this.utils.convertConditionFieldArrayToConditionFieldText(item.condition)
      }
    })
    this.listIndependent = object
  }

  updateParameter(): void {
    console.log('updateParameter')
    this.listIndependent.forEach(item => {
      if (item.conditionField && item.conditionField !== '') {
        item.condition = this.utils.convertConditionFieldTextToConditionFieldArray(item.conditionField)
      }
    })
    this.independent = this.listIndependent
    this.messageFromIndependent.emit(this.independent)
  }

  setConditionfield(index) {
    const conditionField = this.conditionField.toArray()[index].nativeElement.value;

    if (conditionField) {
      this.listIndependent[index].conditionField = conditionField
    } else {
      this.listIndependent[index].conditionField = ''
    }


  }
  setOptionInclude(index) {

    const valueIndex = this.optionExclude.toArray()[index] as any

    const optionExclude = valueIndex._checked
    if (optionExclude) {
      this.listIndependent[index].optionExclude = optionExclude
    } else {
      this.listIndependent[index].optionExclude = false
    }

  }

  addInputIndependent() {
    this.listIndependent.push({ fieldName: null, conditionField: null, optionExclude: false, dataType: null, dbName: null, tableName: null, condition: [] })

  }
  deleteInputIndependent(index) {
    this.listIndependent.splice(index, 1);
  }


  openDialogSearchfield(index) {
    const dialogRef = this.dialog.open(DialogSearchFieldComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.event) {
        this.listIndependent[index].fieldName = result.value
        this.listIndependent[index].dataType = 'string'
        this.listIndependent[index].dbName = 'v'
        this.listIndependent[index].tableName = 'accDocNo'
      }
    });
  }


}
