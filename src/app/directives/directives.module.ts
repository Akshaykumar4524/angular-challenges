import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module';
import { DirectiveDocComponent } from './directive-doc/directive-doc.component';


@NgModule({
  declarations: [DirectiveDocComponent],
  imports: [
    CommonModule,
    DirectivesRoutingModule
  ]
})
export class DirectivesModule { }
