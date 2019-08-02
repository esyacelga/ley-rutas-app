import {Component, OnInit} from '@angular/core';
import {TipoArticuloClientService} from '../../services/tipo-articulo-client.service';
import {TipoArticulo} from '../../classes/tipo-articulo';
import {ArticuloSegmento} from '../../classes/articulo-segmento';
import {ArticuloSegmentoClientService} from '../../services/articulo-segmento-client.service';

@Component({
    selector: 'app-mant-tipo-articulo-segmento',
    templateUrl: './mant-tipo-articulo-segmento.page.html',
    styleUrls: ['./mant-tipo-articulo-segmento.page.scss'],
})
export class MantTipoArticuloSegmentoPage implements OnInit {
    segmentoArticulo: ArticuloSegmento;
    lstTipoArticulos: Array<TipoArticulo>;

    constructor(private svcTipoArticulo: TipoArticuloClientService, private svcArticuloSegmento: ArticuloSegmentoClientService) {
    }

    ngOnInit() {
        this.obtenerTipoArticuloTodos();
    }

    crearNuevo() {
        this.segmentoArticulo = new ArticuloSegmento();
    }

    async registrarNuevo(objGuardar: ArticuloSegmento) {
        // @ts-ignore
        this.svcArticuloSegmento = await this.svcArticuloSegmento.registarTipoArticuloSegmento(objGuardar);
    }

    async obtenerTipoArticuloTodos() {
        // @ts-ignore
        this.lstTipoArticulos = await this.svcTipoArticulo.obtenerTipoArticulos();
    }


}
