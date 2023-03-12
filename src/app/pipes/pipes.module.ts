import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { PipesDocComponent } from './pipes-doc/pipes-doc.component';
import { TruncatePipe } from './truncate/truncate.pipe';
import { SharedModule } from '../shared/shared.module';
import { CreditCardFormatterPipe } from './credit-card-formatter.pipe';
import { FlattenPipe } from './flatten/flatten.pipe';

@NgModule({
  declarations: [PipesDocComponent, TruncatePipe, CreditCardFormatterPipe, FlattenPipe],
  imports: [CommonModule, PipesRoutingModule, SharedModule],
})
export class PipesModule {}
