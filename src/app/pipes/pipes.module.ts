import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { PipesDocComponent } from './pipes-doc/pipes-doc.component';


@NgModule({
  declarations: [PipesDocComponent],
  imports: [
    CommonModule,
    PipesRoutingModule
  ]
})
export class PipesModule { }
