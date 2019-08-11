import {Component, OnInit} from '@angular/core';
import {ArticuloService} from '../../modules/mensajeria/services/articulo.service';
import {Articulo} from '../../modules/mensajeria/classes/Articulo';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
    lstArticulo: Articulo[] = [];
    habilitado = true;

    constructor(private svrArticulo: ArticuloService) {
    }

    async ngOnInit() {
        // @ts-ignore
        this.siguientes();
    }

    recargar() {
        this.siguientes(event, true);
        this.habilitado = true;
        this.lstArticulo = [];
    }

    async siguientes(event?, pull: boolean = false) {
        const data: Articulo[] = [];
        // @ts-ignore
        data = await this.svrArticulo.obtenerArticuloPaginado(pull);
        console.log(this.lstArticulo);
        this.lstArticulo.push(...data);
        if (event) {
            event.target.complete();
            if (0 === data.length) {
                this.habilitado = false;
            }
        }
    }

}
