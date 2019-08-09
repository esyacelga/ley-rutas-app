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

    async ngOnInit() {
        await this.obtenerTipoArticuloTodos();
        await this.obtenerSegmentos();
    }

    crearNuevo() {
        this.segmentoArticulo = new ArticuloSegmento();
    }

    async registrarNuevo(objGuardar: ArticuloSegmento) {
        // @ts-ignore}
        objGuardar.estado = 1;
        await this.svcArticuloSegmento.registarTipoArticuloSegmento(objGuardar);
        await this.obtenerSegmentos();
        this.segmentoArticulo = null;
    }

    async obtenerTipoArticuloTodos() {
        // @ts-ignore
        this.lstTipoArticulos = await this.svcTipoArticulo.obtenerTipoArticulos();
    }


    async obtenerSegmentos() {
        // @ts-ignore
        this.lstSegmento = await this.svcArticuloSegmento.obtenerSegmentos();
    }

    async eliminar(articuloSegmento: ArticuloSegmento) {
        articuloSegmento.estado = 0;
        await this.svcArticuloSegmento.registarTipoArticuloSegmento(articuloSegmento);
        this.obtenerSegmentos();
        this.segmentoArticulo = null;
    }

}
