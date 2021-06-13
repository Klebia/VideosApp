import { IListaFilmes } from './../models/IFilmesAPI.models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  buscarSeries(busca: any) {
    throw new Error('Method not implemented.');
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  lingua = 'pt-BR';
  // eslint-disable-next-line @typescript-eslint/member-ordering
  regiao='BR';
  // eslint-disable-next-line @typescript-eslint/member-ordering
  private apiURL = 'https://api.themoviedb.org/3/';
  // eslint-disable-next-line @typescript-eslint/member-ordering
  private key = '?api_key=157598f441c2903a341d21221957f5e1';
  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(private http: HttpClient, public toastController: ToastController) { }

  buscarFilmes(busca: string): Observable<IListaFilmes>{

    const url = `${this.apiURL}search/movie${this.key}&language=${this.lingua}&region=${this.regiao}&query=${busca}`;
    return this.http.get<IListaFilmes> (url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );



  }
  async exibirErro(erro) {
    const toast = await this.toastController.create({
      message: 'Erro ao consultar a API',
      duration: 2000,
      color:'danger',
      position: 'middle'
    });
    toast.present();
    return null;
  }


}
