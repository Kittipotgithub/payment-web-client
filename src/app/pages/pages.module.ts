import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { OmComponent } from './om/om.component';
import { MatDialogModule, MatNativeDateModule, MatTabsModule, MatExpansionModule, MatDatepickerModule, MatAutocompleteModule, MatSort, MatSortModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';




import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { DragDropModule } from '@angular/cdk/drag-drop';


import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';

import {ScrollingModule} from '@angular/cdk/scrolling';

import { TabStatusComponent } from './tab-status/tab-status.component';
import { TabParameterComponent } from './tab-parameter/tab-parameter.component';
import { TabAdditionalLogComponent } from './tab-additional-log/tab-additional-log.component';
import { TabIndependentComponent } from './tab-independent/tab-independent.component';





@NgModule({
  declarations: [
    HomeComponent,
    OmComponent,
   
  
    TabStatusComponent,
    
    TabParameterComponent,
    
    TabAdditionalLogComponent,
    
    TabIndependentComponent,
    
    
  
  ],
  entryComponents: [

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
    ScrollingModule,
    MatSortModule
  ]
})
export class PagesModule { 

}
