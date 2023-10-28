

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { EmployeeRoutingModule } from './employee/employee-routing.module';
const routes: Routes = [
     {
          path: 'employee',
          //  ENABLE FOR LAZY LOADING
          loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)

     },
     {
          path: 'staff',
          loadChildren: () => import('./staff/staff.module').then(m => m.StaffModule)
     },

     { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

// configures NgModule imports and exports
@NgModule({
     imports: [RouterModule.forRoot(routes), EmployeeRoutingModule],
     exports: [RouterModule]
})
export class AppRoutingModule { }