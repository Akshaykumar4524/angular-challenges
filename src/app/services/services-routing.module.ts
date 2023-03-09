import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceDocComponent } from './service-doc/service-doc.component';

const routes: Routes = [{path:'',component:ServiceDocComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
