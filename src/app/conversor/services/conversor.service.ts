import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs';
import { Conversao } from '../models/conversao.model';
import { ConversaoResponse } from '../models/conv-response.model';


@Injectable()
export class ConversorService {
  
  private readonly BASE_URL = "http://data.fixer.io/api/latest?access_key=eba7130a5b2d720ce43eb5fcddd47cc3";

  constructor(private http: HttpClient) {}
  

  converter(conversao: Conversao): Observable <any> {
  
    let params = `&base=${conversao.moedaDe}&symbols=${conversao.moedaPara}`;
      return this.http
        .get(this.BASE_URL + params);
        // No Angular 6 as duas próximas linha não são mais necessárias
        //.map(response => response.json() as ConversaoResponse)
        //.catch(error => Observable.throw(error));
  }
  


  cotacaoPara(conversaoResponse: ConversaoResponse, conversao: Conversao): number {
    if (conversaoResponse === undefined) {
      return 0;
    }

    return conversaoResponse.rates[conversao.moedaPara];
  }
  
  
  cotacaoDe(conversaoResponse: ConversaoResponse, conversao: Conversao): string {

    if (conversaoResponse === undefined) {
      return '0';
    }

    return (1 / conversaoResponse.rates[conversao.moedaPara]).toFixed(4);

  }
  

  dataCotacao(conversaoResponse: ConversaoResponse): string {

    if (conversaoResponse === undefined) {
      return '';
    }
    
    return conversaoResponse.date;
  }


}