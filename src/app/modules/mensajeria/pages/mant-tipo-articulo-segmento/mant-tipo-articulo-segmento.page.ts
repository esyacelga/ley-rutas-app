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
    lstSegmento: Array<ArticuloSegmento>;
    lstTipoArticulos: Array<TipoArticulo>;

    constructor(private svcTipoArticulo: TipoArticuloClientService, private svcArticuloSegmento: ArticuloSegmentoClientService) {
    }

    ngOnInit() {
        this.obtenerTipoArticuloTodos();
        this.obtenerSegmentos();
    }

    crearNuevo() {
        this.segmentoArticulo = new ArticuloSegmento();
    }

    async registrarNuevo(objGuardar: ArticuloSegmento) {
        // @ts-ignore
        await this.svcArticuloSegmento.registarTipoArticuloSegmento(objGuardar);
        this.segmentoArticulo = null;
    }

    async obtenerTipoArticuloTodos() {
        // @ts-ignore
        this.lstTipoArticulos = await this.svcTipoArticulo.obtenerTipoArticulos();
        console.log(this.lstTipoArticulos);
    }


    async obtenerSegmentos() {
        // @ts-ignore
        this.lstSegmento = await this.svcArticuloSegmento.obtenerSegmentos();
    }

    async eliminar(articuloSegmento: ArticuloSegmento) {
        articuloSegmento.estado = 0;
        this.registrarNuevo(articuloSegmento);
        this.segmentoArticulo = null;
    }

}
