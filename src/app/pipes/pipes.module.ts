import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { PipesDocComponent } from './pipes-doc/pipes-doc.component';
import { TruncatePipe } from './truncate.pipe';
import { SharedModule } from '../shared/shared.module';
import { CreditCardFormatterPipe } from './credit-card-formatter.pipe';

@NgModule({
  declarations: [PipesDocComponent, TruncatePipe, CreditCardFormatterPipe],
  imports: [CommonModule, PipesRoutingModule, SharedModule],
})
export class PipesModule {}
