import { Constant } from './shared/constant';


import { MatTabsModule, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS, MatNativeDateModule, MatDatepickerModule, MatExpansionModule, MatProgressBarModule, MatSnackBarModule, MatTooltipModule, MatAutocompleteModule, MAT_DATE_LOCALE } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { Utils } from './shared/utils';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    PagesModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatExpansionModule,
    // NgxPaginationModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatAutocompleteModule
  ],
  providers: [Utils,Constant,
    { provide: MAT_DATE_LOCALE, useValue: 'th-TH' },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
