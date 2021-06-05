import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map, catchError } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { IListaGenero } from '../models/IGenero.models';


@Injectable({
  providedIn: 'root'
})
export class GeneroService {
  lingua = 'pt-BR';
  private apiURL = 'https://api.themoviedb.org/3/';
  private key = '?api_key=157598f441c2903a341d21221957f5e1';

  constructor(private http: HttpClient, public toastController: ToastController) {}

    buscarGeneros(): Observable<IListaGenero> {
      const url = `${this.apiURL}genre/movie/list${this.key}&language=${this.lingua}`;
    return this.http.get<IListaGenero> (url).pipe(
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
