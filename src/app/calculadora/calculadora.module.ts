import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompCalculadoraComponent } from './comp-calculadora/comp-calculadora.component';
import { ServCalculadoraService } from './services/serv-calculadora.service';



@NgModule({
  declarations: [
    CompCalculadoraComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CompCalculadoraComponent
  ],
  providers: [
    ServCalculadoraService
  ]
})
export class CalculadoraModule { }
