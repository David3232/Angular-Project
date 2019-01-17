import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeTopicComponent } from './change-topic/change-topic.component';
import { LatetstNewsComponent } from './latetst-news/latetst-news.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangeTopicComponent,
    LatetstNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
