import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TargetCompaniesPageComponent } from './pages/target-companies-page/target-companies-page.component';
import { TargetListPageComponent } from './pages/target-companies-page/target-list-page/target-list-page.component';
import { NewTargetPageComponent } from './pages/target-companies-page/new-target-page/new-target-page.component';
import { EditTargetPageComponent } from './pages/target-companies-page/edit-target-page/edit-target-page.component';
import { CoreModule } from 'projects/core/src/public_api';
import { MatToolbarModule, MatIconModule, MatGridListModule, MatDividerModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { TargetCompanyService } from './services/target-company.service';
import { ViewTargetPageComponent } from './pages/target-companies-page/view-target-page/view-target-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TargetCompaniesPageComponent,
    TargetListPageComponent,
    NewTargetPageComponent,
    EditTargetPageComponent,
    ViewTargetPageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatDividerModule
  ],
  providers: [TargetCompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
