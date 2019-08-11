import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticuloComponent} from './articulo/articulo.component';
import {ArticulosComponent} from './articulos/articulos.component';
import {IonicModule} from '@ionic/angular';
import {PipesModule} from '../pipes/pipes.module';

@NgModule({
    declarations: [
        ArticuloComponent,
        ArticulosComponent
    ],
    exports: [
        ArticulosComponent
    ],
    imports: [
        PipesModule,
        CommonModule,
        IonicModule
    ]
})
export class ComponentsModule {
}
