import {Component, OnInit} from '@angular/core';
import {ArticuloService} from '../../modules/mensajeria/services/articulo.service';
import {Articulo} from '../../modules/mensajeria/classes/Articulo';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
    lstArticulo: Array<Articulo> = null;

    constructor(private svrArticulo: ArticuloService) {
    }

    async ngOnInit() {
        // @ts-ignore
        this.lstArticulo = await this.svrArticulo.obtenerArticuloPaginado();
    }

}
