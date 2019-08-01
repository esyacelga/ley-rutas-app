import {Component, OnInit} from '@angular/core';
import {TipoArticulo} from '../../classes/tipo-articulo';
import {TipoArticuloClientService} from '../../services/tipo-articulo-client.service';

@Component({
    selector: 'app-mant-tipo-articulo',
    templateUrl: './mant-tipo-articulo.page.html',
    styleUrls: ['./mant-tipo-articulo.page.scss'],
})
export class MantTipoArticuloPage implements OnInit {
    objTipoArticulo: TipoArticulo = new TipoArticulo();

    constructor(private srvTipoArticulo: TipoArticuloClientService) {

    }

    ngOnInit() {
    }

    async registrarTipoArticulo(objTipoArticulo: TipoArticulo) {
        this.srvTipoArticulo.registarTipoArticulo(objTipoArticulo);

    }

}
