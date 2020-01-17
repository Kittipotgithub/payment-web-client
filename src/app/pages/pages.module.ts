
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { OmComponent } from './om/om.component';
import { MatDialogModule, MatNativeDateModule, MatTabsModule, MatExpansionModule, MatDatepickerModule, MatAutocompleteModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [HomeComponent, OmComponent],
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
    MatAutocompleteModule
  ]
})
export class PagesModule { }
