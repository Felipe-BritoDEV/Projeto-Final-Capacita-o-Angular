import { Routes } from "@angular/router";
import { CadastrarComponent } from "./cadastrar/cadastrar.component";
import { EditarComponent } from "./editar/editar.component";
import { ListarTarefaComponent } from "./listar/listar-tarefa.component";



export const TarefaRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'
    },
    {
        path: 'tarefas/listar',
        component: ListarTarefaComponent
    },
    {
        path: 'tarefas/cadastrar',
        component: CadastrarComponent
    },
    {
        path: 'tarefas/editar/:id',
        component: EditarComponent
    },
];

