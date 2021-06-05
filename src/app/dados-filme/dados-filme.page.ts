import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';
import { IFilmesAPI } from '../models/IFilmesAPI.models';

@Component({
  selector: 'app-dados-filme',
  templateUrl: './dados-filme.page.html',
  styleUrls: ['./dados-filme.page.scss'],
})
export class DadosFilmePage implements OnInit {

  filme: IFilmesAPI;
  generos: string[] = [];

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.filme = this.dadosService.pegarDados('filme');
    this.generos  = this.dadosService.pegarDados('generos');
    console.log ('Filme enviado',this.filme);


  }

}
