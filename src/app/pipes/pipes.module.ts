import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { PipesDocComponent } from './pipes-doc/pipes-doc.component';
import { TruncatePipe } from './truncate/truncate.pipe';
import { SharedModule } from '../shared/shared.module';
import { CreditCardFormatterPipe } from './credit-card-formatter.pipe';
import { FlattenPipe } from './flatten/flatten.pipe';
import { FilterTermPipe } from './filter-term/filter-term.pipe';

@NgModule({
  declarations: [PipesDocComponent, TruncatePipe, CreditCardFormatterPipe, FlattenPipe, FilterTermPipe],
  imports: [CommonModule, PipesRoutingModule, SharedModule],
})
export class PipesModule {}
