import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosSeriesService {

  private dadosSeries: any[] = [];

  constructor() { }

  guardarDadosSeries(index: string, dados: any): boolean{
    if(index){
      this.dadosSeries[index] = dados;
      return true;
    }
    else{
      return false;
    }

  }
pegarDadosSeries(index: string): any {
  if (index){
    return this.dadosSeries[index];
  }
  else{
    return null;
  }
}
deletarDadosSeries(index: string): boolean{
  return delete this.dadosSeries[index];
}
}
