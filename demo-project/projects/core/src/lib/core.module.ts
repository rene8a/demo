import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { CustomGridComponent } from './custom-grid/custom-grid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { TargetComponent } from './forms/target/target.component';
import { CustomDialogComponent } from './custom-dialog/custom-dialog.component';
import { ContactsComponent } from './forms/target/contacts/contacts.component';
import { FinanceComponent } from './forms/target/finance/finance.component';
import { InfoComponent } from './forms/target/info/info.component';
import { StatusComponent } from './forms/target/status/status.component';
import { FormsModule } from '@angular/forms';
import { BarChartComponent } from './custom-chart/bar-chart/bar-chart.component';
import {
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatCheckboxModule,
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatStepperModule
} from '@angular/material';

@NgModule({
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  declarations: [
    CoreComponent,
    CustomGridComponent,
    CustomButtonComponent,
    TargetComponent,
    CustomDialogComponent,
    ContactsComponent,
    FinanceComponent,
    InfoComponent,
    StatusComponent,
    BarChartComponent
  ],
  exports: [
    CoreComponent,
    CustomGridComponent,
    CustomButtonComponent,
    TargetComponent,
    BarChartComponent
  ]
})
export class CoreModule { }
