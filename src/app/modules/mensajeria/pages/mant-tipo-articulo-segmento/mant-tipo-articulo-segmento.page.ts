import {Component, OnInit} from '@angular/core';
import {TipoArticuloClientService} from '../../services/tipo-articulo-client.service';
import {TipoArticulo} from '../../classes/tipo-articulo';
import {ArticuloSegmento} from '../../classes/articulo-segmento';

@Component({
    selector: 'app-mant-tipo-articulo-segmento',
    templateUrl: './mant-tipo-articulo-segmento.page.html',
    styleUrls: ['./mant-tipo-articulo-segmento.page.scss'],
})
export class MantTipoArticuloSegmentoPage implements OnInit {
    segmentoArticulo: ArticuloSegmento = new ArticuloSegmento();
    lstTipoArticulos: Array<TipoArticulo>;

    constructor(private svcTipoArticulo: TipoArticuloClientService) {
    }

    ngOnInit() {
        this.obtenerTipoArticuloTodos();
    }

    async obtenerTipoArticuloTodos() {
        // @ts-ignore
        this.lstTipoArticulos = await this.svcTipoArticulo.obtenerTipoArticulos();
    }


}
