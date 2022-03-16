import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversorComponent } from './components/conversor.component';
import { MoedaService } from './services/moeda.service';
import { ConversorService } from './services/conversor.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NumeroDirective } from './directives/numero.directive';
import { CotacaoComponent } from './modal/cotacao/cotacao.component';
import { DataBrPipe } from './pipes/data-br.pipe';




@NgModule({
  declarations: [
    ConversorComponent,
    NumeroDirective,
    CotacaoComponent,
    DataBrPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [ ConversorComponent, CotacaoComponent ],
  providers: [ MoedaService, ConversorService ]
})
export class ConversorModule { }
