import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MantArticuloPage } from './mant-articulo.page';

const routes: Routes = [
  {
    path: '',
    component: MantArticuloPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MantArticuloPage]
})
export class MantArticuloPageModule {}
