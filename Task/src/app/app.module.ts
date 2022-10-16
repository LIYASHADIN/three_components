import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WebpageComponent } from './webpage/webpage.component';
import { Webpage2Component } from './webpage2/webpage2.component';
import { Webpage3Component } from './webpage3/webpage3.component';
import { DemopipesComponent } from './demopipes/demopipes.component';
import { CustpipesPipe } from './custpipes.pipe';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    WebpageComponent,
    Webpage2Component,
    Webpage3Component,
    DemopipesComponent,
    CustpipesPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
