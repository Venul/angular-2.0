import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DepartmentsComponent }      from './departments.component';
import { DepartmentDetailComponent }  from './department-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/departments', pathMatch: 'full' },
  { path: 'detail/:id', component: DepartmentDetailComponent },
  { path: 'departments',     component: DepartmentsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
