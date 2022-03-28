import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


import { AppComponent } from './app.component';
import { CalculadoraModule } from './calculadora';
import { ConversorModule } from './conversor/conversor.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { JogodavelhaModule } from './jogodavelha/jogodavelha.module';
import { OlaMundoModule } from './ola-mundo/ola-mundo.module';
import { TarefasModule } from './tarefas/tarefas.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { LoginComponent } from './components/login/login.component';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    CalculadoraModule,
    ConversorModule,
    TarefasModule,
    JogodavelhaModule,
    OlaMundoModule,  
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
