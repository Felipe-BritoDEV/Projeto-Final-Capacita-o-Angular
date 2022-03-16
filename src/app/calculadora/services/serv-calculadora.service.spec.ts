import { InjectionToken } from '@angular/core';
import { TestBed, inject } from '@angular/core/testing';

import { ServCalculadoraService } from './serv-calculadora.service';

describe('ServCalculadoraService', () => {
  let service: ServCalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ ServCalculadoraService ]
    });
    service = TestBed.inject(ServCalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1 + 4 = 5', 
    inject([ServCalculadoraService], (service: ServCalculadoraService) => {
      let soma = service.calcular(1, 4, ServCalculadoraService.SOMA);
      expect(soma).toEqual(5);
    })
  );

  it('deve garantir que 1 - 4 = -3', 
    inject([ServCalculadoraService], (service: ServCalculadoraService) => {
      let subtracao = service.calcular(1, 4, ServCalculadoraService.SUB);
      expect(subtracao).toEqual(-3);
    })
  );

  it('deve garantir que 1 / 4 = 0.25', 
    inject([ServCalculadoraService], (service: ServCalculadoraService) => {
      let divisao = service.calcular(1, 4, ServCalculadoraService.DIV);
      expect(divisao).toEqual(0.25);
    })
  );

  it('deve garantir que 1 * 4 = 4', 
    inject([ServCalculadoraService], (service: ServCalculadoraService) => {
      let multi = service.calcular(1, 4, ServCalculadoraService.MULT);
      expect(multi).toEqual(4);
    })
  );



});
