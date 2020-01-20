
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
import { FreedomComponent } from './freedom/freedom.component';
import { LogComponent } from './log/log.component';
import { ReportComponent } from './report/report.component';

const appRoutes: Routes = [
  { path: 'status', component: StatusComponent },
  
];


@NgModule({
  declarations: [HomeComponent, OmComponent, StatusComponent, ParameterComponent, FreedomComponent, LogComponent, ReportComponent],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
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
  ]
})
export class PagesModule { }
