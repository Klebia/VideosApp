import { IListaSeries, ISeriesAPI } from './../models/ISeriesAPI.models';
import { SeriesService } from './../services/series.service';
import { DadosSeriesService } from './../services/dados-series.service';
import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { ISerie } from '../models/ISerie.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  titulo= 'Series';
  listagemSeries: IListaSeries;
listaSeries: ISerie[] =[
  {
   nomeSerie: 'Lúcifer',
   lancamentoSerie: '25/01/2016',
   duracaoSerie: '45 m',
   classificacaoSerie: 85,
   cartazSerie:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hdKxcoV5CFc3sGOmbGXDXbx1cTZ.jpg',
   generosSerie:['Crime', 'Sci-Fi',  'Fantasy'],
   paginaSerie: '/lucifer'
  },
  {
    nomeSerie: 'Greys Anatomy ',
   lancamentoSerie: '2005',
   duracaoSerie: '45 m',
   classificacaoSerie: 82,
   cartazSerie:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1HAm7sxXu9eGVvs8BIAlkCKGaTd.jpg',
   generosSerie:['Drama'],
   paginaSerie: '/grey'
  },

  {
    nomeSerie: 'The Good Doctor: O Bom Doutor',
   lancamentoSerie: '2017',
   duracaoSerie: '43 m',
   classificacaoSerie: 86,
   cartazSerie:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jtLB7xJKcbekmOYkb5NZditBsgk.jpg',
   generosSerie:['Drama'],
   paginaSerie: '/grey'
  },
  {
    nomeSerie: 'Ragnarok',
   lancamentoSerie: '2020',
   duracaoSerie: '45 m',
   classificacaoSerie: 80,
   cartazSerie:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg',
   generosSerie:['Drama', 'Sci-Fi & Fantasy', 'Mistério'],
   paginaSerie: '/grey'
  },
  {
    nomeSerie: 'Game of Thrones ',
   lancamentoSerie: '2011',
   duracaoSerie: '1h',
   classificacaoSerie: 84,
   cartazSerie:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mQ9cyw1gfpK1M3a69cgXFHvWkih.jpg',
   generosSerie:['Sci-Fi & Fantasy', 'Drama', 'Action & Adventure'],
   paginaSerie: '/grey'
  }



];
constructor(
  public alertController: AlertController,
  public toastController: ToastController,
  public dadosSeries: DadosSeriesService,
  public seriesService: SeriesService,
  public route: Router
  ) {}

  exibirSeries(serie: ISeriesAPI){
    this.dadosSeries.guardarDadosSeries('serie',serie);
    this.route.navigateByUrl('/dados-serie');
  }



  buscarSeries(evento: any){

    console.log (evento.target.value);
    const busca = evento.target.value;

    if(busca && busca.trim() !== ''){
      this.seriesService.buscarSeries(busca).subscribe(dados => {
        console.log(dados);
        this.listagemSeries = dados;

      });

    }


  }


async exibirAlertaFavorito() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Alerta!',
    message: 'Deseja realmente favoritar s série?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',

        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'SIM, favoritar',
        handler: () => {
          this.apresentarToast();
        }
      }
    ]
  });
  await alert.present();

}

async apresentarToast() {
  const toast = await this.toastController.create({
    message: 'Série adicionada aos favoritos',
    duration: 2000, color:'#ccc'
  });
  toast.present();
}



}



