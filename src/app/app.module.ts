import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CompComponent } from './comp/comp.component';
import { CompContainerComponent } from './comp-container/comp-container.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CompComponent, CompContainerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
