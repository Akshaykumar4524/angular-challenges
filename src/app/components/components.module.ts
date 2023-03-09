import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentDocComponent } from './component-doc/component-doc.component';
import { AccordionComponent } from './accordion/accordion.component';
import { CardComponent } from './card/card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { StartRatingComponent } from './start-rating/start-rating.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';


@NgModule({
  declarations: [
    ComponentDocComponent,
    AccordionComponent,
    CardComponent,
    ProgressBarComponent,
    StartRatingComponent,
    ToolBarComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
