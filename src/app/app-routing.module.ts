import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentDocComponent } from './components/component-doc/component-doc.component';
import { DirectiveDocComponent } from './directives/directive-doc/directive-doc.component';
import { PipesDocComponent } from './pipes/pipes-doc/pipes-doc.component';
import { ServiceDocComponent } from './services/service-doc/service-doc.component';

const routes: Routes = [
  { path: 'components', component: ComponentDocComponent },
  {path:'directives',component:DirectiveDocComponent},
  {path:'pipes',component:PipesDocComponent},
  {path:'services',component:ServiceDocComponent},
  { path: '', redirectTo: '/components', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
