import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular/umd';
import { NoticiasService } from '../services/noticias.service';
import { Noticia } from '../model/noticia';

/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
})
export class NoticiasPage {
  noticias : Noticia[];


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public service : NoticiasService) {
  }


  ionViewDidLoad() {
    this.getNoticias();
  }

  irParaNoticiaCompleta(n : Noticia){
    this.navCtrl.setRoot('NoticiaCompletaPage',{'noticias' : n});
  }

  getNoticias(){
    this.service.getNoticias()
      .subscribe( response => {
        this.noticias = response;

    
    });

}

}
