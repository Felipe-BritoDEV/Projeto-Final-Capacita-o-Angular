import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculadoraRoutes } from './calculadora/calculadora-routing.module';
import { ConversorRoutes } from './conversor/conversor-routing.module';
import { DashboardRoutes } from './dashboard/dashboard-routing.module';
import { JogoDaVelhaRoutes } from './jogodavelha/jogodavelha-routing.module';
import { OlaMundoRoutes } from './ola-mundo/olamundo-routing.module';
import { TarefaRoutes } from './tarefas/tarefas-routing.module';

export const routes: Routes = [
	{ 
		path: '', 
		redirectTo: '/dashboard', 
		pathMatch: 'full' 
	},
	...DashboardRoutes,
	...CalculadoraRoutes,
	...ConversorRoutes,
	...TarefaRoutes,
	...JogoDaVelhaRoutes,
	...OlaMundoRoutes
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
