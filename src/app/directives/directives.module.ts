import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module';
import { DirectiveDocComponent } from './directive-doc/directive-doc.component';
import { DebounceClickDirective } from './debounce-click/debounce-click.directive';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DirectiveDocComponent, DebounceClickDirective],
  imports: [CommonModule, DirectivesRoutingModule, SharedModule],
})
export class DirectivesModule {}
