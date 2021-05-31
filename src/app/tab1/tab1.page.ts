import { DadosService } from './../services/dados.service';
import { IFilme } from '../models/IFilme.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Videos';
  listavideos: IFilme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h 50m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ijvC2w2yANsfgLT3LMu2zFr0fxh.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat'
    },
    {
      nome: 'Cruella (2021)',
      lancamento: '28/05/2021',
      duracao: '2h 14m',
      classificacao:88,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ljPHd7WiPVKmuXi1hgQUpZQslbC.jpg',
      generos: ['Comédia', 'Crime']
    },
    {
      nome: 'Soul (2020)',
      lancamento: '25/12/2020',
      duracao: ' 1h 40m',
      classificacao: 83,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bzDAfXoqNAvWUe7uss2NE3BmRqy.jpg',
      generos: [' Família', 'Animação', 'Comédia', 'Drama', 'Música', 'Fantasia']
    },
    {
      nome: 'Maya the Bee: The Golden Orb (2021)',
      lancamento: ' 07/01/2021 ',
      duracao: '1h 28m',
      classificacao:66,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tMS2qcbhbkFpcwLnbUE9o9IK4HH.jpg',
      generos: ['Aventura', 'Animação', 'Família']
    },
  {
    nome: 'Ferry (2021)',
    lancamento: '14/05/202',
    duracao: '1h 46m ',
    classificacao:71 ,
    cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w6n1pu9thpCVHILejsuhKf3tNCV.jpg',
    generos: ['Ação', 'Crime',  'Drama']
  }
  ];



  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router) {}

    exibirFilme(filme: IFilme){
      this.dadosService.guardarDados('filme',filme);
      this.route.navigateByUrl('/dados-filme');
    }


  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alerta!',
      message: 'Deseja realmente favoritar o filme?',
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
      message: 'Filme adicionado aos favoritos',
      duration: 2000, color:'#ccc'
    });
    toast.present();
  }
}
