import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { PipesDocComponent } from './pipes-doc/pipes-doc.component';
import { TruncatePipe } from './truncate.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PipesDocComponent, TruncatePipe],
  imports: [CommonModule, PipesRoutingModule, SharedModule],
})
export class PipesModule {}
