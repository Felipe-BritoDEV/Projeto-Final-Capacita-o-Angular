import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogodavelhaComponent } from './jogodavelha.component';
import { JogoDaVelhaService } from './shared/jogodavelha.service';



@NgModule({
  declarations: [
    JogodavelhaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ JogodavelhaComponent ],
  providers: [ JogoDaVelhaService ]
})
export class JogodavelhaModule { }
