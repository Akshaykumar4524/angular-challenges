import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { CardComponent } from './components/card/card.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { StartRatingComponent } from './components/start-rating/start-rating.component';
import { TopOfPageComponent } from './components/top-of-page/top-of-page.component';
import { ComponentDocComponent } from './components/component-doc/component-doc.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    CardComponent,
    AccordionComponent,
    ProgressBarComponent,
    StartRatingComponent,
    TopOfPageComponent,
    ComponentDocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
