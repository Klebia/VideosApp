import { IListaSeries } from './../models/ISeriesAPI.models';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { map, catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  lingua = 'pt-BR';
  regiao='BR';
  private apiURL = 'https://api.themoviedb.org/3/';
  private key = '?api_key=157598f441c2903a341d21221957f5e1';

  private dadosSeries: any[] = [];


  constructor(private http: HttpClient, public toastController: ToastController) { }

  buscarSeries(busca: string): Observable <IListaSeries>{
  const url = `${this.apiURL}search/tv${this.key}&language=${this.lingua}&region=${this.regiao}&query=${busca}`;
  return this.http.get<IListaSeries>(url).pipe(
    map(retorno =>retorno), catchError(erro => this.exibirErro(erro))
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
