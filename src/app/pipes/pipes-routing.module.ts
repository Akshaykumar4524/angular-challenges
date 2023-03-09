import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesDocComponent } from './pipes-doc/pipes-doc.component';

const routes: Routes = [{ path: '', component: PipesDocComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PipesRoutingModule {}
