import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TargetListPageComponent } from './pages/target-companies-page/target-list-page/target-list-page.component';
import { NewTargetPageComponent } from './pages/target-companies-page/new-target-page/new-target-page.component';
import { EditTargetPageComponent } from './pages/target-companies-page/edit-target-page/edit-target-page.component';
import { TargetCompaniesPageComponent } from './pages/target-companies-page/target-companies-page.component';
import { ViewTargetPageComponent } from './pages/target-companies-page/view-target-page/view-target-page.component';
import { TargetCompanyResolver } from './target-company.resolver';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/target-companies/list',
    pathMatch: 'full'
  },
  {
    path: 'target-companies',
    component: TargetCompaniesPageComponent,
    children: [
      {
        path: 'list',
        component: TargetListPageComponent
      },
      {
        path: 'new',
        component: NewTargetPageComponent
      },
      {
        path: ':targetId',
        component: EditTargetPageComponent,
        resolve: { targetCompany: TargetCompanyResolver }
      },
      {
        path: ':targetId/view',
        component: ViewTargetPageComponent,
        resolve: { targetCompany: TargetCompanyResolver }
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  declarations: [],
  exports: [
    RouterModule
  ],
  providers: [
    TargetCompanyResolver
  ]
})
export class AppRoutingModule { }
