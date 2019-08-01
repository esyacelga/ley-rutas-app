import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MantTipoArticuloPage } from './mant-tipo-articulo.page';

const routes: Routes = [
  {
    path: '',
    component: MantTipoArticuloPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MantTipoArticuloPage]
})
export class MantTipoArticuloPageModule {}
