import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared/tarefa.service';
import { ListarTarefaComponent } from './listar/listar-tarefa.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EditarComponent } from './editar/editar.component';
import { ConcluidaDirective } from './shared/concluida.directive';



@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarComponent,
    EditarComponent,
    ConcluidaDirective
  ],
  imports: [ CommonModule, RouterModule, FormsModule ],
  providers: [TarefaService ]
})
export class TarefasModule { }
