import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ConversaoResponse } from '../models/conv-response.model';
import { Conversao } from '../models/conversao.model';
import { Moeda } from '../models/moeda.model';
import { ConversorService } from '../services/conversor.service';
import { MoedaService } from '../services/moeda.service';



@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  moedas: Moeda[];
  conversao: Conversao;
  possuiErro: boolean;
  conversaoResponse: ConversaoResponse;

  @ViewChild("conversaoForm", { static: true }) conversaoForm: NgForm;

  constructor(
    private moedaService: MoedaService,
    private conversorService: ConversorService) {}

  ngOnInit() {
  	this.moedas = this.moedaService.listarTodas();
  	this.init();
  }

  init(): void {
  	this.conversao = new Conversao('EUR', 'BRL', null);
  	this.possuiErro = false;
  }

  converter(): void {
  	if (this.conversaoForm.form.valid) {
  	  this.conversorService
        .converter(this.conversao)
        .subscribe(
          response => this.conversaoResponse = response,
          //error => this.possuiErro = true
        );
  	}
  }

}
