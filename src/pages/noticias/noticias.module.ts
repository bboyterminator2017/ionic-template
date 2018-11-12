import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { NoticiasPage } from './noticias';

@NgModule({
  declarations: [
    NoticiasPage,
  ],
  imports: [
    IonicPageModule.forChild(NoticiasPage),
  ],
})
export class NoticiasPageModule {}
