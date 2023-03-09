import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentDocComponent } from './component-doc/component-doc.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { StartRatingComponent } from './start-rating/start-rating.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ComponentDocComponent,
    AccordionComponent,
    ProgressBarComponent,
    StartRatingComponent,
    ToolBarComponent,
  ],
  imports: [CommonModule, ComponentsRoutingModule, SharedModule],
})
export class ComponentsModule {}
