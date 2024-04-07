import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';

const routes: Routes = [
  {
    path:'view',
    component:ViewcustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
