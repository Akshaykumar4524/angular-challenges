import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentDocComponent } from './component-doc/component-doc.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { StartRatingComponent } from './start-rating/start-rating.component';
import { SharedModule } from '../shared/shared.module';
import { CreditCardInputComponent } from './credit-card-input/credit-card-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ComponentDocComponent,
    AccordionComponent,
    ProgressBarComponent,
    StartRatingComponent,
    CreditCardInputComponent,
  ],
  imports: [CommonModule, ComponentsRoutingModule, SharedModule, FormsModule],
})
export class ComponentsModule {}
