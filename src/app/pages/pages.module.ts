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
import {MatMenuModule} from '@angular/material/menu';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material';
import { CopyComponent } from './copy/copy.component';

/*const appRoutes: Routes = [
  { path: 'status', component: StatusComponent },

];*/


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
    MatMenuModule,
    DragDropModule,
    MatDialog
  ]
})
export class PagesModule { 
  constructor(public dialog: MatDialog) {}

  openDialog() {
    
  }
}
