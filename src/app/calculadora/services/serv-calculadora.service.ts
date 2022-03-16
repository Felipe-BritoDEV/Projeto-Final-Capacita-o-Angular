import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServCalculadoraService {

  static readonly SOMA: string = '+';
  static readonly SUB: string = '-';
  static readonly DIV: string = '/';
  static readonly MULT: string = '*';


  constructor() { }

  calcular(num1: number, num2: number, operacao: string): number{
    let resultado: number;


    switch(operacao){
      case ServCalculadoraService.SOMA:
        resultado = num1 + num2;
      break;
      case ServCalculadoraService.SUB:
        resultado = num1 - num2;
      break;
      case ServCalculadoraService.DIV:
        resultado = num1 / num2;
      break;
      case ServCalculadoraService.MULT:
        resultado = num1 * num2;
      break;
      default:
        resultado = 0;
    }

    return resultado;
  }

}
