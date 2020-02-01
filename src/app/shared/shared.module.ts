
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogSearchVendorComponent } from './component/tab-param/dialog-search-vendor/dialog-search-vendor.component';
import { MatDialogModule, MatTabsModule, MatDatepickerModule, MatNativeDateModule, MatTooltipModule, MatProgressBarModule, MatCheckboxModule, MatSelectModule, MatTableModule, MatFormFieldModule, MatInputModule, MatIconModule, MatToolbarModule, MatCardModule, MatAutocompleteModule, MatRadioModule, MatSortModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DialogSaveParameterComponent } from './component/tab-status/dialog-save-parameter/dialog-save-parameter.component';
import { DialogSearchMasterComponent } from './component/dialog-search-master/dialog-search-master.component';
import { DialogDetailDocumentComponent } from './component/dialog-detail-document/dialog-detail-document.component';
import { DialogSearchFieldComponent } from './component/tab-additional/dialog-search-field/dialog-search-field.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DialogSearchPaymentMethodComponent } from './component/tab-param/dialog-search-payment-method/dialog-search-payment-method.component';
import { DialogCopyParameterComponent } from './component/dialog-copy-parameter/dialog-copy-parameter.component';
import { DialogSearchParameterComponent } from './component/dialog-search-parameter/dialog-search-parameter.component';
import { DialogSearchVendorPaymentComponent } from './component/dialog-search-vendor-payment/dialog-search-vendor-payment.component';

import { ThaidatePipe } from './pipe/thaidate.pipe';



@NgModule({
  declarations: [
    DialogSearchVendorComponent,
    DialogSaveParameterComponent,
    DialogSearchMasterComponent,
    DialogDetailDocumentComponent,
    DialogSearchFieldComponent,
    DialogSearchPaymentMethodComponent,
    DialogCopyParameterComponent,
    DialogSearchParameterComponent,
    DialogSearchVendorPaymentComponent,
    ThaidatePipe

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DragDropModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    // NgxPaginationModule,
    MatProgressBarModule,
    MatTooltipModule,
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
    ScrollingModule,
    MatRadioModule,
    MatSortModule
  ],
  entryComponents:[
    DialogSearchVendorComponent,
    DialogSaveParameterComponent,
    DialogSearchMasterComponent,
    DialogDetailDocumentComponent,
    DialogSearchFieldComponent,
    DialogSearchPaymentMethodComponent,
    DialogCopyParameterComponent,
    DialogSearchParameterComponent,
    DialogSearchVendorPaymentComponent,
    

  ],
})
export class SharedModule { }
