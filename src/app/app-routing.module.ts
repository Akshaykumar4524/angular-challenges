import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentDocComponent } from './components/component-doc/component-doc.component';

const routes: Routes = [
  { path: 'components', component: ComponentDocComponent },
  { path: '', redirectTo: '/components', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
