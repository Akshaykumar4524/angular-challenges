import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveDocComponent } from './directive-doc/directive-doc.component';

const routes: Routes = [{ path: '', component: DirectiveDocComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectivesRoutingModule {}
