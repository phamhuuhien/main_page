import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { routing }        from './app.routing';

import { AppComponent }  from './app.component';
import { MainComponent } from './mainpage/main.component'
import { PageNotFoundComponent } from './notfound/page_not_found.component'



@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing],
  declarations: [ AppComponent, MainComponent, PageNotFoundComponent],
  providers:    [ ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }