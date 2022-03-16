import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { OlaMundoComponent } from './ola-mundo.component';

@NgModule({
  declarations: [
    OlaMundoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [OlaMundoComponent]
})
export class OlaMundoModule { }