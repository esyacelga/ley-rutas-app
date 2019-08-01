import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MantTipoArticuloSegmentoPage } from './mant-tipo-articulo-segmento.page';

const routes: Routes = [
  {
    path: '',
    component: MantTipoArticuloSegmentoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MantTipoArticuloSegmentoPage]
})
export class MantTipoArticuloSegmentoPageModule {}
