import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { NoticiaCompletaPage } from './noticia-completa';

@NgModule({
  declarations: [
    NoticiaCompletaPage,
  ],
  imports: [
    IonicPageModule.forChild(NoticiaCompletaPage),
  ],
})
export class NoticiaCompletaPageModule {}
