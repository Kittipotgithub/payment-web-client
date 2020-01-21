
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogSearchVendorComponent } from './component/tab-param/dialog-search-vendor/dialog-search-vendor.component';
import { MatDialogModule, MatTabsModule, MatDatepickerModule, MatNativeDateModule, MatTooltipModule, MatProgressBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogSaveParameterComponent } from './component/tab-status/dialog-save-parameter/dialog-save-parameter.component';



@NgModule({
  declarations: [ DialogSearchVendorComponent, DialogSaveParameterComponent],
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
  ],
  entryComponents: [DialogSearchVendorComponent,DialogSaveParameterComponent],
})
export class SharedModule { }
