import { Component, OnInit } from '@angular/core';
import { JogoDaVelhaService } from './shared/jogodavelha.service';


@Component({
  selector: 'app-jogodavelha',
  templateUrl: './jogodavelha.component.html',
  styleUrls: ['./jogodavelha.component.css']
})
export class JogodavelhaComponent implements OnInit {

  constructor(private jogodavelhaservice: JogoDaVelhaService) { }

  ngOnInit(): void {
    this.jogodavelhaservice.inicializar();
  }

  get showInicio(): boolean{
    return this.jogodavelhaservice.showInicio;
  }

  get showTabuleiro(): boolean{
    return this.jogodavelhaservice.showTabuleiro;
  }

  get showFinal(): boolean{
    return this.jogodavelhaservice.showFinal;
  }

  iniciarJogo($event: any): void{
    $event.preventDefault();
    this.jogodavelhaservice.iniciarJogo();
  }

  Jogar(posX: number, posY: number): void{
    this.jogodavelhaservice.jogar(posX, posY);
  }

  exibirX(posX: number, posY: number): boolean{
    return this.jogodavelhaservice.exibirX(posX, posY);
  }

  exibirO(posX: number, posY: number): boolean{
    return this.jogodavelhaservice.exibirO(posX, posY);
  }

  exibirVitoria(posX: number, posY: number): boolean{
    return this.jogodavelhaservice.exibirVitoria(posX, posY);
  }


  get jogador(): number{
    return this.jogodavelhaservice.jogador;
  }

  novoJogo($event: any): void {
    $event.preventDefault();
    this.jogodavelhaservice.novoJogo();
  }
}
