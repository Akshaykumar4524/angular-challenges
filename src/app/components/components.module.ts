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
import { LoaderComponent } from './loader/loader.component';
import { TwitterPostComponent } from './twitter-post/twitter-post.component';
import { LinkedinPostComponent } from './linkedin-post/linkedin-post.component';
import { ToggleComponent } from './toggle/toggle.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    ComponentDocComponent,
    AccordionComponent,
    ProgressBarComponent,
    StartRatingComponent,
    CreditCardInputComponent,
    LoaderComponent,
    TwitterPostComponent,
    LinkedinPostComponent,
    ToggleComponent,
    ModalComponent,
  ],
  imports: [CommonModule, ComponentsRoutingModule, SharedModule, FormsModule],
})
export class ComponentsModule {}
