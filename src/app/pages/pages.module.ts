import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { OmComponent } from './om/om.component';
import { MatDialogModule, MatNativeDateModule, MatTabsModule, MatExpansionModule, MatDatepickerModule, MatAutocompleteModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { StatusComponent } from './status/status.component';
import { RouterModule, Routes } from '@angular/router';
import { ParameterComponent } from './parameter/parameter.component';
import { ReportComponent } from './report/report.component';
import { OptionIndependentComponent } from './option-independent/option-independent.component';
import { OptionAdditionalLogComponent } from './option-additional-log/option-additional-log.component';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CopyComponent } from './copy/copy.component';
import { CopydateComponent } from './copydate/copydate.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AccountComponent } from './account/account.component';
import { PaymentComponent } from './payment/payment.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { AccountTableComponent } from './account-table/account-table.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { StatuspopupComponent } from './statuspopup/statuspopup.component';



@NgModule({
  declarations: [
    HomeComponent,
    OmComponent,
    StatusComponent,
    ParameterComponent,
    ReportComponent,
    OptionIndependentComponent,
    OptionAdditionalLogComponent,
    CopyComponent,
    CopydateComponent,
    AccountComponent,
    PaymentComponent,
    AccountTableComponent,
    StatuspopupComponent
  
  ],
  entryComponents: [
    CopyComponent,
    StatusComponent,
    CopydateComponent,
    AccountComponent,
    PaymentComponent,
    AccountTableComponent,
    StatuspopupComponent 
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatExpansionModule,
    // NgxPaginationModule,
    MatAutocompleteModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule,
    DragDropModule,
    FormsModule,
    ScrollingModule
  ]
})
export class PagesModule { 

}
