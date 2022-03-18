import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CalculadoraModule } from './calculadora';
import { ConversorModule } from './conversor/conversor.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { JogodavelhaModule } from './jogodavelha/jogodavelha.module';
import { OlaMundoModule } from './ola-mundo/ola-mundo.module';
import { TarefasModule } from './tarefas/tarefas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    CalculadoraModule,
    ConversorModule,
    TarefasModule,
    JogodavelhaModule,
    OlaMundoModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
