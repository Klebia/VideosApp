import { DadosSeriesService } from './../services/dados-series.service';
import { Component, OnInit } from '@angular/core';
import { ISerie } from '../models/ISerie.models';
import { ISeriesAPI } from '../models/ISeriesAPI.models';

@Component({
  selector: 'app-dados-serie',
  templateUrl: './dados-serie.page.html',
  styleUrls: ['./dados-serie.page.scss'],
})
export class DadosSeriePage implements OnInit {
  serie: ISeriesAPI;
  generos: string[] = [];



  constructor(public dadosSeries: DadosSeriesService) { }

  ngOnInit() {
    this.serie=this.dadosSeries.pegarDadosSeries('serie');
    this.generos=this.dadosSeries.pegarDadosSeries('generos');
    console.log('Serie enviado',this.serie);
  }

}
