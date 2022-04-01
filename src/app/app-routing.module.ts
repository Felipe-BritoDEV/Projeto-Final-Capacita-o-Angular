import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroRoutes } from './components/cadastro/cadastro-routing.module';
import { CalculadoraRoutes } from './calculadora/calculadora-routing.module';
import { ConversorRoutes } from './conversor/conversor-routing.module';
import { DashboardRoutes } from './dashboard/dashboard-routing.module';
import { JogoDaVelhaRoutes } from './jogodavelha/jogodavelha-routing.module';
import { LoginRoutes } from './components/login/login-routing.module';
import { OlaMundoRoutes } from './ola-mundo/olamundo-routing.module';
import { TarefaRoutes } from './tarefas/tarefas-routing.module';
import { ForgetpassRoutes } from './components/forgotpass/forgotpass-routing.module';
import { VerifyRoutes } from './components/verify/verify-routing.module';

export const routes: Routes = [
	{ 
		path: '', 
		redirectTo: '/login', 
		pathMatch: 'full' 
	},
	...DashboardRoutes,
	...CalculadoraRoutes,
	...ConversorRoutes,
	...TarefaRoutes,
	...JogoDaVelhaRoutes,
	...OlaMundoRoutes,
	...LoginRoutes,
	...CadastroRoutes,
	...ForgetpassRoutes,
	...VerifyRoutes,
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
